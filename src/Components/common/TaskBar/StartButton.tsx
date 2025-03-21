'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import StartBtn from '@/../public/StartButton.webp';
import Start_Dots from '@/../public/Start_Dots.webp';
import Image from 'next/image';
import StartComponents from './StartComponents';
import { ChildComponentProps } from '@/Types/Interfaces';
import { useStateManagement } from '@/hooks/StateContext';
import ShutdownEffect from './ShutDownEffect';
import LoggingEffect from './LoggingEffect';

const StartButton: React.FC<ChildComponentProps> = () => {
  const { IsPhone } = useStateManagement();

  const [Start, setStart] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isShutDown, setisShutDown] = useState<Boolean>(false);
  const [isLoggedOff, setIsLoggedOff] = useState<Boolean>(false);

  const startButtonRef = useRef<HTMLDivElement>(null);
  const startComponentsRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      (isShutDown || isLoggedOff) ||
      (startButtonRef.current &&
        !startButtonRef.current.contains(event.target as Node) &&
        startComponentsRef.current &&
        !startComponentsRef.current.contains(event.target as Node))
    ) {
      setStart(false);
    }
  }, [isShutDown, isLoggedOff]);

  useEffect(() => {
    if (Start) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [Start, handleClickOutside]);

  const handleClick = useCallback(() => {
    setStart(prev => !prev);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  }, []);

  return (
    <div className='relative' ref={startButtonRef}>
      {isShutDown && <ShutdownEffect />}
      {isLoggedOff && (
        <LoggingEffect setIsLoggedOff={setIsLoggedOff} />
      )}
      
      <div 
        className={`absolute bottom-full ${Start ? '' : 'hidden'}`} 
        ref={startComponentsRef}
      >
        <StartComponents
          isShutDown={isShutDown}
          setIsShutDown={setisShutDown}
          isLoggedOff={isLoggedOff}
          setIsLoggedOff={setIsLoggedOff}
        />
      </div>

      <div 
        onClick={handleClick} 
        className={`flex ${IsPhone ? 'gap-1' : 'gap-3'} cursor-pointer`}
      >
        <Image
          src={StartBtn}
          alt='Start'
          height={IsPhone ? 20 : 26}
          className={`border-r rounded-r-xl bg-[#18621C] border-[#18621C] ${
            isClicked ? 'brightness-110' : ''
          } transition-all duration-150`}
          priority
        />
        {!IsPhone && (
          <Image
            src={Start_Dots}
            alt='Start Dots'
            width={IsPhone ? 6 : 8}
            priority
          />
        )}
      </div>
    </div>
  );
};

export default StartButton;
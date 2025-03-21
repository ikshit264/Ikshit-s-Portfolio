import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Speaker from '@/../public/Speaker.webp';
import Data_Send from '@/../public/Data_Send.webp';
import Shield_Deactivate from '@/../public/Shield_Deactivate.webp';
import LittleInfo from './LittleInfo';
import { ChildComponentProps } from '@/Types/Interfaces';

const StartMenuRight: React.FC<ChildComponentProps> = ({ IsPhone }) => {
  const [currTime, setCurrTime] = useState<string | null>(null);
  const [isLittleInfoOpen, setIsLittleInfoOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Update time every 1 second
  useEffect(() => {
    const updateTime = () => {
      setCurrTime(
        new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date())
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle clicks outside the component to close `LittleInfo`
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        infoRef.current &&
        !infoRef.current.contains(event.target as Node)
      ) {
        setIsLittleInfoOpen(false);
      }
    };

    if (isLittleInfoOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLittleInfoOpen]);

  // Show the start message for 3 seconds
  useEffect(() => {
    setShowMessage(true);
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showMessage && (
        <div className="relative z-[9999] transition-opacity duration-500 ease-in-out opacity-100">
          <div className="fixed right-[110px] bottom-[30px] w-[20rem] text-center max-w-screen py-3 px-2 bg-[#f0ecdc] border border-[#000000] shadow-md rounded-md">
            Open in full screen mode for better user experience {"{F11/fn + F11}"}
            <div className="absolute w-5 h-5 bg-[#f0ecdc] bottom-[-10px] rotate-45 right-2"></div>
          </div>
        </div>
      )}
      {isLittleInfoOpen && (
        <div ref={infoRef}>
          <LittleInfo />
        </div>
      )}
      <div
        ref={menuRef}
        className={`flex cursor-pointer justify-center h-full absolute right-0 px-1 border-l-[#16B7FD] ${
          isLittleInfoOpen ? 'bg-[#205eaa] shadow-inner shadow-[#5e5e5e]' : 'bg-[#408BE6] shadow-sm'
        }`}
        onClick={() => setIsLittleInfoOpen((prev) => !prev)}
      >
        <div className={`flex justify-center items-center ${IsPhone ? '' : 'gap-1'}`}>
          {[Speaker, Data_Send, Shield_Deactivate].map((icon, index) => (
            <Image key={index} src={icon} alt="Icon" width={IsPhone ? 14 : 20} />
          ))}
          <span
            className={`text-white px-1 whitespace-nowrap ${IsPhone ? 'text-xs' : 'text-md'}`}
          >
            {currTime || 'Loading...'}
          </span>
        </div>
      </div>
    </>
  );
};

export default StartMenuRight;

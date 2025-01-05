import React, { useState } from 'react';
import { AllFolders } from '@/Data/All-Data';
import Image from 'next/image';
import { useStateManagement } from '@/hooks/StateContext';

const FolderContent = () => {
  const { makeFalse, makeTrue } = useStateManagement();
  
  const [isOpen1, setIsOpen1] = useState<boolean>(true);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  return (
    <div className='flex flex-col justify-start items-start pl-4'>
      <div className='pt-2'>
        <span
          className='flex items-center text-center gap-1 cursor-pointer'
          onClick={() => setIsOpen1(prev => !prev)}
        >
          <div className='h-3 w-3 bg-gradient-to-b from-[#F0F0FF] to-[#A2B5F3] font-bold text-xl flex items-center justify-center pb-2 rounded-[2px] border p-0.5 border-teal-600'>
            {isOpen1 ? '-' : '+'}
          </div>
          Ikshit_04
        </span>
        <div className={`pl-4 pt-2 ${isOpen1 ? '' : 'hidden'}`}>
          <span
            className='flex items-center gap-1 cursor-pointer'
            onClick={() => setIsOpen2(prev => !prev)}
          >
            <div className='h-3 w-3 bg-gradient-to-b from-[#F0F0FF] to-[#A2B5F3] font-bold text-xl flex items-center justify-center pb-2 rounded-[2px] border p-0.5 border-teal-600'>
              {isOpen2 ? '-' : '+'}
            </div>
            Desktop
          </span>
          <div className={`px-8 pt-2 flex flex-col gap-2 ${isOpen2 ? '' : 'hidden'}`}>
            {AllFolders.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${index === index ? 'border-2 border-dashed px-1' : ''} cursor-pointer`}
                onDoubleClick={() => {
                  makeTrue(index, 'open');
                  makeFalse(index, 'min');
                }}
              >
                <Image src={item.IconClose} alt={item.title} width={20} />
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderContent;

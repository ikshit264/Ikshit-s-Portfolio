import React from 'react';
import ME from "@/../public/ME.webp"
import Linkedin from "@/../public/Linkedin.webp"
import Image from 'next/image';


const LittleInfo = () => {

  return (
    <div className='fixed right-[0px] bottom-[30px] w-[25rem] max-w-screen p-4 bg-[#c0c0c0] border border-[#000000] shadow-md rounded-lg'>
      <div className='text-center'>
        <div className='flex justify-center items-center'>
          <div className='basis-1/2'>
            <Image src={ME} width={100} height={100} className='rounded' alt="ME" loading="lazy"/>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-[#000080]'>Good Morning Bhai!</h1>
            <p className='text-lg mt-2 text-[#000000]'>Welcome to my portfolio site.</p>
            <p className='text-xs text-[#000000]'>I&apos;m Ikshit Talera, and I&apos;m passionate about building exceptional web experiences.</p>
          </div>
        </div>
        <a
          href='https://www.linkedin.com/in/ikshit04/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mt-4 text-[#0000ff] hover:text-[#ff0000] underline'
        >
          <Image src={Linkedin} width={24} height={24} className='rounded' alt="Linkedin" loading="lazy"/>
        </a>
      </div>
    </div>
  );
}

export default LittleInfo;

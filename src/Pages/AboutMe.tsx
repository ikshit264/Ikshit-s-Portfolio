import { ChildComponentProps } from '@/Types/Interfaces';
import React from 'react';

const AboutMe: React.FC<ChildComponentProps> = ({ makeTrue })=> {

  if (!makeTrue){
    return null;
  }

  const handleCLick = () => {
    makeTrue(0, 'open')
    setTimeout(() => {
      makeTrue(0, 'open')
    }, 100);
  }

  return (
    <div className='p-6 flex justify-center items-center bg-cover'>
      <div className='border border-gray-500 shadow-md bg-gray-100'>
        {/* Title Bar */}
        <div className='fle justify-between items-center bg-blue-600 text-white p-2'>
          {/* <span className='font-bold text-lg'>My Computer</span> */}
          <div className='flex space-x-1 justify-end'>
            <button className='flex justify-center items-center w-4 h-4 bg-blue-500 hover:bg-blue-800'>-</button>
            <button className='flex justify-center items-center w-4 h-4 bg-blue-500 hover:bg-blue-800'>□</button>
            <button className='flex justify-center items-center w-4 h-4 bg-red-400 hover:bg-red-700'>x</button>
          </div>
        </div>

        {/* Content */}
        <div className='p-10 max-w-[1000px]'>
          <p className='text-4xl font-bold mb-4 bg-gray-200 p-2 rounded-lg shadow-inner border border-gray-400'>
            Good Morning <span className='text-blue-600'>भाई</span>;
          </p>
          <p className='text-xl mb-6'>
            Welcome to my portfolio site! I’m Ikshit Talera, a dedicated developer specializing in crafting unique and functional web applications.
          </p>
          <p className='text-lg mb-6'>
            I have a strong background in React, Next.js, and Tailwind CSS, and I’m passionate about leveraging these technologies to build cutting-edge web experiences. From dynamic user interfaces to efficient backend solutions, I enjoy tackling challenges and pushing the boundaries of what’s possible.
          </p>
          <p className='text-lg mb-8'>
            Explore my work to see how I blend creativity with technical skills to deliver high-quality solutions. Whether you’re interested in a new project or just want to chat about technology, feel free to get in touch!
          </p>
          <button
            onClick={()=>{handleCLick()}}
            className='cursor-pointer bg-blue-300 text-gray-900 py-2 px-4 rounded-md font-bold border border-gray-500 hover:bg-blue-400 transition-colors'
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
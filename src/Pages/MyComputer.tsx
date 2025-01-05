import React from 'react';
import Image from 'next/image';
import SharedDocsIcon from '@/../public/Shared_Folder_Close.png';
import UserDocsIcon from '@/../public/MyDocuments.png';
import LocalDiskIcon from '@/../public/LocalDisk.png';
import CDDriveIcon from '@/../public/CDDrive.png';
import GithubIcon from '@/../public/GitHub.png';
import DogeIcon from '@/../public/Do_Not_Open.png';
import { ChildComponentProps } from '@/Types/Interfaces';

// Reusable Gradient Line Component
const GradientLine: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`w-[200px] h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#232323] to-[#CBE3FF] ${className}`} />
);

const MyComputer: React.FC<ChildComponentProps> = ({ makeTrue }) => {

  if (!makeTrue){
    return null;
  }

  const handleclick = (index : number) => {
    makeTrue(index!, 'open');
    setTimeout(() => {
      makeTrue(index!, 'open');
    }, 100);
  }

  return (
    <div className="h-full p-4 bg-gray-100 border border-gray-400 shadow-lg overflow-y-auto">
      {/* Files Stored on This Computer */}
      <section className="mb-4">
        <h2 className="text-sm font-bold p-1">Files Stored on This Computer</h2>
        <GradientLine className="mb-2" />
        <div className="flex gap-4">
          <button onClick={()=>{handleclick(5)}} className="flex flex-col items-center">
            <Image src={SharedDocsIcon} alt="Experience" width={40} height={40} />
            <span className="text-xs mt-1 text-center">Experience</span>
          </button>
          <button onClick={()=>{handleclick(7)}} className="flex flex-col items-center">
            <Image src={UserDocsIcon} alt="User's Documents" width={40} height={40} />
            <span className="text-xs mt-1 text-center">About ME</span>
          </button>
        </div>
      </section>

      {/* Hard Disk Drives */}
      <section className="mb-4">
        <h2 className="text-sm font-bold p-1">Hard Disk Drives</h2>
        <GradientLine className="mb-2" />
        <div className="flex gap-4">
          <button onClick={()=>{handleclick(0)}} className="flex flex-col items-center">
            <Image src={LocalDiskIcon} alt="Local Disk (C:)" width={40} height={40} />
            <span className="text-xs mt-1 text-center">Local Disk (C:)</span>
          </button>
        </div>
      </section>

      {/* Devices with Removable Storage */}
      <section className="mb-4">
        <h2 className="text-sm font-bold p-1">Devices with Removable Storage</h2>
        <GradientLine className="mb-2" />
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <Image src={CDDriveIcon} alt="CD Drive (D:)" width={40} height={40} />
            <span className="text-xs mt-1 text-center">CD Drive (D:)</span>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section>
        <h2 className="text-sm font-bold p-1">About Me :)</h2>
        <GradientLine className="mb-2" />
        <div className="flex gap-4">
          <a className="flex flex-col items-center" href="https://github.com" target='_blank'>
            <Image src={GithubIcon} alt="Github" width={40} height={40} />
            <span  className="text-xs mt-1 text-blue-600">Github</span>
          </a>
          <a href="/" className="flex flex-col items-center">
            <Image src={DogeIcon} alt="My Website" width={40} height={40} />
            <span className="text-xs mt-1 text-blue-600">My Website</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default MyComputer;

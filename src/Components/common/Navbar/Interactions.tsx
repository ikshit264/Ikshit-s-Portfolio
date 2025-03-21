import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Backword from '@/../public/Back.webp'
import Search from '@/../public/Search.webp'
import Forword from '@/../public/Forward.webp'
import IE_Stop from '@/../public/IE_Stop.webp'
import HLP from '@/../public/HLP.webp'
import Printer from '@/../public/Printer.webp'
import Email from '@/../public/Emails.webp'
import IE_Media from '@/../public/Medias.webp'
import IE_Refresh from '@/../public/IE_Refresh.webp'
import IE_Home from '@/../public/IE_Home.webp'
import { ChildComponentProps } from '@/Types/Interfaces'
import { useStateManagement } from '@/hooks/StateContext'
import { usePlayMP3 } from "@/utils/PlayError"

const HandleImage = (image: StaticImageData, alt: string, tooltip: string, isActive: boolean, func?: (e : React.MouseEvent<HTMLDivElement>) => void) => {

  return (
    <div
    title={tooltip}
      className={`flex items-center ${isActive ? 'hover:border' : 'brightness-90'} justify-center p-1  w-[35px] border-black rounded hover:bg-slate-200 hover:cursor-pointer relative group`}
      onClick={func}
    >
      <Image src={image} alt={alt} width={25} height={20} />
    </div>
  );
};

const Interactions: React.FC<ChildComponentProps> = ({ index }) => {
  const { Open, makeFalse, makeTrue } = useStateManagement();
  const { play} = usePlayMP3();

  const handleEmailClick = () => {
    const email = 'ikshit.talera@gmail.com';
    const subject = 'Hello from your website';
    const body = `Hi there, I wanted to get in touch with you. User Email: `;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleHome = () => {
    let i = 0;
    const Variable = Open.map((value, index) => value ? index : null).filter(index => index !== null);
    const intervalID = setInterval(() => {
      if (i < Variable.length) {
        makeTrue(Variable[i], 'min');
        i++;
      } else {
        clearInterval(intervalID);
      }
    }, 300);
  };

  const HandleRefresh = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (index !== undefined) {
      makeFalse(index, 'open');
      setTimeout(() => {
        makeTrue(index, 'open');
      }, 1000);
    }
  };

  const HandleCloseAll = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    {
      let i = 0;
      const Variable = Open.map((value, index) => value ? index : null).filter(index => index !== null);
      const intervalID = setInterval(() => {
        if (i < Variable.length) {
          makeFalse(Variable[i], 'open');
          i++;
        } else {
          clearInterval(intervalID);
        }
      }, 300);
    }
  }

  const HandleMusicClick = () => {
    play()
  }

  const ClickHelp = () => {
    makeTrue(3, 'open')
    setTimeout(() => {
      makeTrue(3, 'open')
    }, 100);
  }

  const ClickPrint = () => {
    const resumePath = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "ikshit_resume.pdf";
    link.click();
  }

  return (
    <div className="flex gap-2 border-t-[1px] border-[#E2DECD] bg-[#F0F0E7] h-10 w-full overflow-x-scroll no-scrollbar">
      <div className="flex gap-1 border-r-[2px] pr-2 border-r-white">
        <div className="flex items-center p-0.5 gap-3">
          <div className='flex items-center bg-black/10 px-1  rounded-[2px]'>
            {HandleImage(Backword, "Backward", "Backward", false)}
            <span>Backward</span>
          </div>
          <div className='flex items-center bg-black/10  rounded-[2px]'>
            {HandleImage(Forword, "Forward", "Forward", false)}
          </div>
        </div>
        <div className="flex items-center p-0.5 gap-1 border-l-[2px] border-l-white ">
          {HandleImage(IE_Stop, "IE_Stop", "Close All", true, (e) => HandleCloseAll(e!))}
          {HandleImage(IE_Refresh, "IE_Refresh", "Refresh All", true, (e) => e ? HandleRefresh(e) : () => { })}
          {HandleImage(IE_Home, "IE_Home", "Ghar Chalo", true, handleHome)}
        </div>
      </div>
      <div className="flex gap-1  pr-2 border-r-[2px] border-r-white items-center">
        <div className='flex items-center bg-black/10  rounded-[2px]'>
          {HandleImage(Search, "Search", "Search", false)}
        </div>
        {HandleImage(Email, "Email", "Email Me", true, handleEmailClick)}
        {HandleImage(IE_Media, "Media", "My Media", true, HandleMusicClick)}
      </div>
      <div className="flex gap-1 items-center">
        {/* <div className='flex items-center bg-black/10  rounded-[2px]'>
          {HandleImage(Blogs!, "Blog", "Blogs", false)}
        </div> */}
        {HandleImage(Printer, "Printer", "Print CV", true, ClickPrint)}
        <div>
          {HandleImage(HLP, "Help", "Help", true, ClickHelp)}
        </div>
      </div>
    </div>
  );
};

export default Interactions;

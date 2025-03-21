import React from 'react';
import DoubleUpARrow from '@/../public/Double_Arrow_Up.webp'
import Image, { StaticImageData } from 'next/image';

interface Social {
    image: StaticImageData;
    Description: string;
    link: string;
}

interface MyProps {
    title: string,
    socials: Social[];
}

const Content: React.FC<MyProps> = ({ title, socials }) => {
    // Provide a default value or handle the undefined case
    if (!socials || socials.length === 0) {
        return null;
    }

    return (
        <div className='flex flex-col justify-start rounded-md m-2 items-start '>
            <div className='flex justify-between items-center bg-gradient-to-r w-full from-[#F0F0FF] to-[#A2B5F3] px-2 rounded-t-sm text-md text-[#0C327D] font-bold'>
                <div>
                    {title}
                </div>
                <Image src={DoubleUpARrow} width={25} height={25} alt='DoubleUp'/>
            </div>
            <div className='flex flex-col bg-gradient-to-r from-[#B4C8FB] via-[#A6BAFB] to-[#B3C7FB] w-full gap-1 py-2'>
                {socials.map((social, index) => (
                    <button key={index} className='flex items-center justify-between w-full gap-1 text-sm '>
                        <a href={social.link} target='_blank' className='flex items-center pl-3 gap-1 hover:underline hover:text-blue-700'>
                            <Image src={social.image} alt={social.image.toString()} width={20} height={20}/>
                            <p>{social.Description}</p>
                        </a>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Content;

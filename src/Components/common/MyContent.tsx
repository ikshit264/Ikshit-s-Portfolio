import React from 'react';
import { MyComputerProp } from '@/Types/Interfaces';
import Content from './Navbar/Content';
import Linkedin from '@/../public/Linkedin.png';
import GitHub from '@/../public/GitHub.png';
import InstaGram from '@/../public/Instagram.png';
import Codechef from '@/../public/codechef.png';
import codeforces from '@/../public/codeforces.png';
import Leetcode from '@/../public/leetcode.png';

//TODO -  {You can contribute here}
import xpQuotes from '@/./Data/xp_quotes.json'; 

const MySocials: MyComputerProp = {
    title: 'My Socials',
    socials: [
        {
            Description: "Linkedin",
            image: Linkedin,
            link: 'https://www.linkedin.com/in/ikshit-talera-ab137725a/'
        },
        {
            Description: "Github",
            image: GitHub,
            link: 'https://github.com/ikshit264'
        },
        {
            Description: "Instagram",
            image: InstaGram,
            link: 'https://www.instagram.com/ikshit_04/'
        }
    ]
};

const MyCompetative: MyComputerProp = {
    title: 'My Competative',
    socials: [
        {
            Description: "Leetcode",
            image: Leetcode,
            link: 'https://leetcode.com/u/ikshit_04/'
        },
        {
            Description: "Codechef",
            image: Codechef,
            link: 'https://www.codechef.com/users/ikshit_04'
        },
        {
            Description: "Codeforces",
            image: codeforces,
            link: 'https://codeforces.com/profile/ikshit_04'
        }
    ]
};

const MyContent = () => {
    // Select a random quote from the XP quotes JSON
    const randomQuote = xpQuotes[Math.floor(Math.random() * xpQuotes.length)];

    return (
        <div className='flex flex-col gap-2'>
            <div>
                <Content socials={MySocials.socials} title={MySocials.title} />
            </div>
            <div>
                <Content socials={MyCompetative.socials} title={MyCompetative.title} />
            </div>
            <div className='p-4 bg-blue-200 rounded-md shadow-md m-2'>
                <h3 className='font-bold text-lg'>XP Quote:</h3>
                <p className='italic text-sm'>{randomQuote.message}</p>
            </div>
        </div>
    );
};

export default MyContent;

import React, { useEffect, useState } from 'react';
import WindowXPLogo from "@/../public/WindowsXPLogo.webp"
import Image from 'next/image';

interface LoggingProps {
    setIsLoggedOff: React.Dispatch<React.SetStateAction<Boolean>>;
}

const LoggingEffect: React.FC<LoggingProps> = ({ setIsLoggedOff }) => {
    const [backgroundColor, setBackgroundColor] = useState('bg-black');
    const [isReady, setIsReady] = useState<Boolean>(false);
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        // Start the color transition after the component mounts
        const timer = setTimeout(() => {
            setBackgroundColor('bg-blue-500'); // Target background color
        }, 100);

        const isReadyTimer = setTimeout(() => {
            setIsReady(true);
        }, 2000);

        const textFadeInTimer = setTimeout(() => {
            setTextVisible(true);
        }, 500); // Delay text fade-in effect

        return () => {
            clearTimeout(timer);
            clearTimeout(isReadyTimer);
            clearTimeout(textFadeInTimer);
        }; // Cleanup on unmount
    }, []);

    const handleMove = () => {
        if (isReady) {
            setBackgroundColor('bg-transparent');
            setTimeout(() => {
                setIsLoggedOff(false);
            }, 1000);
            setTextVisible(false)
        }
    };

    return (
        <div>
            <div
                onMouseMove={handleMove}
                className={`fixed inset-0 z-[999] flex flex-col items-center justify-center transition-colors duration-2000 ${backgroundColor}`}
            >
                <Image src={WindowXPLogo} alt='Windows XP Logo' width={200} className={`${textVisible ? '' : 'hidden'}`}/>
                <div
                    className={`text-white text-xl mb-8 transition-opacity duration-1000 ${
                        textVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    Move Mouse to Resume
                </div>
            </div>
        </div>
    );
};

export default LoggingEffect;

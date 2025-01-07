import Image, { StaticImageData } from 'next/image';
import React, { useRef, useEffect } from 'react';
import CMD_img from "@/../public/Command_Prompt.png";
import { useStateManagement } from '@/hooks/StateContext';

interface Position {
    x: number;
    y: number;
}

interface RightClickedProps {
    position: Position;
    ChangeBackground: () => void; // Make sure it's typed as a function
}

interface ContentProps {
    Title: string;
    isActive: boolean;
    image?: StaticImageData;
    function?: () => void;  // Ensure the function is typed as a function with no parameters
    items?: ContentProps[];
}

const RightClicked: React.FC<RightClickedProps> = ({ position, ChangeBackground }) => {
    const { makeTrue } = useStateManagement();
    const menuRef = useRef<HTMLDivElement>(null);

    const OnRefresh = () => {
        // e.stopPropagation();
        window.location.reload();
    }

    const ClickCMD = () => {
        makeTrue(4, 'open');
    }

    const Content: ContentProps[] = [
        {
            Title: "Personalise",
            isActive: true,
            items: [{ Title: 'Change Background', isActive: true, function: ChangeBackground }],
        },
        { Title: "CMD", isActive: true, image: CMD_img, function: ClickCMD },
        { Title: "Refresh", isActive: true, function: OnRefresh },
        { Title: "Paste", isActive: false },
        { Title: "Copy", isActive: false },
    ];


    useEffect(() => {
        if (menuRef.current) {
            const menu = menuRef.current;
            const rect = menu.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            if (position.x + rect.width > viewportWidth) {
                menu.style.left = `${viewportWidth - rect.width}px`;
            } else {
                menu.style.left = `${position.x}px`;
            }

            if (position.y + rect.height > viewportHeight) {
                menu.style.top = `${viewportHeight - rect.height - 25}px`;
            } else {
                menu.style.top = `${position.y}px`;
            }
        }
    }, [position]);

    return (
        <div
            ref={menuRef}
            className="fixed flex flex-col gap-[1px] p-1 bg-[#dad7d7] shadow-black shadow-sm z-[20]"
            style={{
                left: position.x,
                top: position.y,
            }}
        >
            {Content.map((item, index) => (
                <div key={index} onClick={item.function ? item.function : () => { }} className="relative group w-full">
                    <button
                        title={item.Title}
                        className={`${item.isActive
                            ? 'bg-[#dad7d7] relative hover:bg-[#ebeff5] hover:border-[#b5d6f7]'
                            : 'bg-[#c1bdbd] backdrop-blur'
                            } px-1 border-transparent border-[1px] w-full whitespace-nowrap transition-colors duration-200 text-left`}
                    >
                        <span className='flex flex-row items-center'>
                            {item.image && <Image src={item.image} width={20} alt='img' />}
                            <span className='ml-2'>
                                {item.Title}
                            </span>
                            {item.items && <span className="ml-2">{'>'}</span>}
                        </span>
                    </button>

                    {item.items && (
                        <div
                            className="absolute left-full whitespace-nowrap top-0 hidden group-hover:flex flex-col gap-[1px] bg-[#dad7d7] shadow-md p-1 z-10"
                            style={{
                                minWidth: '150px',
                            }}
                        >
                            {item.items.map((elem, subIndex) => (
                                <button
                                    title={elem.Title}
                                    onClick={elem.function ? elem.function : () => { }}
                                    key={subIndex}
                                    className={`${elem.isActive
                                        ? 'bg-[#dad7d7] hover:bg-[#ebeff5] hover:border-[#b5d6f7]'
                                        : 'bg-gray-400 hover:bg-gray-500/30 '
                                        } px-1 py-1 border-transparent border-[1px] transition-colors duration-200 text-left`}
                                >
                                    {elem.Title}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RightClicked;

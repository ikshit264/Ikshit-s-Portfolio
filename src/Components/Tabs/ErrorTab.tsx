import Image from 'next/image';
import React, { useState } from 'react';
import Critical from '@/../public/Critical.png';
import Exit from '@/../public/Exit.png';
import { ChildComponentProps } from '@/Types/Interfaces';
import { Rnd } from 'react-rnd';
import { useStateManagement } from '@/hooks/StateContext';
import { ErrorData } from '@/Data/All-Error-Data';

const ErrorTab: React.FC<ChildComponentProps> = ({ index }) => {
    const [IsActive, setIsActive] = useState<Boolean>(false);
    const { IsPhone } = useStateManagement();
    const { makeErrorFalse, makeErrorTrue, IsFrontError } = useStateManagement();

    const handleClick = () => {
        setIsActive(true);
        setTimeout(() => {
            makeErrorFalse(index!, 'Open');
        }, 250);
    };

    const initialPosition = IsPhone 
        ? { x: 0, y: ErrorData[index!]?.Position.y } 
        : { x: ErrorData[index!]?.Position.x, y: ErrorData[index!]?.Position.y };

    const containerSize = IsPhone ? { width: window && window.innerWidth, fontSize: '12px' } : { width: 400, fontSize: '16px' };

    return (
        <div onClick={() => makeErrorTrue(index!, 'Open')}>
            <Rnd
                default={{
                    x: initialPosition.x,
                    y: initialPosition.y,
                    width: containerSize.width,
                    height: 'auto',
                }}
                minWidth={containerSize.width}
                bounds="body"
                dragHandleClassName="handle" 
                enableResizing={false} 
                style={{ zIndex: IsFrontError === index ? 10 : 1 }}
            >
                <div
                    className="border-2 rounded border-blue-800"
                    style={{ fontSize: containerSize.fontSize }}
                >
                    <div className="handle flex justify-between cursor-move p-2 bg-[#225AD8] gap-2">
                        <div className="flex gap-2 text-white">
                            <Image src={Critical} alt="Error" width={IsPhone ? 20 : 25} height={IsPhone ? 20 : 25} />
                            <span>C:/</span>
                        </div>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                makeErrorFalse(index!, 'Open');
                            }}
                            className="cursor-pointer hover:brightness-110"
                        >
                            <Image src={Exit} alt="close" width={IsPhone ? 20 : 25} height={IsPhone ? 20 : 25} />
                        </div>
                    </div>
                    <div className="bg-slate-100 p-2">
                        <div className="flex gap-4 justify-start p-2 items-center">
                            <Image src={Critical} alt="Error" width={IsPhone ? 30 : 35} height={IsPhone ? 30 : 35} />
                            <div>
                                <div>C:/</div>
                                <div>Application Not Found</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button title='OK'
                                onClick={() => handleClick()}
                                className={`px-4 border-2 font-medium border-black ${
                                    IsActive ? 'shadow-black shadow-inner' : ''
                                }`}
                                style={{
                                    fontSize: IsPhone ? '10px' : '14px',
                                    padding: IsPhone ? '4px 8px' : '4px 12px', 
                                }}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </Rnd>
        </div>
    );
};

export default ErrorTab;

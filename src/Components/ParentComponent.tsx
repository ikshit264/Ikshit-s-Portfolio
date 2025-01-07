'use client'

import React from 'react';
import { AllFolders } from '@/Data/All-Data';
import Template from './common/Template';
import { useStateManagement } from '../hooks/StateContext';
import Image from 'next/image';
import StartMenu from './common/TaskBar/StartMenu';
import { ErrorData } from '@/Data/All-Error-Data';

const ParentComponent: React.FC = () => {

    const { Open, Min, Max, makeFalse, makeTrue, IsPhone } = useStateManagement();
    const { OpenError, MinError, MaxError, makeErrorFalse, makeErrorTrue } = useStateManagement();

    return (
        <div className='relative max-h-screen'>
            <div className=' grid grid-cols-2 grid-rows-6 max-w-[300px]' style={{ height: 'calc(100vh - 28px)' }}>
                {AllFolders.map((folder, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <button title={folder.title} {...(IsPhone
                            ? {
                                onClick: () => {
                                    makeTrue(index, 'open');
                                    makeFalse(index, 'min');
                                    makeTrue(index, 'max');
                                },
                            }
                            : {
                                onDoubleClick: () => {
                                    makeTrue(index, 'open');
                                    makeFalse(index, 'min');
                                },
                            })}>
                            <span className='flex flex-col items-center'>
                                <span>
                                    {!Open[index] && <Image src={folder.IconClose} alt={folder.title} width={50} height={50} />}
                                    {Open[index] && <Image src={folder.IconOpen} alt={folder.title} width={50} height={50} />}
                                </span>
                                <span className='text-white font-medium select-none'> {folder.title} </span>
                            </span>
                        </button>
                    </div>
                ))}
            </div>
            <div className="">
                {AllFolders.map((folder, index) => (
                    <div key={index} className={` absolute top-0 ${Min[index] ? 'hidden' : ''}`}>
                        {Open[index] && (<Template
                            Title={folder.title}
                            icon={folder.IconClose}
                            Tab={folder.Tab}
                            //*TODO - Desctiption='To be Added in AllFolders'
                            index={index}
                            Open={Open}
                            Max={Max}
                            Min={Min}
                            makeTrue={makeTrue}
                            makeFalse={makeFalse} />)
                        }
                    </div>
                ))}
            </div>
            <div className="">
                {ErrorData.map((folder, index) => (
                    <div key={index} className={` absolute top-0 `} >
                        {OpenError[index] && (<Template
                            Title={folder.title}
                            icon={folder.IconClose}
                            Tab={folder.Tab}
                            index={index}
                            Open={OpenError}
                            Max={MaxError}
                            Min={MinError}
                            makeTrue={makeErrorTrue}
                            makeFalse={makeErrorFalse} />)
                        }
                    </div>
                ))}
            </div>
            <StartMenu Open={Open}
                Max={Max}
                Min={Min}
                makeTrue={makeTrue}
                makeFalse={makeFalse}
                IsPhone={IsPhone} />
        </div>
    );
};

export default ParentComponent;

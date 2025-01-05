import React, { useState } from 'react';
import Image from 'next/image';
import { ChildComponentProps } from '@/Types/Interfaces';
import { useStateManagement } from '@/hooks/StateContext';


const OpenTab: React.FC<ChildComponentProps> = ({ Title, icon, index }) => {
  const { Min, makeFalse, makeTrue, IsPhone } = useStateManagement();

  const [Click, setClick] = useState(Min[index!]);

  const handleClick = (index: number) => {
    if (!Min[index]){
      makeTrue(index, 'min')
    }
    else{
      makeFalse(index, 'min')
      makeTrue(index, 'open')
    }
  }

  return (
    <div className={`flex items-center gap-1 hover:cursor-pointer ${Click ? ' shadow-black bg-[#408BE6] shadow-sm' : 'bg-[#205eaa] shadow-inner shadow-black'} p-0.5 pl-3   hover:brightness-110 w-32`} onClick={() =>{ setClick(prev => !prev); handleClick(index!) }}>
      <Image src={icon!} alt={Title?.toString()!} width={IsPhone ? 12 : 20} height={20} />
      <span className={`whitespace-nowrap overflow-hidden text-ellipsis text-white ${IsPhone ? 'text-xs' : 'text-sm'} `}>{Title}</span>
    </div>
  );
}

export default OpenTab;

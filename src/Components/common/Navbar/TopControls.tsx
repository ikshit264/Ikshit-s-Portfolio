import { ChildComponentProps } from '@/Types/Interfaces';
import Image from 'next/image';
import React from 'react';
import Exit from '@/../public/Exit.png';
import Minimize from '@/../public/Minimize.png';
import Maximize from '@/../public/Maximize.png';

interface TopControlsProps extends ChildComponentProps {
  handleMax: () => void;
}

const TopControls: React.FC<TopControlsProps> = ({
  makeTrue,
  makeFalse,
  index,
  icon,
  Title,
  handleMax
}) => {
  if (!makeTrue || !makeFalse) {
    return null;
  }

  const handleMin = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    makeTrue(index!, 'min');
  };

  const handleClose = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    makeFalse(index!, 'open');
    console.log("Closed")
  };

  const handleDoubleClick = (e: React.MouseEvent | React.TouchEvent ) => {
    e.stopPropagation();
    handleMax();
  }

  return (
    <div
      className="handle flex justify-between cursor-move p-2 bg-[#225AD8]"
      onClick={() => makeTrue(index!, 'open')}
      onDoubleClick={(e) => {handleDoubleClick(e)}}
    >
      {/* Header with Icons */}
      <div className="flex gap-2 text-white">
        <Image src={icon!} alt={Title!} width={25} height={25} />
        {Title}
      </div>
      <div className="flex gap-1 z-40">
        <button title="Minimize" onClick={(e) => {handleMin(e)}} onTouchStart={(e) => handleMin(e)} className="cursor-pointer hover:brightness-110">
          <Image src={Minimize} alt="Minimize" width={25} height={25} />
        </button>
        <button title='Maximise' onClick={() => {handleMax()}} onTouchStart={() => handleMax()} className="cursor-pointer hover:brightness-110">
          <Image src={Maximize} alt="Maximize" width={25} height={25} />
        </button>
        <button title='Close' onClick={(e) => {handleClose(e)}} onTouchStart={(e)=>{handleClose(e)}} className="cursor-pointer hover:brightness-110">
          <Image src={Exit} alt="Close" width={25} height={25} />
        </button>
      </div>
    </div>
  );
};

export default TopControls;

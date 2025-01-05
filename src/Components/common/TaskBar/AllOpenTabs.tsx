import React, { useEffect, useState } from 'react';
import OpenTab from './OpenTab';
import { AllFolders } from '@/Data/All-Data';
import { ChildComponentProps } from '@/Types/Interfaces';
import { useStateManagement } from '@/hooks/StateContext';

const AllOpenTabs: React.FC<ChildComponentProps> = () => {
  const { Open, Min, Max, makeFalse, makeTrue, IsPhone } = useStateManagement();

  const [AllOpen, setAllOpen] = useState<number[]>([]);

  useEffect(() => {
    const updatedAllOpen = Open
      .map((isOpen, index) => isOpen ? index : null)
      .filter(index => index !== null) as number[];

    setAllOpen(updatedAllOpen);
  }, [Open]);

  return (
    <div className='flex h-full flex-nowrap gap-1 min-w-[200px] overflow-x-scroll no-scrollbar'>
      <div className='flex overflow-x-auto no-scrollbar'>
        {AllOpen.map((index) => (
          <div key={index} className='pr-2'>
            <OpenTab
              Max={Max}
              Min={Min}
              Open={Open}
              icon={AllFolders[index].IconClose}
              Title={`${AllFolders[index].title}`}
              index={index}
              makeFalse={makeFalse}
              makeTrue={makeTrue}
              IsPhone={IsPhone}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOpenTabs;


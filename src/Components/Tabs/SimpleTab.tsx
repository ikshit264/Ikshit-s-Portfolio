'use client'

import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../common/Navbar/NavBar';
import MyContent from '../common/MyContent'; // Assuming this is the correct import

import { ChildComponentProps } from '@/Types/Interfaces';
import { Rnd } from 'react-rnd';
import { AllFolders } from '@/Data/All-Data';
import { useStateManagement } from '@/hooks/StateContext';
import TopControls from '../common/Navbar/TopControls';

type This = ChildComponentProps & {
  FolderContentAppaer?: boolean;
};

const SimpleTab: React.FC<This> = ({ index, Title }) => {
  const { Open, Min, Max, makeFalse, makeTrue, IsFront, IsPhone } = useStateManagement();

  const [width, setWidth] = useState(AllFolders[index!].Size.w);
  const [height, setHeight] = useState(AllFolders[index!].Size.h);
  const [position, setPosition] = useState({
    x: IsPhone ? 0 : AllFolders[index!].Position.x,
    y: IsPhone ? 0 : AllFolders[index!].Position.y
  });

  const maxWidth = useRef(window.innerWidth);
  const maxHeight = useRef(window.innerHeight);
  const [store, setStore] = useState({ width, height, position });

  useEffect(() => {
    const handleResize = () => {
      maxWidth.current = window.innerWidth;
      maxHeight.current = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMax = () => {
    if (!Max[index!]) {
      setStore({ width, height, position });
      setWidth(maxWidth.current);
      setHeight(maxHeight.current - 28); // Accounting for header/footer height
      setPosition({ x: 0, y: 0 });
      makeTrue(index!, 'max');
    } else if (!IsPhone) {
      makeFalse(index!, 'max');
      setWidth(store.width);
      setHeight(store.height);
      setPosition(store.position);
    }
  };

  const FolderComponent = AllFolders[index!]?.Component;

  return (
    <div onClick={() => { makeTrue(index!, 'open') }}>
      <Rnd
        size={{ width, height }}
        position={position}
        dragHandleClassName={"handle"}
        minWidth={IsPhone ? maxWidth.current : 270}
        minHeight={IsPhone ? maxHeight.current : 100}
        maxWidth={maxWidth.current}
        maxHeight={maxHeight.current}
        bounds="body"
        enableResizing={!Max[index!]}
        resizeHandleClasses={{
          top: Max[index!] ? 'hidden' : '',
          right: Max[index!] ? 'hidden' : '',
          bottom: Max[index!] ? 'hidden' : '',
          left: Max[index!] ? 'hidden' : '',
          topRight: Max[index!] ? 'hidden' : '',
          bottomRight: Max[index!] ? 'hidden' : '',
          bottomLeft: Max[index!] ? 'hidden' : '',
          topLeft: Max[index!] ? 'hidden' : ''
        }}
        onDragStop={Max[index!] ? () => { } : (e, d) => setPosition({ x: d.x, y: d.y })}
        onResizeStop={Max[index!] ? () => { } : (e, direction, ref, delta, position) => {
          setWidth(parseInt(ref.style.width));
          setHeight(parseInt(ref.style.height));
          setPosition(position);
        }}
        className={`border-2 border-[#225AD8] rounded-t-sm resizeable-box overflow-hidden select-none bg-white ${Min[index!] ? 'hidden' : ''}`}
        style={{ zIndex: IsFront === index ? 10 : 1 }}
      >
        <TopControls
          index={index}
          Title={Title}
          Max={Max}
          Min={Min}
          Open={Open}
          makeFalse={makeFalse}
          icon={AllFolders[index!]?.IconClose}
          makeTrue={makeTrue}
          handleMax={handleMax}
        />


        {/* Content */}
        <div className="px-2 bg-[#F0F0E7]">
          <NavBar
            index={index}
            Title={Title}
            Max={Max}
            Min={Min}
            Open={Open}
            makeFalse={makeFalse}
            icon={AllFolders[index!]?.IconClose}
            makeTrue={makeTrue}
            width={width}
          />
        </div>
        <div className="flex h-full justify-center w-full cursor-auto">
          {!IsPhone && (width >= 400) && (
            <div
              className="overflow-y-auto min-w-[200px] flex-col bg-[#687FF5] border-2 border-white flex justify-start"
              style={{ height: `calc(100% - 133px)` }}
            >
              <MyContent />
            </div>
          )}
          <div
            className="bg-white border-2 border-slate-500 overflow-y-auto"
            style={{ height: `calc(100% - 135px)`, width: `100%`, pointerEvents: 'auto' }}
          >
            {FolderComponent ? <FolderComponent Open={Open}
              Max={Max}
              Min={Min}
              makeTrue={makeTrue}
              makeFalse={makeFalse}
              IsPhone={IsPhone}
              width={width} /> : <div>No component found</div>}
          </div>
        </div>
      </Rnd>
    </div>
  );

};

export default SimpleTab;

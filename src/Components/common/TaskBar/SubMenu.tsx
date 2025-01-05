// SubMenu.tsx
import React from 'react';
import MenuItem from './MenuItem';
import { StaticImageData } from 'next/image';

interface SubMenuProps {
  items: {
    title: string;
    icon?: StaticImageData;
    list?: SubMenuProps['items'];
  }[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <div className='absolute left-full bottom-[10%] w-fit z-20 bg-white border-l-blue-500 border-l-[4px] shadow-lg'>
      {items.map((item, idx) => (
        <MenuItem 
          key={idx} 
          title={item.title} 
          icon={item.icon} 
          list={item.list} 
        />
      ))}
    </div>
  );
};

export default SubMenu;

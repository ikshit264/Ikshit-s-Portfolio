// MenuItem.tsx
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Divider from './Divider';
import SubMenu from './SubMenu';

interface MenuItemProps {
  title: string;
  icon?: StaticImageData;
  description?: string;
  list?: MenuItemProps[];
  onHover?: () => void;
  onClick?: () => void;
  isHovered?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, icon, description, list, onHover, onClick, isHovered }) => {
  return (
    <div 
      className='relative cursor-pointer p-0.5' 
      onMouseEnter={onHover} 
      onClick={onClick}
    >
      {title !== 'none' ? (
        <div className='flex items-center p-1 gap-1 hover:bg-[#2F71CD] hover:text-white'>
          {icon && <Image src={icon} alt={title} width={27} />}
          <div className='flex flex-col'>
            <div className='text-sm'>{title}</div>
            {description && <div className='text-[#888787] text-xs'>{description}</div>}
          </div>
        </div>
      ) : (
        <Divider />
      )}
      {isHovered && list && (
        <SubMenu items={list} />
      )}
    </div>
  );
};

export default MenuItem;

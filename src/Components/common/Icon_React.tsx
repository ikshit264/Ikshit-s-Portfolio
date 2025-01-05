import React, { useState, useEffect } from 'react';
import * as SiIcons from 'react-icons/si';

interface Icon_ReactProps {
  iconName: string;
  size?: number;
  color?: string;
}

const Icon_React: React.FC<Icon_ReactProps> = ({ iconName, size = 34, color = '#000000' }) => {
  const [IconComponent, setIconComponent] = useState<React.ElementType | null>(null);

  useEffect(() => {
    if (iconName) {
      const icon = (SiIcons as any)[iconName];
      setIconComponent(() => icon);
    }
  }, [iconName]);

  if (!IconComponent) {
    return <p>NA</p>;
  }

  return <IconComponent size={size} color={color} />;
};

export default Icon_React;

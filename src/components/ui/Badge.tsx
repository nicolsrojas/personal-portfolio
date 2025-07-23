import React from 'react';
import Icon, { IconName } from '../ui/Icon';

interface BadgeProps {
  icon: IconName;
  children: React.ReactNode;
}

export default function Badge({icon, children }: BadgeProps) {
  return (
    <div className='badge align-center column-mobile'>
       <Icon name={icon}/>
        {children}
    </div>
  );
}
import React from 'react';

interface TagProps {
    children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
    return (
        <li className='tag'>
            {children}
        </li>
    );
}
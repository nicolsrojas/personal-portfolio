import React from 'react';

interface TagListProps {
    children: React.ReactNode;
}

export default function TagList({ children }: TagListProps) {
    return (
        <ul className='tag-list'>
            {children}
        </ul>
    );
}
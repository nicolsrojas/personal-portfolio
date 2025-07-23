import React from 'react';
import Button from '../ui/Button';

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    button?: {
        label: string;
        href: string;
    }
}
const HeroSection = ({
    title,
    subtitle,
    button
}: HeroSectionProps) => {
    return (
        <section className='hero fullheight flex-column'>
            <div className="hero__container container flex-center flex-column">
                <h1 className="hero__title text-center">{title}</h1>
                <p className="hero__subtitle text-center">{subtitle}</p>
                {button && (
                    <Button className="hero__button" variant='secondary' href={button.href}>
                        {button.label}
                    </Button>
                )}
            </div>
        </section>
    );
}

export default HeroSection;


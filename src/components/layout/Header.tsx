"use client";

import Link from 'next/link';
import { useState } from 'react';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

export default function Header() {

  const [showCopied, setShowCopied] = useState(false);
  // const [currentLang, setCurrentLang] = useState('EN');
  // const [theme, setTheme] = useState('dark');


  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nicolsrojas.dev@gmail.com')
      .then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy email: ', err));
  };

  // const handleLanguageToggle = () => {
  //   setCurrentLang(currentLang === 'EN' ? 'ES' : 'EN');
  // }

  // const handleThemeToggle = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute('data-theme', newTheme);
  // };

  return (
    <header className='header'>
      <div className="header__container">
        <div className='header__left align-center'>
          <Link href="/"> 
            <span className='header__logo-mobile hide-desktop flex-center'>
              <Icon name='star'/>
              Nicols Rojas
            </span>
            <span className='header__logo-desktop hide-mobile flex-center'>
              nicolsrojas.dev@gmail.com
            </span> 
          </Link>
          <Button className='hide-mobile' onClick={handleCopyEmail}>
            <Icon name='copy' />
          </Button>
          {showCopied && <span>Copied!</span>}
        </div>
        <nav className='header__middle hide-mobile'>
          <div className="header__middle_content flex-center">
            <Button href="#techstack" variant='link'>Tech Stack</Button>
            <Button href="#projects" variant='link'>Projects</Button>
            <Button href="#contact" variant='link'>Contact</Button>
          </div>
        </nav>
        <div className='header__right flex-center'>
          <Button size='small' variant='secondary' href="documents/resume.pdf" download="Resume Nicols Rojas.pdf"  className="header__button--resume">
            Resume
            <Icon name='download'/>
          </Button>
          {/* <Button onClick={handleThemeToggle}>
            <Icon name='moon'/>
          </Button> */}
          {/* <Button onClick={handleLanguageToggle}>
            <Icon name='globe'/>
          </Button> */}
        </div>
      </div>
    </header>
  );
}
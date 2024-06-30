import React from 'react';
import { ConfettiButton } from './sub-components/confetti';

const Footer = () => {
  return (
    <a href='/JustinResume.pdf' download={"Justin-Santos-Resume"} className='dark:text-white'>
      <ConfettiButton>CV</ConfettiButton>
    </a>
  );
};

export default Footer;

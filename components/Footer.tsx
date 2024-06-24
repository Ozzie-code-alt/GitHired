import React from 'react';
import { ConfettiButton } from './sub-components/confetti';

const Footer = () => {
  return (
    <a href='/JustinResume.pdf' download={"Justin-Santos-Resume"}>
      <ConfettiButton>PDF</ConfettiButton>
    </a>
  );
};

export default Footer;

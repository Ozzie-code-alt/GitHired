import { FOOTER_CONSTANTS } from '@/constants/constants';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='flex gap-5 '>
        {FOOTER_CONSTANTS.map((value, index) => (
          <div
            key={index}
            className='w-fit px-2 border gap-2 rounded-full '
          >
            <label htmlFor={value.title}>{value.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

import { FOOTER_CONSTANTS } from '@/constants/constants';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='flex gap-5 '>
        {FOOTER_CONSTANTS.map((value, index) => (
          <div
            key={index}
            className='w-fit px-3 border cursor-pointer  border-[#00d0ff] bg-[#00D0FF1A] font-checkboxes gap-2 rounded-md '
          >
            <label className='text-gray-500 text-[15px] cursor-pointer dark:text-white' htmlFor={value.title}>{value.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

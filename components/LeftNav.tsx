import { LEFTNAV_CONSTANTS } from '@/constants/constants';
import React from 'react';

const LeftNav = () => {
  return (
    <div className='hidden lg:flex'>
      <div className='flex flex-row gap-5'>
        {LEFTNAV_CONSTANTS.map((item, index) => (
          <div
            key={index}
            className={`border rounded-[4px] ${item.textColor} ${item.borderColor} flex  ${item.px} ${item.py} ${item.bgColor} justify-center items-center`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;

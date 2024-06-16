import { LEFTNAV_CONSTANTS } from '@/constants/constants';
import React from 'react';

const LeftNav = () => {
  return (
    <div className='hidden lg:flex'>
      <div className='flex flex-row gap-5'>
        {LEFTNAV_CONSTANTS.map((item, index) => (
          <div
            key={index}
            className={`border rounded-[4px] flex  px-2 text-[20px] font-checkboxes  justify-center items-center
               ${item.value == '1' ? ' hover:scale-150 transition duration-700 ease-in-out  hover:cursor-pointer bg-[rgba(255,0,247,.3)]  border-[rgba(255,0,246,.8)]  text-[#680045] ' :
                item.value == '2' ? ' hover:scale-150 transition duration-700 ease-in-out hover:cursor-pointer  bg-[rgba(0,208,255,.1)] border-[#00eaff] text-[#005f68]' : 
                ' hover:scale-150 transition duration-700 ease-in-out hover:cursor-pointer  bg-[rgba(0,255,17,.1)] border-[#0f1] text-[#005205]'} `}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;

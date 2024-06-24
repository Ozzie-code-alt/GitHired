import { LEFTNAV_CONSTANTS } from '@/constants/constants';
import React from 'react';

const LeftNav = () => {
  return (
    <div className='hidden lg:flex justify-between'>
      <div className='flex flex-row gap-5'>
        {LEFTNAV_CONSTANTS.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl  z-50 border-2 border-dashed hover:scale-105  duration-700 ease-in-out   px-6 flex justify-center hover:cursor-pointer items-center uppercase text-black transition-all  hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
               ${
                 item.value == '1'
                   ? '     bg-[rgba(255,0,247,.3)]  border-[rgba(255,0,246,.8)]  text-[#680045] '
                   : item.value == '2'
                     ? '   bg-[rgba(0,208,255,.1)] border-[#00eaff] text-[#005f68]'
                     : '  bg-[rgba(0,255,17,.1)] border-[#0f1] text-[#005205]'
               } `}
          >
            <p className='dark:text-white'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;

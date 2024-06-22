import { LEFTNAV_CONSTANTS } from '@/constants/constants';
import React, { useEffect, useState } from 'react';
import { PiSunLight } from 'react-icons/pi';
import { MdOutlineDarkMode } from 'react-icons/md';
const LeftNav = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    localStorage.setItem('Mode', mode);
    console.log('local set', mode);
  }, [mode]);

  const onClick = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('Mode', newMode);
      window.dispatchEvent(new Event('storage')); // Manually dispatch the storage event
      return newMode;
    });
  };
  return (
    <div className='hidden lg:flex justify-between'>
      <div className='flex flex-row gap-5'>
        {LEFTNAV_CONSTANTS.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl border-2 border-dashed  px-6 flex justify-center items-center uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
               ${
                 item.value == '1'
                   ? ' hover:scale-105 transition duration-700 ease-in-out  hover:cursor-pointer bg-[rgba(255,0,247,.3)]  border-[rgba(255,0,246,.8)]  text-[#680045] '
                   : item.value == '2'
                     ? ' hover:scale-105 transition duration-700 ease-in-out hover:cursor-pointer  bg-[rgba(0,208,255,.1)] border-[#00eaff] text-[#005f68]'
                     : ' hover:scale-105 transition duration-700 ease-in-out hover:cursor-pointer  bg-[rgba(0,255,17,.1)] border-[#0f1] text-[#005205]'
               } `}
          >
            <p className='dark:text-white'>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center w-full'>
        <button onClick={onClick} className='text-[20px]'>
          {mode === 'light' ? (
            <PiSunLight className='bg-[rgba(255,0,247,.3)] rounded-md p-1 transition-all text-[40px] duration-300 ease-in-out ' />
          ) : (
            <MdOutlineDarkMode className='bg-[rgba(255,0,247,.3)] rounded-md p-1 transition-all text-[40px] duration-300 ease-in-out' />
          )}
        </button>
      </div>
    </div>
  );
};

export default LeftNav;

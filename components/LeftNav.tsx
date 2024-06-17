import { LEFTNAV_CONSTANTS } from '@/constants/constants';
import React, { useEffect, useState } from 'react';

const LeftNav = () => {
  const [mode, setMode] = useState('light');


  useEffect(() => {
    const storedTheme = localStorage.getItem('Mode');
    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Mode', mode);
  }, [mode]);

  const onClick = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
    console.log(mode);
  };
  return (
    <div className='hidden lg:flex justify-between  '>
      <div className='flex flex-row gap-5'>
        {LEFTNAV_CONSTANTS.map((item, index) => (
          <div
            key={index}
            className={`border rounded-[4px] flex  px-2 text-[20px] font-checkboxes  justify-center items-center
               ${
                 item.value == '1'
                   ? ' hover:scale-150 transition duration-700 ease-in-out  hover:cursor-pointer bg-[rgba(255,0,247,.3)]  border-[rgba(255,0,246,.8)]  text-[#680045] '
                   : item.value == '2'
                     ? ' hover:scale-150 transition duration-700 ease-in-out hover:cursor-pointer  bg-[rgba(0,208,255,.1)] border-[#00eaff] text-[#005f68]'
                     : ' hover:scale-150 transition duration-700 ease-in-out hover:cursor-pointer  bg-[rgba(0,255,17,.1)] border-[#0f1] text-[#005205]'
               } `}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div>
        <button onClick={onClick}>Dark</button>
      </div>
    </div>
  );
};

export default LeftNav;

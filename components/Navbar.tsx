import React from 'react';
import { CgMenuMotion } from 'react-icons/cg';

function Navbar() {
  return (
    <div className=' py-10  gap-8 w-full flex flex-col  lg:hidden px-10 '>
      <div className='flex w-full justify-between  '>
        <div className='dark:text-white'>JSantos.com</div>
        <div>
          <CgMenuMotion className=' dark:text-white text-[30px]' />
        </div>
      </div>
      <div className='border  ' />
    </div>
  );
}

export default Navbar;

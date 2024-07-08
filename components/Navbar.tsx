import React, { useState } from 'react';
import { CgMenuMotion } from 'react-icons/cg';
import SpringModal from './Modal';

function Navbar() {
  const [click, setOnClick] = useState(false);
  return (
    <div className=' py-10  gap-8 w-full flex flex-col  lg:hidden px-10 '>
      <div className='flex w-full justify-between  '>
        <div className='dark:text-white cursor-pointer'>JSantos.com</div>
        <div>
          <CgMenuMotion className=' dark:text-white text-[30px] cursor-pointer' onClick={()=>{setOnClick(true)}} />
        </div>
        <SpringModal isOpen={click} setIsOpen={setOnClick} />
      </div>
      <div className='border  ' />
    </div>
  );
}

export default Navbar;

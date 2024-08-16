'use client';
import React, { useEffect, useState } from 'react';
import LeftNav from './LeftNav';
import Checkboxes from './Checkboxes';
import Footer from './Footer';
import { MdOutlineDarkMode, MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { DockDemo } from './DockerApps';
import dynamic from 'next/dynamic';
import { PiSunLight } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { slideInFromBottom } from '@/lib/utils';
const Content = () => {
  const [first, setfirst] = useState<string[]>([]);
  const [mode, setMode] = useState('light');
  const RightPage = dynamic(() => import('../components/RightPage'), { ssr: false });
  const handleData = (data: string[]) => {
    console.log('this is from parent', data);
    setfirst(data);
  };
  const onClick = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('Mode', newMode);
      window.dispatchEvent(new Event('storage'));
      return newMode;
    });
  };
  useEffect(() => {
    localStorage.setItem('Mode', mode);
    console.log('local set', mode);
  }, [mode]);

  return (
    <div className='w-full  relative h-auto  lg:h-screen px-3 gap-5  sm:px-10 py-10 flex flex-col  lg:flex-row'>
      {/*Left */}
      <div className='w-full relative  lg:w-[40%] h-full opacity-1'>
        <motion.div
          className='pb-10'
          initial='hidden'
          animate={'visible'}
          variants={slideInFromBottom(0.3)}
        >
          <LeftNav />
        </motion.div>
        <motion.div
          className='pb-5'
          initial='hidden'
          animate={'visible'}
          variants={slideInFromBottom(0.5)}
        >
          <p className='font-bold  font-name text-[1.5rem] dark:text-white '>Justin Santos</p>
          <p className='font-medium font-name text-[1.2rem] dark:text-white '>Software Engineer</p>
        </motion.div>

        <motion.p
          className='pb-5 dark:text-white'
          initial='hidden'
          animate={'visible'}
          variants={slideInFromBottom(0.7)}
        >
          Hello! I&apos;m a Fullstack Web Developer passionate about building seamless and scalable
          web applications that deliver outstanding user experiences. Proficient in both web and
          mobile development using React Native and Expo
        </motion.p>

        <motion.div
          className='border-2 border-dashed border-slate-500 mb-5'
          initial='hidden'
          animate={'visible'}
          variants={slideInFromBottom(0.7)}
        />

        <div className='hidden lg:flex flex-col gap-5 justify-between w-full h-[60%] 2xl:h-[70%] pb-20  '>
          <motion.div
            className=''
            initial='hidden'
            animate={'visible'}
            variants={slideInFromBottom(0.9)}
          >
            <Checkboxes upData={handleData} />
          </motion.div>

          <div className=' flex  gap-5  w-fit  justify-center items-center '>
            <Footer />
          </div>
        </div>
      </div>
      {/*Right */}
      <div className='w-full flex flex-col gap-5 px-3 sm:px-10  '>
        <RightPage first={first} />
      </div>
      <div className='absolute group w-full  hidden  lg:flex flex-col justify-center items-center bottom-32'>
        <div className='opacity-0  group-hover:opacity-100 duration-500 flex justify-center transition ease-in-out'>
          <DockDemo />
        </div>
        <div className='group-hover:opacity-0 text-[40px] absolute top-20'>
          <MdOutlineKeyboardDoubleArrowDown />
        </div>
      </div>

      <div className='absolute flex  w-[95%]  justify-end top-0 pt-5'>
        <button onClick={onClick} className='text-[20px]  w-fit flex lg:justify-end pr-10 xl:pr-5'>
          {mode === 'light' ? (
            <PiSunLight className='rounded-md p-1 transition-all text-[40px] duration-300 ease-in-out ' />
          ) : (
            <MdOutlineDarkMode className=' text-white rounded-md p-1 transition-all text-[40px] duration-300 ease-in-out' />
          )}
        </button>
      </div>
    </div>
  );
};

export default Content;

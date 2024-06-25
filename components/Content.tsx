'use client';
import React, { useEffect, useState } from 'react';
import LeftNav from './LeftNav';
import Checkboxes from './Checkboxes';
import Footer from './Footer';
import { PROJECTS_CONSTANTS } from '@/constants/constants';
import Image from 'next/image';
import { MdOutlineDarkMode, MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { DockDemo } from './DockerApps';
import { DragCloseDrawerExample } from './DragCloseDrawer';
import { PiSunLight } from 'react-icons/pi';

const Content = () => {
  const [first, setfirst] = useState<string[]>([]);
  const [mode, setMode] = useState('light');
  const handleData = (data: string[]) => {
    console.log('this is from parent', data);
    setfirst(data);
  };

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
    <div className='w-full  relative lg:h-screen px-3 gap-5  sm:px-10 py-10 flex flex-col  lg:flex-row'>
      {/*Left */}
      <div className='w-full lg:w-[40%] h-full opacity-1'>
        <div className='pb-10'>
          <LeftNav />
        </div>
        <div className='pb-5'>
          <p className='font-bold  font-name text-[1.5rem] dark:text-white '>Justin Santos</p>
          <p className='font-medium font-name text-[1.2rem] dark:text-white'>Software Engineer</p>
        </div>

        <p className='pb-5 dark:text-white'>
          Hello! I&apos;m a Fullstack Web Developer passionate about building seamless and scalable
          web applications that deliver outstanding user experiences. Proficient in both web and
          mobile development using React Native and Expo
        </p>

        <div className='border-2 border-dashed border-slate-500 mb-5' />

        <div className='hidden lg:flex flex-col gap-5 justify-between w-full h-[60.4%] '>
          <div className=''>
            <Checkboxes upData={handleData} />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
      {/*Right */}
      <div className='w-full flex flex-col gap-5 sm:px-10 lg:overflow-y-auto '>
        {first.length > 0 ? (
          <div className='px-10'>
            <div className='flex h-fit w-full transition duration-1000 ease-in-out justify-end pb-5 gap-5 '>
              {first.map((item, index) => (
                <div key={index} className='bg-[#FFDDD2] px-2 rounded-md'>
                  {item}
                </div>
              ))}
            </div>

            <div className=' flex flex-col gap-5 h-auto'>
              {PROJECTS_CONSTANTS.filter((item) =>
                item.tags.some((tag) => first.includes(tag))
              ).map((item, index) => (
                <div key={index} className='border-2  relative rounded-lg h-auto'>
                  <Image
                    src={item.img}
                    alt='justin'
                    width={1080}
                    height={720}
                    className='object-cover'
                  />
                  <div
                    className={`flex gap-5 px-2 rounded-lg  left-5 bottom-20 absolute ${item.value === '1' ? 'bg-[#D3D2FF]' : item.value === '2' ? 'bg-[#FFDDD2]' : item.value === '3' ? 'bg-[#D2FFF2]' : 'bg-[#D2F7FF]'}`}
                  >
                    {item.tags.join(', ')}
                  </div>
                  <div className='flex justify-between px-5 py-5 w-full '>
                    <div className='dark:text-white'>{item.title}</div>
                    <div className='dark:text-white'>
                      <a href={item.route} target='_blank'>
                        <button>View Project</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='transition-all pb-40  lG:border-l border-slate-500 mb-5 flex flex-col gap-20  duration-500 px-14   ease-in-out'>
            {PROJECTS_CONSTANTS.map((item, index) => (
              <div
                key={index}
                className={`border relative  flex flex-col  justify-center items-center  rounded-lg h-auto`}
                id={item.transition}
              >
                <Image
                  src={item.img}
                  alt='justin'
                  width={1080}
                  height={720}
                  className='object-cover shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out rounded-t-lg'
                />
                <div
                  className={`flex gap-5 px-2 rounded-lg  left-5 bottom-20 absolute ${item.value === '1' ? 'bg-[#D3D2FF]' : item.value === '2' ? 'bg-[#FFDDD2]' : item.value === '3' ? 'bg-[#D2FFF2]' : 'bg-[#D2F7FF]'}`}
                >
                  {item.tags.join(', ')} {/* Join the tags array to display it as a string */}
                </div>
                <div className='flex justify-between border-l-2 border-b-2 border-r-2 border-gray-500  rounded-b-lg  px-5 py-5 w-full '>
                  <div className='dark:text-white'>{item.title}</div>
                  <div className='dark:text-white'>
                    <a href={item.route} target='_blank'>
                      <button>View Project</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <DragCloseDrawerExample />
          </div>
        )}
      </div>

      <div className='h-screen hidden'>
        <p>More Text Here</p>
      </div>

      <div className='absolute group  w-full  flex flex-col justify-center items-center bottom-32'>
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

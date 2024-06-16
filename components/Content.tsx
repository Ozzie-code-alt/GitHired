'use client';
import React, { useState } from 'react';
import LeftNav from './LeftNav';
import Checkboxes from './Checkboxes';
import Footer from './Footer';
import { PROJECTS_CONSTANTS } from '@/constants/constants';
import Image from 'next/image';

const Content = () => {
  const [first, setfirst] = useState<string[]>([]);

  const handleData = (data: string[]) => {
    console.log('this is from parent', data);
    setfirst(data);
  };
  return (
    <div className='w-full h-screen px-10 py-10 flex flex-col lg:flex-row'>
      {/*Left */}
      <div className='w-[40%]] h-full border  border-red-500  '>
        <div className='pb-10'>
          <LeftNav />
        </div>
        <div className='pb-5'>
          <p className='font-bold  font-name text-[1.5rem] '>Justin Santos</p>
          <p className='font-medium font-name text-[1.2rem]'>Software Engineer</p>
        </div>

        <p className='pb-5'>
          I&apos;m Justin, a uniquely creative designer and developer with over 15 years of
          experience. I primarily focus on Ideas, Products and Brands.
        </p>

        <div className='border-2 border-dashed border-slate-500 mb-5' />

        <div className='hidden lg:flex flex-col  justify-between w-full h-[67.4%] border border-blue-500'>
          <div className=''>
            <Checkboxes upData={handleData} />
          </div>

          <div className='justify-end '>
            <Footer />
          </div>
        </div>
      </div>
      {/*Right */}
      <div className='w-full border flex flex-col gap-5 px-10 lg:overflow-y-scroll overflow-x-hidden border-red-500'>
        <div className='flex h-fit w-full transition duration-1000 ease-in-out justify-end gap-5 '>
          {first.map((item, index) => (
            <div key={index} className='border transition  duration-1000 ease-in-out'>
              {item}
            </div>
          ))}
        </div>

        <div className='border   border-blue-500 flex flex-col gap-5 h-auto'>
          {PROJECTS_CONSTANTS.map((item, index) => (
            <div className='border relative rounded-lg h-auto'>
              <Image
                src={item.img}
                alt='justin'
                width={1080}
                height={720}
                className='object-cover  '
              />
              <div className='flex gap-5 border border-red-500 bottom-10 absolute '>
                {item.tags.map((tag, index) => (
                  <div className='flex'>{tag}</div>
                ))}
              </div>
              <div className='flex justify-between px-5 w-full border border-green-500'>
                <div className=''>{item.title}</div>
                <div className=''>
                  <button>View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;

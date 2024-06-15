'use client';
import React, { useState } from 'react';
import LeftNav from './LeftNav';
import Checkboxes from './Checkboxes';
import Footer from './Footer';

const Content = () => {
  const [first, setfirst] = useState<string[]>([]);

  const handleData = (data: string[]) => {
    console.log('this is from parent', data);
    setfirst(data);
  };
  return (
    <div className='w-full h-screen px-10 py-10 flex flex-col lg:flex-row'>
      {/*Left */}
      <div className='w-full h-full border  border-red-500  '>
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

        <div className='flex flex-col  justify-between w-full h-[67.4%] border border-blue-500'>
          <div>
            <Checkboxes upData={handleData} />
          </div>

          <div className='justify-end '>
            <Footer />
          </div>
        </div>
      </div>
      {/*Right */}
      <div className='w-full border flex gap-5 border-red-500'>
        <div className='flex h-fit w-full justify-end gap-5 '>
          {first.map((item, index) => (
            <div className='border'>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;

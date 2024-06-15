import React from 'react';
import LeftNav from './LeftNav';

const Content = () => {
  return (
    <div className='w-full px-10 py-10 flex flex-col lg:flex-row'>
      {/*Left */}
      <div className='w-full  '>
        <div className='pb-10'>
          <LeftNav />
        </div>
        <div className='pb-5'>
          <p className='font-bold  font-name text-[1.5rem] '>Justin Santos</p>
          <p className='font-medium font-name text-[1.2rem]'>Software Engineer</p>
        </div>

        <p className='pb-5'>
          I'm Justin, a uniquely creative designer and developer with over 15 years of experience. I
          primarily focus on Ideas, Products and Brands.
        </p>

        <div className='border-2 border-dotted border-slate-500 '/>
      </div>
      {/*Right */}
      <div className='w-full border border-red-500'></div>
    </div>
  );
};

export default Content;

'use client';
import React, { useState } from 'react';
import LeftNav from './LeftNav';
import Checkboxes from './Checkboxes';
import Footer from './Footer';
import { PROJECTS_CONSTANTS } from '@/constants/constants';
import Image from 'next/image';

import { DockDemo } from './DockerApps';
import { IconCloudDemo } from './Icon-Cloud';

const Content = () => {
  const [first, setfirst] = useState<string[]>([]);

  const handleData = (data: string[]) => {
    console.log('this is from parent', data);
    setfirst(data);
  };
  return (
    <div className='w-full relative h-screen px-3 gap-5  sm:px-10 py-10 flex flex-col lg:flex-row'>
      {/*Left */}
      <div className='w-[40%]] h-full  '>
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

        <div className='hidden lg:flex flex-col gap-5 justify-between w-full h-[67.4%] '>
          <div className=''>
            <Checkboxes upData={handleData} />
          </div>

          <div className=' flex justify-center'>
            <IconCloudDemo />
          </div>

          <div className='justify-end '>
            <Footer />
          </div>
        </div>
      </div>
      {/*Right */}
      <div className='w-full flex flex-col gap-5 sm:px-10 lg:overflow-y-auto '>
        {first.length > 0 ? (
          <div className='px-10'>
            <div className='flex h-fit w-full transition duration-1000 ease-in-out justify-end gap-5 '>
              {first.map((item, index) => (
                <div key={index} className='border transition  duration-1000 ease-in-out'>
                  {item}
                </div>
              ))}
            </div>

            <div className='border   border-blue-500 flex flex-col gap-5 h-auto'>
              {PROJECTS_CONSTANTS.filter((item) =>
                item.tags.some((tag) => first.includes(tag))
              ).map((item, index) => (
                <div key={index} className='border relative rounded-lg h-auto'>
                  <Image
                    src={item.img}
                    alt='justin'
                    width={1080}
                    height={720}
                    className='object-cover'
                  />
                  <div className='flex gap-5 border border-red-500 left-5 bottom-10 absolute'>
                    {item.tags.join(', ')}
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
        ) : (
          <div className='transition-all pb-40  flex flex-col gap-20  duration-500 px-10   ease-in-out'>
            {PROJECTS_CONSTANTS.map((item, index) => (
              <div
                key={index}
                className={`border relative  rounded-lg h-auto`}
                id={item.transition}
              >
                <Image
                  src={item.img}
                  alt='justin'
                  width={1080}
                  height={720}
                  className='object-cover'
                />
                <div className='flex gap-5  left-5 bottom-10 absolute'>
                  {item.tags.join(', ')} {/* Join the tags array to display it as a string */}
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
        )}
      </div>
      <div className='absolute group  w-full  flex flex-col justify-center items-center bottom-32'>
        <div className='opacity-0 border border-red-500 group-hover:opacity-100 duration-500 flex justify-center transition ease-in-out'>
          <DockDemo />
        </div>
        <div className='group-hover:opacity-0  absolute top-24'>
          <p>Hover for Links</p>
        </div>
      </div>
    </div>
  );
};

export default Content;

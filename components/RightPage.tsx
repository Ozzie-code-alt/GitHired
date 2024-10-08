/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { PROJECTS_CONSTANTS } from '@/constants/constants';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { slideInFromBottom } from '@/lib/utils';
import { Divz } from 'divz';
interface RightPageProps {
  first: string[];
}

const RightPage = ({ first }: RightPageProps) => {
  const refs = useRef<((node?: Element | null) => void)[]>([]);
  const inViews = useRef<boolean[]>([]);

  useEffect(() => {
    refs.current = new Array(PROJECTS_CONSTANTS.length).fill(() => {});
    inViews.current = inViews.current.slice(0, PROJECTS_CONSTANTS.length).fill(false);
  }, []);

 
  return (
    <div className='h-screen '>
      {first.length > 0 ? (
        <div className='sm:px-14 pb-40 overflow-y-auto  h-screen '>
          <div className='flex w-full transition duration-1000 ease-in-out justify-end  gap-10'>
            {first.map((item, index) => (
              <div key={index} className='bg-[#FFDDD2] px-2 rounded-md'>
                {item}
              </div>
            ))}
          </div>

          <div className='flex flex-col pt-5 gap-10'>
            {PROJECTS_CONSTANTS.filter((item) => item.tags.some((tag) => first.includes(tag))).map(
              (item, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.5
                });
                refs.current[index] = ref;
                inViews.current[index] = inView;

                return (
                  <motion.div
                    ref={refs.current[index]}
                    initial='hidden'
                    animate={inViews.current[index] ? 'visible' : 'hidden'}
                    variants={slideInFromBottom(0.5)}
                    key={index}
                    className='border hover:border-none relative group flex flex-col justify-center items-center rounded-lg h-auto'
                  >
                      <Image
                        src={item.img}
                        alt='justin'
                        width={1080}
                        height={1020}
                        className='object-contain bg-contain bg-center object-center shadow-2xl   group-hover:scale-105 transition-all duration-500 ease-in-out rounded-t-lg'
                      />
                   
                    <div
                      className={`flex gap-5 px-2 rounded-lg group-hover:opacity-0 duration-500 ease-out transition-all left-5 bottom-20 absolute ${item.value === '1' ? 'bg-[#D3D2FF]' : item.value === '2' ? 'bg-[#FFDDD2]' : item.value === '3' ? 'bg-[#D2FFF2]' : 'bg-[#D2F7FF]'}`}
                    >
                      {item.tags.join(', ')}
                    </div>
                    <div className='flex justify-between border-l-2 group-hover:bg-black group-hover:text-white  duration-500 ease-out transition-all border-b-2 border-r-2 border-gray-500 rounded-b-lg px-5 py-5 w-full'>
                      <div className='dark:text-white'>{item.title}</div>
                      <div className='dark:text-white'>
                        <a href={item.route} target='_blank'>
                          <button>View Project</button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      ) : (
        <div className='relative w-full lg:h-[100%]'>
          <small className='text-gray-500'>Made by justin With Blood Sweat and Tears - 2023</small>
          <Divz
            className='transition-all lg:border-l hidden  lg:flex border-dotted bg-none  border-gray-500 mb-5  duration-500   '
            autoPlay={true}
            autoPlayDuration={7000}
            // isDarkMode={true}
            showNavButtonsOnExpanded={false}
            showPlayButton={false}
            showExpandButton={false}
          >
            {PROJECTS_CONSTANTS.map((item, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.5
              });
              refs.current[index] = ref;
              inViews.current[index] = inView;

              return (
                <div
                  key={index}
                  className=' absolute !h-fit  !w-[80%]  group flex flex-col   rounded-lg'
                >
                  <a href={`/projects/${index}`} target='#blank'>
                    <Image
                      src={item.img}
                      alt='justin'
                      width={1080}
                      height={1020}
                      className='object-contain bg-contain bg-center object-center shadow-2xl cursor-pointer  group-hover:scale-105 transition-all duration-500 ease-in-out rounded-t-lg'
                    />
                  </a>
                  <div
                    className={`flex gap-5 px-2 rounded-lg group-hover:opacity-0 duration-500 ease-out transition-all left-5 bottom-20 absolute ${
                      item.value === '1'
                        ? 'bg-[#D3D2FF]'
                        : item.value === '2'
                          ? 'bg-[#FFDDD2]'
                          : item.value === '3'
                            ? 'bg-[#D2FFF2]'
                            : 'bg-[#D2F7FF]'
                    }`}
                  >
                    {item.tags.join(', ')}
                  </div>
                </div>
              );
            })}
          </Divz>
          <div className='transition-all flex lg:hidden pb-40 lg:border-l border-slate-500 mb-5  flex-col gap-20 duration-500  sm:px-14 ease-in-out'>
            {PROJECTS_CONSTANTS.map((item, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.5
              });
              refs.current[index] = ref;
              inViews.current[index] = inView;

              return (
                <motion.div
                  ref={refs.current[index]}
                  initial='hidden'
                  animate={inViews.current[index] ? 'visible' : 'hidden'}
                  variants={slideInFromBottom(0.5)}
                  key={index}
                  className='border hover:border-none relative group flex flex-col justify-center items-center rounded-lg h-auto'
                  id={item.transition}
                >
                  <a href={`/projects/${index}`} target='#blank'>
                    <Image
                      src={item.img}
                      alt='justin'
                      width={1080}
                      height={1020}
                      className='object-contain bg-contain bg-center object-center shadow-2xl cursor-pointer  group-hover:scale-105 transition-all duration-500 ease-in-out rounded-t-lg'
                    />
                  </a>
                  <div
                    className={`flex gap-5 px-2 rounded-lg group-hover:opacity-0 duration-500 ease-out transition-all left-5 bottom-20 absolute ${
                      item.value === '1'
                        ? 'bg-[#D3D2FF]'
                        : item.value === '2'
                          ? 'bg-[#FFDDD2]'
                          : item.value === '3'
                            ? 'bg-[#D2FFF2]'
                            : 'bg-[#D2F7FF]'
                    }`}
                  >
                    {item.tags.join(', ')}
                  </div>
                  <div className='flex justify-between border-l-2 group-hover:bg-black group-hover:text-white  duration-500 ease-out transition-all border-b-2 border-r-2 border-gray-500 rounded-b-lg px-5 py-5 w-full'>
                    <div className='dark:text-white'>{item.title}</div>
                    <div className='dark:text-white'>
                      <a href={item.route} target='_blank'>
                        <button>View Project</button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightPage;

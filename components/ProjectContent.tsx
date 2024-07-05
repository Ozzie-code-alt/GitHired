'use client';
import React, { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import GradualSpacing from './sub-components/animatedText';
import BoxReveal from './sub-components/animatedBoxtext';

export const ProjectParallaxContent = ({ projectData }: any) => {
  return (
    <div className='bg-white '>
      <TextParallaxContent
        imgUrl={projectData.imgroute1}
        subheading={projectData.title}
        heading='Built for all of us.'
      >
        <ExampleContent data={projectData} indexNumber={'0'} />
      </TextParallaxContent>
      <TextParallaxContentVer2
        imgUrl={projectData.imgroute2}
        subheading={projectData.title}
        heading='Never compromise.'
      >
        <ExampleContent data={projectData} indexNumber={'1'} />
      </TextParallaxContentVer2>
      <TextParallaxContentVer2
        imgUrl={projectData.imgroute3}
        subheading={projectData.title}
        heading='Dress for the best.'
      >
        <ExampleContent data={projectData} indexNumber={'2'} />
      </TextParallaxContentVer2>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING
      }}
    >
      <div className='relative'>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const TextParallaxContentVer2 = ({
  imgUrl,
  subheading,
  heading,
  children
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING
      }}
    >
      <div className='relative'>
        <StickyImageVer2 imgUrl={imgUrl} />
      </div>
      {children}
    </div>
  );
};
const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale
      }}
      ref={targetRef}
      className='sticky z-0 overflow-hidden rounded-3xl'
    >
      <motion.div
        className='absolute inset-0 bg-neutral-950/70'
        style={{
          opacity
        }}
      />
    </motion.div>
  );
};

const StickyImageVer2 = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale
      }}
      ref={targetRef}
      className='sticky z-0 overflow-hidden rounded-3xl'
    >
      <motion.div
        className='absolute inset-0'
        style={{
          opacity
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity
      }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'
    >
    
      <GradualSpacing
        text={subheading}
        className='text-center text-4xl   md:text-7xl '
      />
    </motion.div>
  );
};

const ExampleContent = ({ data, indexNumber }: any) => (
  <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12'>

      <h2 className='col-span-1 text-3xl font-bold md:col-span-4'>{data.Heading[indexNumber]}</h2>
  
    <div className='col-span-1 md:col-span-8'>
      <BoxReveal>
        <p className='mb-4 text-xl text-neutral-600 md:text-2xl'>
          {data.ContentDescription1[indexNumber]}
        </p>
      </BoxReveal>
      <BoxReveal>
        <p className='mb-8 text-xl text-neutral-600 md:text-2xl'>
          {data.ContentDescription2[indexNumber]}
        </p>
      </BoxReveal>
      <BoxReveal>
        <button className='w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit'>
          Learn more <FiArrowUpRight className='inline' />
        </button>
      </BoxReveal>
    </div>
  </div>
);

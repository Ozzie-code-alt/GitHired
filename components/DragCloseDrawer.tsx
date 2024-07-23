import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import useMeasure from 'react-use-measure';
import { useDragControls, useMotionValue, useAnimate, motion } from 'framer-motion';
import { IconCloudDemo } from './Icon-Cloud';

export const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='grid lg:!w-screen w-auto h-auto  lg:!h-screen  place-content-center  '>
      <button
        onClick={() => setOpen(true)}
        className='rounded bg-indigo-500  px-4 py-2 text-white transition-colors hover:bg-indigo-600'
      >
        More About Me
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen} >
        <div className='mx-auto  max-w-xl md:h-[70%] md:overflow-y-scroll space-y-4 z-50  text-neutral-400'>
          <div className=' flex justify-center'>
            <IconCloudDemo />
          </div>
          <h2 className='text-4xl font-bold text-neutral-200'>More About me</h2>
          <p>
            I&apos;m a Fullstack Web Developer passionate about building seamless and scalable web
            applications that deliver outstanding user experiences. With a strong eagerness to
            learn, I constantly strive to master new technologies and techniques, keeping me at the
            forefront of web development. Driven by curiosity and a love for problem-solving, I
            embrace challenges that push my skills and foster growth. In addition to my web
            development expertise, I am also proficient in mobile development using React Native and
            Expo, enabling me to create high-quality mobile applications. My goal is to use my
            expertise to create innovative solutions that make a real difference.
          </p>
          {/* <p>
            Laudantium corrupti neque rerum labore tempore sapiente. Quos, nobis dolores. Esse fuga,
            cupiditate rerum soluta magni numquam nemo aliquid voluptate similique deserunt!
          </p> */}
          <p>Will Add more Stuff here {':<'}</p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const DragCloseDrawer = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0]
    });

    const yStart = typeof y.get() === 'number' ? y.get() : 0;

    await animate('#drawer', {
      y: [yStart, height]
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className='fixed inset-0 z-50 bg-neutral-950/70'
        >
          <motion.div
            id='drawer'
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{
              ease: 'easeInOut'
            }}
            className='absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900'
            style={{ y }}
            drag='y'
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5
            }}
          >
            <div className='absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4'>
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className='h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing'
              ></button>
            </div>
            <div className='relative z-0 h-full overflow-y-scroll p-4 pt-12'>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

import React, { useRef, useState } from 'react';
import { Player } from '@lordicon/react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
const MascotIcon = require('../public/json/littleMascot.json') as string;

const LittleMascot = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const ClientSideOnlyAnimatedMascot = dynamic(
    () => import('@/components/sub-components/animatedMascot'),
    {
      ssr: false
    }
  );
  const MascotRef = useRef<Player>(null);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
    MascotRef.current?.playFromBeginning();
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
    MascotRef.current?.play();
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative'>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: tooltipVisible ? 1 : 0, y: tooltipVisible ? -40 : -20 }}
        transition={{ duration: 0.3 }}
        className='absolute dark:text-white bg-slate-500 border  py-2 px-2 rounded-lg w-[600px] text-center z-50 bottom-10'
      >
        Hellooooo! In Justin&apos;s absence, I&apos;lm here to let you know that some parts of this website are
        still under development. Rest assured, you can still view all his projects. Click on me to
        reach out to him on Facebook.
      </motion.div>
      <div>
        <a href='https://www.facebook.com/SarcasmIzLit/' target='_blank'>
          <div className='flex md:hidden'>
            <ClientSideOnlyAnimatedMascot />
          </div>
          <div className='hidden md:flex'>
            <Player ref={MascotRef} size={80} icon={MascotIcon} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default LittleMascot;

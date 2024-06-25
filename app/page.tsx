'use client';
import AnimatedSplash from '@/components/AnimatedSplash';
import Content from '@/components/Content';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    const timedOut = () => {
      setTimeout(() => {
        setTimer(true);
      }, 6000);
    };

    timedOut();
  }, [timer]);

  return (
    <main className='flex  relative justify-center  '>
      <div className=' w-full relative '>
        <div className={` ${timer === true ? 'hidden' : 'flex'}`}>
          <AnimatedSplash />
        </div>

        <div className={` ${timer === true ? 'lg:flex' : 'hidden'}`}>
          <Navbar />
          <Content />
        </div>
      </div>
    </main>
  );
}

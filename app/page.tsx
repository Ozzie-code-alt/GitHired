'use client';
import AnimatedSplash from '@/components/AnimatedSplash';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
export default function Home() {
  const [timer, setTimer] = useState(false);
  const ContentDynamic = dynamic(() => import('../components/Content'), { ssr: false });
  useEffect(() => {
    const timedOut = () => {
      setTimeout(() => {
        setTimer(true);
      }, 8000);
    };

    timedOut();
  }, [timer]);

  return (
    <main className='flex  relative justify-center  '>
      <div className=' w-full relative  '>
        <div className={` ${timer === true ? 'hidden' : 'flex'}`}>
          <AnimatedSplash />
        </div>

        <div className={` ${timer === true ? 'lg:flex' : 'hidden'}`}>
          <Navbar />
          <ContentDynamic />
        </div>
      </div>
    </main>
  );
}

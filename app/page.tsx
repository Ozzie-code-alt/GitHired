'use client';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
export default function Home() {

  const ContentDynamic = dynamic(() => import('../components/Content'), { ssr: false });


  return (
    <main className='flex dark:bg-black  relative justify-center  '>
      <div className=' w-full relative  '>
        {/* <div className={` ${timer === true ? 'lg:flex' : 'hidden'}`}>
          <Navbar />
          <ContentDynamic />
        </div> */}

        <div className={` 'lg:flex' : 'hidden'}`}>
          <Navbar />
          <ContentDynamic />
        </div>
      </div>
    </main>
  );
}

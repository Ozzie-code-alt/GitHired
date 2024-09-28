'use client';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { IPadCursorProvider, useIPadCursor } from 'ipad-cursor/react';
import type { IpadCursorConfig } from 'ipad-cursor';
import { motion, AnimatePresence } from 'framer-motion';
export default function Home() {
  // Dynamic import for Content component
  const ContentDynamic = dynamic(() => import('../components/Content'), { ssr: true });

  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);
  const config: IpadCursorConfig = {};

  // Custom hook to initialize iPad Cursor once the content is loaded
  useIPadCursor();

  // Simulating content load completion and setting up the iPad cursor config
  useEffect(() => {
    // Simulate a delay for loading (optional)
    const timer = setTimeout(() => {
      setIsLoading(false); // Content loaded, stop showing the loader
    }, 4000); // You can adjust the timing or remove it based on actual content loading

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  return (
    <IPadCursorProvider config={config}>
      <main className='flex dark:bg-black relative justify-center'>
        <AnimatePresence>
          <div className='w-full relative'>
            {/* Display a loading spinner or loading screen while content is loading */}
            {isLoading ? (
              <LoadingScreen key='loading-screen' />
            ) : (
              <motion.div
                key='main-content'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className='lg:flex'>
                  <Navbar />
                  <ContentDynamic />
                </div>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </main>
    </IPadCursorProvider>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className='flex justify-center items-center flex-col h-screen '
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Outer glowing rotating rings */}
      <motion.div
        className='relative flex justify-center items-center'
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity
          }
        }}
      >
        {/* First Rotating Ring */}
        <motion.div
          className='absolute w-40 h-40 rounded-full border-4 border-gray-700'
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 4,
            ease: 'linear',
            repeat: Infinity
          }}
        />

        {/* Second Rotating Ring (Inverse Direction) */}
        <motion.div
          className='absolute w-28 h-28 rounded-full border-4 border-gray-500'
          animate={{
            rotate: [360, 0]
          }}
          transition={{
            duration: 3,
            ease: 'linear',
            repeat: Infinity
          }}
        />

        {/* Inner Glowing Pulsating Core */}
        <motion.div
          className='relative w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full'
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              '0 0 20px 5px rgba(128, 128, 128, 0.5)',
              '0 0 40px 10px rgba(128, 128, 128, 0.8)',
              '0 0 20px 5px rgba(128, 128, 128, 0.5)'
            ]
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity
          }}
        />
      </motion.div>

      {/* Fade-in, fade-out text */}
      <motion.div
        className='mt-20 text-black text-lg'
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.5,
          ease: 'easeInOut',
          repeat: Infinity
        }}
      >
        Justin Santos Full Stack Software Engineer
      </motion.div>
    </motion.div>
  );
}

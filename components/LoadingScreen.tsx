'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-black">
      {/* Outer glowing rotating rings */}
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
      >
        {/* First Rotating Ring */}
        <motion.div
          className="absolute w-40 h-40 rounded-full border-4 border-gray-700"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Second Rotating Ring (Inverse Direction) */}
        <motion.div
          className="absolute w-28 h-28 rounded-full border-4 border-gray-500"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 3,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Inner Glowing Pulsating Core */}
        <motion.div
          className="relative w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              '0 0 20px 5px rgba(128, 128, 128, 0.5)',
              '0 0 40px 10px rgba(128, 128, 128, 0.8)',
              '0 0 20px 5px rgba(128, 128, 128, 0.5)',
            ],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Fade-in, fade-out text */}
      <motion.div
        className="mt-8 text-white text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.5,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        Justin Santos Full Stack Software Engineer
      </motion.div>
    </div>
  );
}

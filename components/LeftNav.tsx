import { LEFTNAV_CONSTANTS } from '@/constants/constants';
import React, { useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from './Modal';
import { motion } from 'framer-motion';
import Image from 'next/image';
const LeftNav = () => {
  const images = [
    'https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className='hidden lg:flex justify-between'>
      {LEFTNAV_CONSTANTS.map((item, index) => (
        <Modal key={index}>
          <ModalTrigger
            className={`rounded-3xl  border-2 border-dashed hover:scale-105  duration-700 ease-in-out  px-6 flex justify-center hover:cursor-pointer items-center uppercase text-black transition-all  hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
               ${
                 item.value == '1'
                   ? '     bg-[rgba(255,0,247,.3)]  border-[rgba(255,0,246,.8)]  text-[#680045] '
                   : item.value == '2'
                     ? '   bg-[rgba(0,208,255,.1)] border-[#00eaff] text-[#005f68]'
                     : '  bg-[rgba(0,255,17,.1)] border-[#0f1] text-[#005205]'
               } `}
          >
            <span className='group-hover/modal-btn:translate-x-40 text-center transition duration-500'>
              {item.title}
            </span>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
                Book your trip to{' '}
                <span className='px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200'>
                  Bali
                </span>{' '}
                now! ✈️
              </h4>
              <div className='flex justify-center items-center'>
                {images.map((image, idx) => (
                  <motion.div
                    key={'images' + idx}
                    style={{
                      rotate: Math.random() * 20 - 10
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100
                    }}
                    className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden'
                  >
                    <Image
                      src={image}
                      alt='bali images'
                      width='500'
                      height='500'
                      className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0'
                    />
                  </motion.div>
                ))}
              </div>
              {/* <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <MicIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div>
            </div> */}
            </ModalContent>
            <ModalFooter className='gap-4'>
              <button className='px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28'>
                Cancel
              </button>
              <button className='bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28'>
                Book Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      ))}
    </div>
  );
};

export default LeftNav;

import { DATA, LEFTNAV_CONSTANTS } from '@/constants/constants';
import React, { useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from './Modal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconCloudDemo } from './Icon-Cloud';
import BlurFade from './sub-components/blur-fade';
import { ResumeCard } from './resume-card';
import { HackathonCard } from './sub-components/hackathoncard';
const LeftNav = () => {
  const images = [
    'https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];
  const BLUR_FADE_DELAY = 0.04;
  const [open, setOpen] = useState(false);
  return (
    <div className='hidden lg:flex   gap-5'>
      {LEFTNAV_CONSTANTS.map((item, index) => (
        <Modal key={index}>
          <ModalTrigger
            className={`rounded-3xl text-lg border-2 border-dashed hover:scale-105 z-[10] duration-700 ease-in-out  px-6 flex justify-center hover:cursor-pointer items-center uppercase text-black transition-all  hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
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
              {item.value == '1' ? (
                <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
                  Experience
                </h4>
              ) : item.value == '2' ? (
                <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
                  Contact
                </h4>
              ) : (
                <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
                  Projects
                </h4>
              )}

              {item.value == '1' ? (
                <div className='mx-auto  w-fit  overflow-y-scroll  no-scrollbar h-screen  space-y-4 z-50  pb-32  text-slate-800'>
                  <section id='work'>
                    <div className='flex min-h-0 flex-col gap-y-3'>
                      <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className='text-xl font-bold'>Work Experience</h2>
                      </BlurFade>
                      {DATA.work.map((work, id) => (
                        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                          <ResumeCard
                            key={work.company}
                            logoUrl={work.logoUrl}
                            altText={work.company}
                            title={work.company}
                            subtitle={work.title}
        
                            badges={work.badges}
                            period={`${work.start} - ${work.end ?? 'Present'}`}
                            description={work.description}
                          />
                        </BlurFade>
                      ))}
                    </div>
                  </section>
                  <section id='education'>
                    <div className='flex min-h-0 flex-col gap-y-3'>
                      <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className='text-xl font-bold'>Education</h2>
                      </BlurFade>
                      {DATA.education.map((education, id) => (
                        <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                          <ResumeCard
                            key={education.school}
                            href={education.href}
                            logoUrl={education.logoUrl}
                            altText={education.school}
                            title={education.school}
                            subtitle={education.degree}
                            period={`${education.start} - ${education.end}`}
                          />
                        </BlurFade>
                      ))}
                    </div>
                  </section>
                  <section id='hackathons'>
                    <div className='space-y-12  w-full  py-12'>
                      <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                          <div className='space-y-2'>
                            <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                              Hackathons
                            </div>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                              I like building things
                            </h2>
                            <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                              During my time in university, I attended {DATA.hackathons.length}+
                              hackathons. People from around the country would come together and
                              build incredible things in 2-3 days. It was eye-opening to see the
                              endless possibilities brought to life by a group of motivated and
                              passionate individuals.
                            </p>
                          </div>
                        </div>
                      </BlurFade>
                      <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <ul className='mb-4 ml-4 divide-y px-5 divide-dashed '>
                          {DATA.hackathons.map((project, id) => (
                            <BlurFade
                              key={project.title + project.dates}
                              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                            >
                              <HackathonCard
                                title={project.title}
                                description={project.description}
                                location={project.location}
                                dates={project.dates}
                              
                                links={project.links}
                              />
                            </BlurFade>
                          ))}
                        </ul>
                      </BlurFade>
                    </div>
                  </section>
                </div>
              ) : item.value == '2' ? (
                <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
                  Menu
                </h4>
              ) : (
                <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
                  Projects
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
                </h4>
              )}
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

import { DATA, LEFTNAV_CONSTANTS, PROJECTNAV } from '@/constants/constants';
import React from 'react';
import { Modal, ModalBody, ModalContent, ModalTrigger } from './Modal';


import BlurFade from './sub-components/blur-fade';
import { ResumeCard } from './resume-card';
import { HackathonCard } from './sub-components/hackathoncard';
import Link from 'next/link';
import BoxReveal from './sub-components/animatedBoxtext';

const LeftNav = () => {
  const BLUR_FADE_DELAY = 0.04;
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
                  <section id='contact'>
                    <div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full pt-12'>
                      <BlurFade delay={BLUR_FADE_DELAY * 16}>
                        <div className='space-y-3'>
                          <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                            Get in Touch
                          </h2>
                          <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                            Want to chat? Just shoot me a dm{' '}
                            <Link
                              href={'https://www.facebook.com/SarcasmIzLit/'}
                              className='text-blue-500 hover:underline'
                            >
                              with a direct question on facebook
                            </Link>{' '}
                            and I&apos;ll respond whenever I can. I will ignore all soliciting.
                          </p>
                          <div className='flex flex-col  gap-2 w-full'>
                            <div className='flex items-center  gap-5'>
                              <h4 className='text-left text-lg font-bold tracking-tighter '>
                                Email:
                              </h4>
                              <a
                                href='mailto:jsantosvee@gmail.com'
                                className='text-sm font-normal tracking-tighter'
                              >
                                jsantosvee@gmail.com
                              </a>
                            </div>
                            <div className='flex items-center  gap-5'>
                              <h4 className='text-left text-lg font-bold tracking-tighter '>
                                Github:
                              </h4>
                              <a
                                href='https://github.com/Ozzie-code-alt?tab=repositories'
                                className='text-sm font-normal tracking-tighter'
                              >
                                Ozzie-code-alt
                              </a>
                            </div>
                            <div className='flex items-center  gap-5'>
                              <h4 className='text-left text-lg font-bold tracking-tighter '>
                                Linkedin:
                              </h4>
                              <a
                                href='https://www.linkedin.com/in/justin-r-santos/'
                                className='text-sm font-normal tracking-tighter'
                              >
                                Justin Santos
                              </a>
                            </div>
                          </div>
                        </div>
                      </BlurFade>
                    </div>
                  </section>
                </h4>
              ) : (
                <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
                  {/*TODO:Make Box Reveal Component Here */}
                  <BoxReveal boxColor={'gray'} duration={0.5}>
                    <p className='text-[1rem] font-semibold'>
                      Some Text Here <span className='text-black'>.</span>
                    </p>
                  </BoxReveal>
                </h4>
              )}
            </ModalContent>
          </ModalBody>
        </Modal>
      ))}
    </div>
  );
};

export default LeftNav;

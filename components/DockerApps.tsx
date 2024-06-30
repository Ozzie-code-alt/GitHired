import { Dock, DockIcon } from './sub-components/dock';
import React, { useRef, useState } from 'react';
import { Player } from '@lordicon/react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
export type IconProps = React.HTMLAttributes<SVGElement>;
const FacebookIcon = require('../public/json/facebook.json') as string;
const EmailIcon = require('../public/json/email.json') as string;
const GithubIcon = require('../public/json/githb.json') as string;
const LinkedinIcon = require('../public/json/linkedin.json') as string;
const WhatIcon = require('../public/json/what.json') as string;
export function DockDemo() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipVisibleEmail, setTooltipVisibleEmail] = useState(false);
  const [tooltipVisibleGithub, setTooltipVisibleGithub] = useState(false);
  const [tooltipVisibleEmailLinkedin, setTooltipVisibleEmailLinkedin] = useState(false);
  const [tooltipVisibleEmailWhat, setTooltipVisibleEmailWhat] = useState(false);
  const [clicked, setClicked] = useState(false);
  const ClientSideOnlyAnimatedFacebook = dynamic(
    () => import('@/components/sub-components/animatedFacebook'),
    {
      ssr: false
    }
  );

  const FacebookRef = useRef<Player>(null);
  const handleMouseEnter = () => {
    setTooltipVisible(true);
    FacebookRef.current?.playFromBeginning();
  };
  const handleMouseLeave = () => {
    setTooltipVisible(false);
    FacebookRef.current?.play();
  };

  const ClientSideOnlyAnimatedEmail = dynamic(
    () => import('@/components/sub-components/animatedEmail'),
    {
      ssr: false
    }
  );
  const EmailRef = useRef<Player>(null);
  const handleMouseEnterEmail = () => {
    setTooltipVisibleEmail(true);
    EmailRef.current?.playFromBeginning();
  };
  const handleMouseLeaveEmail = () => {
    setTooltipVisibleEmail(false);
    EmailRef.current?.play();
  };

  const ClientSideOnlyAnimatedGithub = dynamic(
    () => import('@/components/sub-components/animatedGithub'),
    {
      ssr: false
    }
  );

  const GithubRef = useRef<Player>(null);
  const handleMouseEnterGithub = () => {
    setTooltipVisibleGithub(true);
    GithubRef.current?.playFromBeginning();
  };
  const handleMouseLeaveGithub = () => {
    setTooltipVisibleGithub(false);
    GithubRef.current?.play();
  };

  const ClientSideOnlyAnimatedLinkedin = dynamic(
    () => import('@/components/sub-components/animatedLinkedin'),
    {
      ssr: false
    }
  );
  const LinkedinRef = useRef<Player>(null);
  const handleMouseEnterLinkedin = () => {
    setTooltipVisibleEmailLinkedin(true);
    LinkedinRef.current?.playFromBeginning();
  };
  const handleMouseLeaveLinkedin = () => {
    setTooltipVisibleEmailLinkedin(false);
    LinkedinRef.current?.play();
  };

  const ClientSideOnlyAnimatedWhat = dynamic(
    () => import('@/components/sub-components/animatedWhat'),
    {
      ssr: false
    }
  );
  const WhatRef = useRef<Player>(null);
  const handleMouseEnterWhat = () => {
    setTooltipVisibleEmailWhat(true);
    WhatRef.current?.playFromBeginning();
  };
  const handleMouseLeaveWhat = () => {
    setTooltipVisibleEmailWhat(false);
    WhatRef.current?.play();
  };
  return (
    <div className='absolute flex h-fit w-fit flex-col items-center justify-center overflow-hidden rounded-lg  bg-background '>
      <Dock>
        <DockIcon className='flex flex-col  group relative'>
          {tooltipVisible && (
            <div className=' dark:text-white text-center w-fit bottom-14 absolute transition-all duration-500 ease-in-out '>
              Facebook
            </div>
          )}
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=''>
            <div>
              <a href='https://www.facebook.com/SarcasmIzLit/' target='_blank'>
                <div className='flex md:hidden'>
                  <ClientSideOnlyAnimatedFacebook />
                </div>
                <div className='hidden md:flex'>
                  <Player ref={FacebookRef} size={40} icon={FacebookIcon} />
                </div>
              </a>
            </div>
          </div>
        </DockIcon>
        <DockIcon>
          {tooltipVisibleEmail && (
            <div className=' dark:text-white text-center w-fit bottom-16 absolute transition-all duration-500 ease-in-out '>
              Gmail
            </div>
          )}
          <div onMouseEnter={handleMouseEnterEmail} onMouseLeave={handleMouseLeaveEmail}>
            <div>
              <a href='mailto:jsantosvee@gmail.com'>
                <div className='flex md:hidden'>
                  <ClientSideOnlyAnimatedEmail />
                </div>
                <div className='hidden md:flex'>
                  <Player ref={EmailRef} size={40} icon={EmailIcon} />
                </div>
              </a>
            </div>
          </div>
        </DockIcon>
        <DockIcon>
          {tooltipVisibleGithub && (
            <div className=' dark:text-white text-center w-fit bottom-16 absolute transition-all duration-500 ease-in-out '>
              Github
            </div>
          )}
          <div onMouseEnter={handleMouseEnterGithub} onMouseLeave={handleMouseLeaveGithub}>
            <div>
              <a href='https://github.com/Ozzie-code-alt' target='_blank'>
                <div className='flex md:hidden'>
                  <ClientSideOnlyAnimatedGithub />
                </div>
                <div className='hidden md:flex'>
                  <Player ref={GithubRef} size={40} icon={GithubIcon} />
                </div>
              </a>
            </div>
          </div>
        </DockIcon>
        <DockIcon>
          {tooltipVisibleEmailLinkedin && (
            <div className=' dark:text-white text-center w-fit bottom-16 absolute transition-all duration-500 ease-in-out '>
              Linkedin
            </div>
          )}
          <div onMouseEnter={handleMouseEnterLinkedin} onMouseLeave={handleMouseLeaveLinkedin}>
            <div>
              <a href='https://www.linkedin.com/in/justin-r-santos/' target='_blank'>
                <div className='flex md:hidden'>
                  <ClientSideOnlyAnimatedLinkedin />
                </div>
                <div className='hidden md:flex'>
                  <Player ref={LinkedinRef} size={40} icon={LinkedinIcon} />
                </div>
              </a>
            </div>
          </div>
        </DockIcon>
        <DockIcon>
          {tooltipVisibleEmailWhat && (
            <div className=' dark:text-white text-center w-fit bottom-16 absolute transition-all duration-500 ease-in-out '>
              WhatsApp
            </div>
          )}
          <div
            onMouseEnter={handleMouseEnterWhat}
            onMouseLeave={handleMouseLeaveWhat}
            onClick={() => {
              setClicked(!clicked);
            }}
            className=''
          >
            <div>
              <div className='flex md:hidden'>
                <ClientSideOnlyAnimatedWhat />
              </div>
              <div className='hidden md:flex'>
                <Player ref={WhatRef} size={40} icon={WhatIcon} />
              </div>
            </div>
          </div>
        </DockIcon>
      </Dock>
      <motion.div
        className={`${clicked ? 'opacity-100' : 'opacity-0'} dark:text-white w-fit border px-5 transition-all duration-500 ease-in-out absolute bottom-16  z-50 border-slate-500 rounded-lg`}
      >
        +63 927 2335 7178
      </motion.div>
    </div>
  );
}

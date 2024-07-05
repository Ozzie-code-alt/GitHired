'use client';
import React from 'react';
import { Player } from '@lordicon/react';
import { useRef, useEffect } from 'react';
const Mascot = require('../../public/json/littleMascot.json') as string;

const AnimatedLinkedin = () => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <div>
      {' '}
      <Player
        ref={playerRef}
        size={40}
        icon={Mascot}
        onComplete={() => {
          playerRef.current?.playFromBeginning();
        }}
      />
    </div>
  );
};

export default AnimatedLinkedin;

"use client";
import React from "react";
import { Player } from "@lordicon/react";
import  { useRef, useEffect } from "react";
const Linkedin = require("../../public/json/linkedin.json") as string;

const AnimatedLinkedin = () => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <div>
      {" "}
      <Player
        ref={playerRef}
        size={40}
        icon={Linkedin}
        onComplete={() => {
          playerRef.current?.playFromBeginning();
        }}
      />
    </div>
  );
};

export default AnimatedLinkedin;

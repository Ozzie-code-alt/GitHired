"use client";
import React from "react";
import { Player } from "@lordicon/react";
import  { useRef, useEffect } from "react";
const Github = require("../../public/json/githb.json") as string;

const AnimatedGithub = () => {
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
        icon={Github}
        onComplete={() => {
          playerRef.current?.playFromBeginning();
        }}
      />
    </div>
  );
};

export default AnimatedGithub;

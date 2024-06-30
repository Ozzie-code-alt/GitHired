"use client";
import React from "react";
import { Player } from "@lordicon/react";
import  { useRef, useEffect } from "react";
const What = require("../../public/json/what.json") as string;

const AnimatedWhat = () => {
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
        icon={What}
        onComplete={() => {
          playerRef.current?.playFromBeginning();
        }}
      />
    </div>
  );
};

export default AnimatedWhat;

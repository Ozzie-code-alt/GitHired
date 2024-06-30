"use client";
import React from "react";
import { Player } from "@lordicon/react";
import  { useRef, useEffect } from "react";
const Facebook = require("../../public/json/facebook.json") as string;

const AnimatedFacebook = () => {
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
        icon={Facebook}
        onComplete={() => {
          playerRef.current?.playFromBeginning();
        }}
      />
    </div>
  );
};

export default AnimatedFacebook;

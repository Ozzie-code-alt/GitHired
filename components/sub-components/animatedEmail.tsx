"use client";
import React from "react";
import { Player } from "@lordicon/react";
import  { useRef, useEffect } from "react";
const Email = require("../../public/json/email.json") as string;

const AnimatedEmail = () => {
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
        icon={Email}
        onComplete={() => {
          playerRef.current?.playFromBeginning();
        }}
      />
    </div>
  );
};

export default AnimatedEmail;

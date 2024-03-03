import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import gsap from 'gsap';

const ViewSite = ({ component, handleMove }) => {
  return (
    <a
      href=""
      target="blank"
      className="absolute w-[10rem] h-[10rem] bg-cyan rounded-full flex items-center justify-center text-black text-xl font-gtApina font-bold"
    >
      View Site
    </a>
  );
};

export default ViewSite;

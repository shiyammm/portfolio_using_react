import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';
import { useGSAP } from '@gsap/react';
import {
  Navbar,
  Hero,
  About,
  Cursor,
  Works,
  WhatIUse,
  Contact,
} from './constants/index';

const App = () => {
  const [hoverLink, setHoverLink] = useState(false);
  const [hoverNavLink, setHoverNavLink] = useState(false);
  const tl1 = useRef();
  const loaderRefs = {
    loader1: useRef(null),
    loader2: useRef(null),
    loader3: useRef(null),
  };
  const navLoaderRef = useRef();

  const cursor = useRef();

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useGSAP(() => {
    const mouse = (e) => {
      gsap.to(cursor.current, {
        x: e.x,
        y: e.y,
      });
    };
    window.addEventListener('pointermove', mouse);
  });

  return (
    <>
      <main className="relative overflow-hidden">
        <div className="relative bg-[#121315]">
          <div id="loader" className="z-[900] w-full absolute  text-white ">
            <div
              id="loader1"
              className="w-full h-screen bg-cyan"
              ref={loaderRefs.loader1}
            ></div>
            <div
              id="loader2"
              className=" bg-[#121315] w-full h-screen"
              ref={loaderRefs.loader2}
            ></div>
            <div
              id="loader3"
              className="w-full h-screen bg-cyan"
              ref={loaderRefs.loader3}
            ></div>
          </div>
          <Cursor
            hoverLink={hoverLink}
            cursor={cursor}
            hoverNavLink={hoverNavLink}
          />
          <Navbar
            hoverNavLink={hoverNavLink}
            setHoverNavLink={setHoverNavLink}
            navLoaderRef={navLoaderRef}
          />
          <Hero tl1={tl1} loaderRefs={loaderRefs} navLoaderRef={navLoaderRef} />
          <div
            style={{
              backgroundImage:
                'radial-gradient(125% 125% at 50% 100%, #121315 60% ,#00ffa2)',
            }}
            className="px-12 sm:px-3"
          >
            <About />
          </div>
          <Works
            cursor={cursor}
            hoverLink={hoverLink}
            setHoverLink={setHoverLink}
          />
          <WhatIUse />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default App;

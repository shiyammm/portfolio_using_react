import React, { useRef, useState } from 'react';
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
  const [hoverMail, setHoverMail] = useState(false);
  const tl1 = useRef();
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
          <Cursor hoverLink={hoverLink} cursor={cursor} hoverMail={hoverMail} />
          <Navbar navLoaderRef={navLoaderRef} />
          <Hero tl1={tl1} navLoaderRef={navLoaderRef} />
          <div className="px-12 sm:px-3 about-div">
            <About />
          </div>
          <Works
            cursor={cursor}
            hoverLink={hoverLink}
            setHoverLink={setHoverLink}
          />
          <WhatIUse />
          <Contact setHoverMail={setHoverMail} />
        </div>
      </main>
    </>
  );
};

export default App;

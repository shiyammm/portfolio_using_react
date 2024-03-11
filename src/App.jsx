import React, { useRef, useState } from 'react';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero';
import About from './containers/About';
import Works from './containers/Works';
import WhatIUse from './containers/WhatiUse';
import gsap from 'gsap';
import Cursor from './components/Cursor';
import { useGSAP } from '@gsap/react';
import Contact from './containers/Contact';

const App = () => {
  const [hoverLink, setHoverLink] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  const [hoverIcon, setHoverIcon] = useState(false);
  const [lensHover, setLensHover] = useState(false);

  const cursor = useRef();
  const containerRef = useRef(null);

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
    <main className="relative bg-gray">
      <div ref={cursor} className="fixed z-[100]">
        <Cursor
          hoverLink={hoverLink}
          hoverText={hoverText}
          hoverIcon={hoverIcon}
          lensHover={lensHover}
        />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Works
        cursor={cursor}
        hoverLink={hoverLink}
        hoverText={hoverText}
        setHoverText={setHoverText}
        setHoverLink={setHoverLink}
      />
      <WhatIUse hoverIcon={hoverIcon} setHoverIcon={setHoverIcon} />
      <Contact lensHover={lensHover} setLensHover={setLensHover} />
    </main>
  );
};

export default App;

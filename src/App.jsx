import React, { useRef, useState } from 'react';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero';
import About from './containers/About';
import Works from './containers/Works';
import WhatIUse from './containers/WhatIUse';
import gsap from 'gsap';
import Cursor from './components/Cursor';
import { useGSAP } from '@gsap/react';
import Contact from './containers/Contact';
import Lenis from '@studio-freight/lenis';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  const [hoverLink, setHoverLink] = useState(false);
  const [hoverIcon, setHoverIcon] = useState(false);
  const [hoverNavLink, setHoverNavLink] = useState(false);
  const [enterAboutPage, setEnterAboutPage] = useState(false);
  const [enterWorksPage, setEnterWorksPage] = useState(false);
  const [enterSkillPage, setEnterSkillPage] = useState(false);
  const [hoverText, setHoverText] = useState(false);

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
    <ParallaxProvider>
      <main className="relative bg-[#121315]">
        <Cursor
          hoverLink={hoverLink}
          hoverText={hoverText}
          hoverIcon={hoverIcon}
          cursor={cursor}
          enterAboutPage={enterAboutPage}
          enterWorksPage={enterWorksPage}
          enterSkillPage={enterSkillPage}
          hoverNavLink={hoverNavLink}
        />
        <Navbar hoverNavLink={hoverNavLink} setHoverNavLink={setHoverNavLink} />
        <Hero />
        <About setEnterAboutPage={setEnterAboutPage} />
        <Works
          cursor={cursor}
          hoverLink={hoverLink}
          hoverText={hoverText}
          setHoverText={setHoverText}
          setHoverLink={setHoverLink}
          hoverIcon={hoverIcon}
          setHoverIcon={setHoverIcon}
          setEnterWorksPage={setEnterWorksPage}
        />
        <WhatIUse
          setHoverText={setHoverText}
          setEnterSkillPage={setEnterSkillPage}
        />
        <Contact />
      </main>
    </ParallaxProvider>
  );
};

export default App;

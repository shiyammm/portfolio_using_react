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

const App = () => {
  const [hoverLink, setHoverLink] = useState(false);
  const [hoverIcon, setHoverIcon] = useState(false);
  const [enterAboutPage, setEnterAboutPage] = useState(false);
  const [enterWorksPage, setEnterWorksPage] = useState(false);
  const [enterSkillPage, setEnterSkillPage] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  const [enterContactPage, setEnterContactPage] = useState(false);
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
      <Cursor
        hoverLink={hoverLink}
        hoverText={hoverText}
        hoverIcon={hoverIcon}
        lensHover={lensHover}
        cursor={cursor}
        enterAboutPage={enterAboutPage}
        enterWorksPage={enterWorksPage}
        enterSkillPage={enterSkillPage}
        enterContactPage={enterContactPage}
      />
      <Navbar />
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
      <Contact
        lensHover={lensHover}
        setLensHover={setLensHover}
        setEnterContactPage={setEnterContactPage}
      />
    </main>
  );
};

export default App;

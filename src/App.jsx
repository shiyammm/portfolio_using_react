import React from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero';
import About from './containers/About';
import Works from './containers/Works';
import Contact from './containers/Contact';
import WhatIUse from './containers/WhatiUse';

const App = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <main className="bg-gray">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <WhatIUse />
      <Contact />
    </main>
  );
};

export default App;

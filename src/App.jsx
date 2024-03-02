import React from 'react';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero';
import About from './containers/About';
import Works from './containers/Works';
import Contact from './containers/Contact';

const App = () => {
  return (
    <main className=" bg-gray">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
    </main>
  );
};

export default App;

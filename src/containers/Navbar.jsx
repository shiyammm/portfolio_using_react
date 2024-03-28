import React, { useEffect, useRef } from 'react';
import Menu from '../components/Menu';
import { useState } from 'react';
import Magnet from '../components/Magnet';
import { MotionConfig, motion, easeInOut } from 'framer-motion';

const Navbar = ({ hoverNavLink, setHoverNavLink, navLoaderRef }) => {
  const navRef = useRef();

  let lastScroll = 0;

  const handleScroll = () => {
    let scrollY = document.documentElement.scrollTop;
    if (scrollY - 5 > lastScroll) {
      navRef.current.style.top = '-95px';
    } else {
      navRef.current.style.top = '0px';
    }
    lastScroll = scrollY - 5;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed w-full text-white z-[200] top-0 transition-all"
      ref={navRef}
    >
      <nav
        className="flex items-center justify-between flex-shrink-0 w-full pt-6 px-14 md:px-8"
        ref={navLoaderRef}
      >
        <div
          className="text-[2rem] font-Canopee-Regular text-white"
          style={{ fontSize: 'calc(1.5rem + 0.5vw)' }}
        >
          Shiyam Robert
        </div>
        <Menu />
      </nav>
    </header>
  );
};

export default Navbar;

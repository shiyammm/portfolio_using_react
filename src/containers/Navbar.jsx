import React, { useEffect, useRef } from 'react';
import Menu from '../components/Menu';
import { useState } from 'react';
import Magnet from '../components/Magnet';
import { MotionConfig, motion, easeInOut } from 'framer-motion';

const Navbar = ({ hoverNavLink, setHoverNavLink, navLoaderRef }) => {
  const [toggle, setToggle] = useState(false);

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
      <nav className="flex items-center justify-between w-full pt-6 px-14" ref={navLoaderRef} >
        <Magnet>
          <div className="text-[2rem] font-Canopee-Regular text-white z-[90]">
            Shiyam Robert
          </div>
        </Magnet>
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
        >
          <motion.button
            initial={false}
            animate={toggle ? 'open' : 'close'}
            className={`relative z-[500] active:border-none rounded-full text-2xl cursor-pointer w-16 h-16 bg-white/30 backdrop-blur`}
            onClick={() => setToggle((prev) => !prev)}
          >
            <motion.span
              style={{ left: '50%', top: '30%', x: '-50%', y: '-50%' }}
              className="absolute h-[3px] bg-white w-7"
              variants={{
                open: {
                  rotate: ['0deg', '0deg', '45deg'],
                  top: ['33%', '33%', '50%'],
                },
                close: {
                  rotate: ['45deg', '0deg', '0deg'],
                  top: ['50%', '50%', '33%'],
                },
              }}
            />
            <motion.span
              style={{
                left: 'calc(50% + 4px)',
                top: '50%',
                x: '-50%',
                y: '-50%',
                width: '20px',
              }}
              className="absolute h-[3px] bg-white"
              variants={{
                open: {
                  rotate: ['0deg', '0deg', '-45deg'],
                  width: '28px',
                  left: '50%',
                },
                close: {
                  rotate: ['-45deg', '0deg', '0deg'],
                  width: '20px',
                  left: 'calc(50% + 4px)',
                },
              }}
            />
            <motion.span
              style={{
                left: 'calc(50% + 7px)',
                bottom: '25%',
                x: '-50%',
                y: '-50%',
              }}
              className="w-3.5 h-[3px] bg-white absolute"
              variants={{
                open: {
                  rotate: ['0deg', '0deg', '45deg'],
                  bottom: ['27%', '27%', '50%'],
                  left: '45%',
                },
                close: {
                  rotate: ['45deg', '0deg', '0deg'],
                  bottom: ['50%', '50%', '27%'],
                  left: 'calc(50% + 7px)',
                },
              }}
            />
          </motion.button>
        </MotionConfig>
      </nav>
      <div className="relative">
        <Menu
          toggle={toggle}
          hoverNavLink={hoverNavLink}
          setHoverNavLink={setHoverNavLink}
        />
      </div>
    </header>
  );
};

export default Navbar;

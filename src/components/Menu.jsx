'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLinks, SocialLinks } from '../../lib/data';
import TextHoverEffect from '../components/TextHoverEffect';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: {
      width: 'calc(11.5rem + 11.5vw)',
      height: 'calc(15.5rem + 15.5vw)',
      top: '-25px',
      right: '-25px',
      transition: {
        duration: 0.5,
        type: 'tween',
        ease: [0.75, 0, 0.24, 1],
      },
    },
    closed: {
      width: 100,
      height: 40,
      right: '0px',
      top: '0px',
      transition: {
        duration: 0.5,
        delay: 0.5,
        type: 'tween',
        ease: [0.75, 0, 0.24, 1],
      },
    },
  };

  const perspective = {
    initial: {
      opacity: 0,
    },
    enter: (i) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        type: 'tween',
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        className="bg-[#1d1d1f] w-96 h-96 rounded-3xl relative font-circular-book"
        variants={variants}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && (
            <div
              className="flex flex-col justify-between h-full"
              style={{
                paddingLeft: 'calc(1.9rem + 1.9vw)',
                paddingTop: 'calc(2.9rem + 2.9vw)',
                paddingBottom: 'calc(1.9rem + 1.9vw)',
                paddingRight: 'calc(1.5rem + 1.5vw)',
              }}
            >
              <div
                className="grid body"
                style={{ gap: 'calc(0.5rem + 0.5vw)' }}
              >
                {NavLinks.map((navLink, i) => (
                  <motion.div
                    key={navLink}
                    className="font-medium"
                    variants={perspective}
                    custom={i}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <a
                      href={`/#${navLink}`}
                      className="text-[40px] flex "
                      style={{ fontSize: 'calc(1.1rem + 1.1vw)' }}
                    >
                      {navLink}
                    </a>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="text-2xl font-medium footer flex-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.9,
                }}
                exit="exit"
              >
                {SocialLinks.map((social, i) => (
                  <a
                    href={social.url}
                    key={social.name}
                    style={{ fontSize: 'calc(0.7rem + 0.7vw)' }}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {' '}
                    <social.icon />
                    <span>{social.name}</span>
                  </a>
                ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
      <div
        className="text-lg font-semibold button hover:font-semibold"
        onClick={() => setIsActive(!isActive)}
      >
        <motion.div
          className="slider"
          animate={{ top: isActive ? '-100%' : '0' }}
          transition={{
            duration: 0.5,
            type: 'tween',
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div
            className="element bg-cyan"
            style={{ fontSize: 'calc(0.6rem + 0.6vw)' }}
          >
            <p>Menu</p>
          </div>
          <div
            className="bg-black element"
            style={{
              fontSize: 'calc(0.6rem + 0.6vw)',
            }}
          >
            <p>Close</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Menu;

{
  /* 

      <div
        className="absolute top-0 bottom-0 bg-black h-screen w-[30rem] md:w-full right-[0rem] "
      >
        <div className="h-full flex-center">
          <ul className="space-y-5 font-semibold text-center text-white unordered font-neue-montreal">
            {NavLinks.map((link, i) => (
              <li className="relative" key={i}>
                <TextHoverEffect link={link} />
                <a href={`/#${link}`} className="hidden xl:block text-[2rem]">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="absolute flex items-center justify-between w-full px-16 text-xl text-white bottom-5 font-circular-book"
            ref={socialLinksRef}
          >
            {SocialLinks.map((socialLink, i) => (
              <div key={i}>
                <a href={socialLink.url} target="_blank" className="text-white">
                  <span className="flex items-center gap-5">
                    <socialLink.icon />
                    {socialLink.name}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div> */
}

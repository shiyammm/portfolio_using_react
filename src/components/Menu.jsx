import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef, useState } from 'react';
import { MotionConfig, motion, easeInOut } from 'framer-motion';
import Magnet from '../components/Magnet';
import { NavLinks, SocialLinks } from '../../lib/data';

const Menu = ({ setHoverNavLink, setGetLinkHover }) => {
  const [toggle, setToggle] = useState(false);

  const tl2 = useRef();
  const menuRef = useRef();
  const menuButton = useRef();
  const socialLinksRef = useRef();

  useEffect(() => {
    const handleMenuClick = () => {
      setToggle((prev) => !prev);
    };
    menuButton.current.addEventListener('click', handleMenuClick);
    return () => {
      menuButton.current.removeEventListener('click', handleMenuClick);
    };
  }, [toggle]);

  useGSAP(
    () => {
      tl2.current = gsap
        .timeline({
          paused: true,
          reversed: true,
        })
        .from(menuRef.current, {
          right: '0rem',
          top: '0rem',
          bottom: '0rem',
          width: '0rem',
          height: '0rem',
          duration: 0.3,
          ease: 'power.in',
        })
        .from('li', {
          x: 500,
          opacity: 0,
          stagger: 0.2,
          duration: 0.3,
          ease: 'bounce.in',
        })
        .from(socialLinksRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.5,
          ease: 'power.in',
        });
    },
    { scope: toggle },
  );

  useEffect(() => {
    toggle ? tl2.current.play() : tl2.current.reverse();
  }, [toggle]);

  const handleNavLinkEnter = (link) => {
    setGetLinkHover(link);
    setHoverNavLink(true);
  };
  const handleNavLinkLeave = () => {
    setGetLinkHover('');
    setHoverNavLink(false);
  };

  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: easeInOut,
        }}
      >
        <motion.button
          initial={false}
          animate={toggle ? 'open' : 'close'}
          className={`relative active:border-none rounded-full text-2xl w-14 h-14 md:w-[3.2rem] md:h-[3.2rem] cursor-pointer bg-white/30 backdrop-blur z-[400]`}
          ref={menuButton}
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

      <div
        className="absolute top-0 bottom-0 bg-black h-screen w-[30rem] md:w-full right-[0rem] "
        ref={menuRef}
      >
        <div className="h-full flex-center">
          <ul className="unordered font-neue-montreal tracking-wider text-[2.5rem] text-white text-center font-semibold space-y-14">
            {NavLinks.map((link, i) => (
              <li
                className="relative rounded-lg cursor-pointer hover:text-black xl:hover:text-white list"
                key={i}
                onMouseEnter={() => handleNavLinkEnter(link)}
                onMouseLeave={() => handleNavLinkLeave(link)}
              >
                <Magnet>
                  <a id={link} href={`/#${link}`} className="block xl:hidden">
                    {link}
                  </a>
                </Magnet>
                <a id={link} href={`/#${link}`} className="hidden xl:block">
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
      </div>
    </>
  );
};

export default Menu;

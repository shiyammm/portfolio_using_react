import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react';
import { PiStarFourFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Menu = ({ toggle }) => {
  const tl = useRef();
  const menuRef = useRef();
  const linksRef = useRef();

  const NavLink1 = 'Works';
  const NavLink2 = 'Contact';
  const NavLink3 = 'CV';
  const NavLinkWords1 = NavLink1.split('');
  const NavLinkWords2 = NavLink2.split('');
  const NavLinkWords3 = NavLink3.split('');

  useGSAP(() => {
    tl.current = gsap.timeline({
      paused: true,
      reversed: true,
    });
    tl.current.fromTo(
      menuRef.current,
      {
        x: '-100%',
        duration: 0.5,
      },
      {
        x: '0%',
        duration: 0.5,
      },
    );
    tl.current.from('.list', {
      y: 60,
      stagger: 0.1,
      opacity: 0,
    });
    tl.current.from(linksRef.current, {
      y: 50,
      stagger: 0.2,
      opacity: 0,
    });
  });

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse();
  }, [toggle]);

  return (
    <div
      className="fixed top-0 flex-col flex-center w-full h-screen bg-black z-[300]"
      ref={menuRef}
    >
      <ul className="unordered font-roslindale-display text-[11rem] text-white text-center leading-[15rem]">
        <li className="text-center cursor-pointer hover:text-violet flex-center gap-14 list">
          {' '}
          <PiStarFourFill className="w-10 h-10 text-violet" />
          <a to="/works">Work</a>
        </li>
        <li className="text-center cursor-pointer hover:text-violet flex-center gap-14 list">
          {' '}
          <PiStarFourFill className="w-10 h-10 text-violet" />
          <a to="/contact">Contact</a>
        </li>
        <li className="text-center cursor-pointer hover:text-violet flex-center gap-14 list">
          {' '}
          <PiStarFourFill className="w-10 h-10 text-violet" />
          <a to="/cv">CV</a>
        </li>
      </ul>
      <div
        className="flex items-center justify-between w-full px-16 text-xl text-white font-circular-medium "
        ref={linksRef}
      >
        <a
          href=""
          className="text-white transition-all duration-300 ease-in-out group"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            LinkedIn
          </span>
        </a>
        <a
          href=""
          className="text-white transition-all duration-300 ease-in-out group"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Github
          </span>
        </a>
      </div>
    </div>
  );
};

export default Menu;

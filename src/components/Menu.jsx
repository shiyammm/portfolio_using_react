import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { PiStarFourFill } from 'react-icons/pi';

const Menu = (props) => {
  const toggle = props.toggle;
  const tl = useRef();
  const menuRef = useRef();
  const linksRef = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline({
      paused: true,
      reversed: true,
    });
    tl.current.from(menuRef.current, {
      right: '-100vw',
      duration: 0.3,
    });
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

  useGSAP(() => {
    toggle ? tl.current.play() : tl.current.reverse();
  });

  return (
    <div
      className="fixed top-0 right-0 flex flex-col items-center justify-center w-full h-screen bg-gray"
      ref={menuRef}
    >
      <ul className="unordered font-roslindale-display text-[11rem] text-white text-center leading-[15rem]">
        <li className="flex items-center justify-center text-center gap-14 list">
          {' '}
          <PiStarFourFill className="w-10 h-10 text-violet" /> Work
        </li>
        <li className="flex items-center justify-center text-center gap-14 list">
          {' '}
          <PiStarFourFill className="w-10 h-10 text-violet" /> Contact
        </li>
        <li className="flex items-center justify-center text-center gap-14 list">
          {' '}
          <PiStarFourFill className="w-10 h-10 text-violet" /> CV
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

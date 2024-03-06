import React from 'react';
import Menu from '../components/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="fixed w-full backdrop-blur-lg h-[6rem] text-white z-[99] overflow-hidden">
      <div className="flex justify-between w-full mt-8 px-14">
        <header className="font-roslindale-display text-4xl text-white z-[60]">
          Shiyam
        </header>
        <div
          onClick={handleMenu}
          className=" relative flex items-center gap-4 z-[60] bg-violet px-5 py-1.5 text-black font-semibold active:border-none rounded-2xl text-2xl"
        >
          <span className="mb-1">{`${toggle ? 'Close' : 'Menu'}`}</span>
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              className={`line line1 ${toggle && 'opened-line1'}`}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path
              className={`line line2 ${toggle && 'opened-line2'}`}
              d="M 20,50 H 80"
            />
            <path
              className={`line line3 ${toggle && 'opened-line3'}`}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </div>
      </div>
      <Menu toggle={toggle} />
    </nav>
  );
};

export default Navbar;

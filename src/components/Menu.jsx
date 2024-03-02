import React from 'react';
import { useState } from 'react';

const Menu = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div
        onClick={handleMenu}
        className=" relative flex items-center gap-4 z-[60] bg-violet px-5 py-2 text-black font-semibold active:border-none rounded-full text-2xl"
      >
        <span className="mb-1">Menu</span>
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
      {toggle && (
        <div className="absolute w-full h-screen flex flex-col gap-[6rem] items-center justify-center z-[50] left-0 top-0">
          <ul className=" font-roslindale-display text-[11rem] text-white text-center leading-[15rem]">
            <li>Work</li>
            <li>Contact</li>
            <li>CV</li>
          </ul>
          <div className="flex items-center justify-between w-full px-16 text-xl text-white font-circular-medium ">
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
      )}
    </div>
  );
};

export default Menu;

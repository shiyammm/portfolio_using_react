import React from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';

const Cursor = ({ hoverLink, hoverText, hoverIcon }) => {
  return (
    <div
      className={`fixed top-1/2 ${
        hoverLink && 'scale-[3] transition ease-in-out delay-150 bg-violet'
      } ${
        hoverText &&
        'scale-[4] backdrop-opacity-95 backdrop-invert bg-white/10 transition ease-in-out'
      } ${
        hoverIcon && 'scale-[4]  transition ease-in-out delay-150 bg-cyan'
      } left-1/2 -translate-x-1/2 pointer-events-none -translate-y-1/2 w-10 h-10 bg-cyan rounded-full flex items-center justify-center text-black text-[0.7rem] tracking-[0.1rem] font-gtApina font-bold`}
    >
      {hoverLink && <TfiArrowTopRight className="w-3 h-3" />}
    </div>
  );
};
export default Cursor;

import React from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { SiMinutemailer } from 'react-icons/si';

const Cursor = ({
  hoverLink,
  cursor,
  hoverNavLink,
  getLinkHover,
  hoverMail,
}) => {
  return (
    <div className={`fixed z-[300]`} ref={cursor}>
      <div
        className={`fixed top-0 ${
          hoverLink &&
          'scale-[6] transition ease-in-out delay-150 bg-violet w-14 h-14'
        } ${
          hoverNavLink &&
          ' transition ease-in-out delay-150 bg-cyan w-[11rem] h-[11rem] '
        }
         ${
           hoverMail &&
           ' transition ease-in-out delay-150 bg-cyan w-[7rem] h-[7rem] '
         }
      left-0 -translate-x-1/2 pointer-events-none -translate-y-1/2 w-5 h-5 bg-cyan rounded-full flex-center text-black text-[0.7rem] tracking-[0.1rem] font-gtApina font-bold xl:hidden `}
      >
        {hoverLink && <TfiArrowTopRight className="w-2 h-2" />}
        <span
          className={`absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center transition-all duration-300 ${
            hoverNavLink
              ? 'inline-block font-semibold text-[2.5rem] rounded-full '
              : 'hidden'
          }`}
        >
          {getLinkHover}
        </span>
        {hoverMail && <SiMinutemailer className="w-14 h-14" />}
      </div>
    </div>
  );
};
export default Cursor;

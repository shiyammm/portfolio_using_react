import React from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';

const Cursor = ({
  hoverLink,
  enterSkillPage,
  enterAboutPage,
  cursor,
}) => {
  return (
    <div
      className={`fixed z-[100] ${enterAboutPage && 'z-[200]'} `}
      ref={cursor}
    >
      <div
        className={`fixed top-0 ${
          hoverLink && 'scale-[3] transition ease-in-out delay-150'
        } 
        ${enterSkillPage && 'bg-red-900 transition ease-in-out delay-150'}
      left-0 -translate-x-1/2 pointer-events-none -translate-y-1/2 w-10 h-10 bg-violet rounded-full flex items-center justify-center text-black text-[0.7rem] tracking-[0.1rem] font-gtApina font-bold`}
      >
        {hoverLink && <TfiArrowTopRight className="w-3 h-3" />}
      </div>
    </div>
  );
};
export default Cursor;

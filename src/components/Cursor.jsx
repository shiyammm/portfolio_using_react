import React from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';

const Cursor = ({
  hoverLink,
  hoverText,
  hoverIcon,
  lensHover,
  enterContactPage,
  enterSkillPage,
  enterAboutPage,
  enterWorksPage,
  cursor,
}) => {
  return (
    <div className={`fixed z-[100] ${hoverText && "z-[10]"} `} ref={cursor}>
      <div
        className={`fixed top-1/2 ${
          hoverLink && 'scale-[3] transition ease-in-out delay-150 bg-violet'
        } ${
          hoverText && 'scale-[6] bg-red-200 transition ease-in-out delay-150'
        } ${
          hoverIcon && 'scale-[1]  transition ease-in-out delay-150 bg-violet'
        } ${
          lensHover &&
          'bg-transparent border-[3px] border-white transition ease-in-out delay-150 w-[20rem] h-[20rem]'
        }  
        ${
          enterContactPage &&
          'bg-transparent border-[1px] border-white transition ease-in-out lens delay-150'
        } 
        ${enterSkillPage && 'bg-red-900 transition ease-in-out delay-150'}

        ${enterWorksPage && ' transition ease-in-out delay-150 bg-violet'}
        ${enterAboutPage && ' transition ease-in-out delay-150 bg-stone-950	'}
      left-1/2 -translate-x-1/2 pointer-events-none -translate-y-1/2 w-10 h-10 bg-cyan rounded-full flex items-center justify-center text-black text-[0.7rem] tracking-[0.1rem] font-gtApina font-bold`}
      >
        {hoverLink && <TfiArrowTopRight className="w-3 h-3" />}
      </div>
    </div>
  );
};
export default Cursor;

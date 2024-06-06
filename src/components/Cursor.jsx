import { TfiArrowTopRight } from 'react-icons/tfi';
import { CiMail } from 'react-icons/ci';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const Cursor = ({ cursor }) => {
  const { hoverLink, hoverMail } = useContext(GlobalContext);

  return (
    <div className={`fixed z-[300]`} ref={cursor}>
      <div
        className={`fixed top-0 ${
          hoverLink &&
          'scale-[6] transition ease-in-out delay-150 bg-violet w-14 h-14'
        } 
       
         ${
           hoverMail &&
           ' transition ease-in-out delay-150 bg-cyan w-[6rem] h-[6rem]'
         }
      left-0 -translate-x-1/2 pointer-events-none -translate-y-1/2 w-5 h-5 bg-cyan rounded-full flex-center text-black text-[0.7rem] tracking-[0.1rem] font-gtApina font-bold xl:hidden `}
      >
        {hoverLink && (
          <TfiArrowTopRight className="w-2 h-2 transition ease-in-out delay-150" />
        )}
        {hoverMail && (
          <CiMail className="w-12 h-12 transition ease-in-out delay-150" />
        )}
      </div>
    </div>
  );
};
export default Cursor;

import React, { useContext, useEffect, useRef } from 'react';
import Menu from '../components/Menu';
import { GlobalContext } from '../../context/GlobalContext';

const Navbar = () => {
  const { navLoaderRef } = useContext(GlobalContext);

  const navRef = useRef();

  let lastScroll = 0;

  const handleScroll = () => {
    let scrollY = document.documentElement.scrollTop;
    if (scrollY - 5 > lastScroll) {
      navRef.current.style.top = '-95px';
    } else {
      navRef.current.style.top = '0px';
    }
    lastScroll = scrollY - 5;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed w-full text-white z-[200] top-0 transition-all"
      ref={navRef}
    >
      <nav
        className="fixed w-full text-white bg-transparent"
        ref={navLoaderRef}
      >
        <div className="absolute top-10 left-10">
          <h1
            className="text-[2rem] font-Canopee-Regular text-white"
            style={{ fontSize: 'calc(1.5rem + 0.5vw)' }}
          >
            Shiyam Robert
          </h1>
        </div>
        <div className="relative w-full flex-between">
          <div className="absolute top-10 right-10">
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

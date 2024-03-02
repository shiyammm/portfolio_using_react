import React from 'react';
import Menu from '../components/Menu';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center justify-between h-10 px-16 pt-14 bg-gray-800 text-white z-[99]">
      <header className="font-roslindale-display text-3xl text-white z-[60]">
        Shiyam
      </header>
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;

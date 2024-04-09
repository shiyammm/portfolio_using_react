import React, { useState, useEffect } from 'react';

const TextHoverEffect = ({ link }) => {
  const [navLink, setNavLink] = useState(link);

  useEffect(() => {
    const handleLinkHoverEffect = () => {
      let iterations = 0;
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      const interval = setInterval(() => {
        setNavLink((prevLink) =>
          prevLink
            .split('')
            .map((linkText, index) => {
              if (index < iterations) {
                return link[index];
              }
              return alphabet[Math.floor(Math.random() * 26)];
            })
            .join(''),
        );

        iterations += 1 / 2;
        if (iterations >= link.length) {
          clearInterval(interval);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    };

    const linkElement = document.getElementById(link);
    linkElement.addEventListener('mouseenter', handleLinkHoverEffect);

    return () => {
      linkElement.removeEventListener('mouseenter', handleLinkHoverEffect);
    };
  }, [link]);

  return (
    <>
      <a
        id={link}
        href={`/#${link}`}
        className="block font-bold text-[2rem] uppercase xl:hidden tracking-widest px-4 py-3 rounded-tl-md rounded-tr-lg rounded-bl-lg rounded-br-3xl cursor-pointer hover:text-black hover:bg-cyan xl:hover:text-white transition ease-in-out delay-150"
      >
        {navLink}
      </a>
    </>
  );
};

export default TextHoverEffect;

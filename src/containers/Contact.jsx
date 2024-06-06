import React, { useContext } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MdArrowOutward } from 'react-icons/md';
import { SocialLinks } from '../../lib/data';
import { GlobalContext } from '../../context/GlobalContext';

const Contact = () => {
  const { setHoverMail } = useContext(GlobalContext);

  let Text = "Let's connect";
  let textSplit = Text.split(' ');

  useGSAP(() => {
    gsap.from(['.tween', '.arrow'], {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 20%',
      },
    });
    gsap.from('.line', {
      width: 0,
      opacity: 0,
      duration: 2.5,
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 20%',
      },
    });
    gsap.from('.links', {
      y: 10,
      opacity: 0,
      duration: 2.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 20%',
      },
    });
  });

  const handleMailIconEnter = () => {
    setHoverMail(true);
  };
  const handleMailIconLeave = () => {
    setHoverMail(false);
  };

  return (
    <footer
      className="relative w-full h-screen text-white flex-center px-14 contact"
      id="Contact"
    >
      <div>
        <a
          href="mailto:shiyamrobert@gmail.com"
          style={{
            fontSize: 'calc(2rem + 2.5vw)',
          }}
          className="flex items-center font-medium font-neue-montreal "
          onMouseEnter={handleMailIconEnter}
          onMouseLeave={handleMailIconLeave}
        >
          {textSplit.map((text, i) => (
            <span
              key={i}
              className="inline-block pr-5 tracking-wide bg-re-500 tween"
            >
              {text}
            </span>
          ))}
          <MdArrowOutward className="text-white arrow" />{' '}
        </a>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="w-full h-[1px] line bg-white"></div>
        <div className="flex items-center justify-between w-full py-10 sm:flex-col px-14 links">
          <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            {SocialLinks.map((link) => (
              <div key={link.name}>
                <a href={link.url} className="flex items-center gap-3 text-md">
                  <link.icon />
                  <span className="inline-block  tracking-[0.1rem] font-medium font-neue-montreal">
                    {link.name}
                  </span>
                </a>
              </div>
            ))}
          </div>

          <div className="items-center space-y-4 sm:">
            <div className="sm:hidden">
              <span className="inline-block sm:text-xs  tracking-[0.1rem] font-medium font-neue-montreal">
                shiyamrobert@gmail.com
              </span>
            </div>
            <div className="">
              <span className="inline-block sm:text-xs  tracking-[0.1rem] font-medium font-neue-montreal">
                Created by Shiyam Robert
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

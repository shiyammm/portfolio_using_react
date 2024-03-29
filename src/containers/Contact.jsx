import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const Contact = () => {
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

  return (
    <footer
      className="relative w-full h-screen text-white flex-center px-14 contact"
      id="contact"
    >
      <div>
        <a
          href="mailto:shiyamrobert@gmail.com"
          style={{
            fontSize: 'calc(2rem + 2.5vw)',
          }}
          className="flex items-center font-medium font-neue-montreal "
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
        <div className="flex items-center justify-between w-full py-10 px-14 links sm:flex-col sm:gap-4 sm:justify-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-md">
              <SiGithub />
              <span className="inline-block  tracking-[0.1rem] font-medium font-neue-montreal">
                Github
              </span>
            </div>
            <div className="flex items-center gap-3 text-md">
              <FaLinkedin />
              <span className="inline-block  tracking-[0.1rem] font-medium font-neue-montreal">
                LinkedIn
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="">
              <span className="inline-block sm:text-sm  tracking-[0.1rem] font-medium font-neue-montreal">
                Created by Shiyam Robert
              </span>
            </div>
            <div className="">
              <span className="inline-block sm:text-sm  tracking-[0.1rem] font-medium font-neue-montreal">
                shiyamrobert@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

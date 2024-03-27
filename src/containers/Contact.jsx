import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const Contact = () => {
  useGSAP(() => {
    gsap.from('.tween', {
      y: 100,
      opacity: 0,
      duration: 1,
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
  });

  return (
    <footer
      className="relative flex items-end w-full h-screen px-14 contact"
      id="contact"
    >
      <div className="absolute flex-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[60rem] h-[20rem] tween">
        <div className="relative">
          <a href="mailto:shiyamrobert@gmail.com" className="">
            <h4 className="text-[7rem] xl:text-[5rem] md:text-[3rem] font-neue-montreal text-white flex items-center gap-9">
              Let's Connect <MdArrowOutward className="text-white" />
            </h4>
          </a>
        </div>
        <button className="px-3 py-2 xl:py-1 xl:px-2 absolute top-[1rem] md:hidden  right-[6rem] text-lg xl:text-[1rem] font-medium border-[1px] bg-violet hover:bg-violet/90 rounded-full font-circular-medium flex-center cursor-none">
          <span className="inline-block w-4 h-4 mr-2 bg-green-700 rounded-full"></span>
          Open for Opportunities
        </button>
      </div>

      <div className="relative flex items-center justify-between w-full px-10 py-14 md:px-0">
        <div className="absolute top-0 left-0 w-full h-[1px] line bg-white"></div>
        <div className="absolute top-0 left-0 w-full md:hidden h-[1px] line bg-white"></div>
        <ul className="space-y-4 text-xl text-white font-circular-medium md:flex md:space-y-0">
          <li className="flex items-center gap-5">
            <a href="">
              <span className="md:hidden">Github</span>
            </a>
            <SiGithub className="text-white h-7 w-7" />{' '}
          </li>
          <li className="flex items-center gap-5">
            <a href="">
              <span className="md:hidden">LinkedIn</span>
            </a>
            <FaLinkedin className="text-white h-7 w-7" />{' '}
          </li>
        </ul>
        <ul className="space-y-2 text-lg tracking-wider text-center text-white md:text-sm font-neue-montreal">
          <li>Created by Shiyam Robert</li>
          <li>
            <a href="mailto:shiyamrobert@gmail.com">shiyamrobert@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;

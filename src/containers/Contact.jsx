import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useParallax } from 'react-scroll-parallax';

const Contact = () => {
  const { ref } = useParallax({ speed: -1 });

  useGSAP(() => {
    gsap.from('.tween', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 50%',
      },
    });
    gsap.from('.line', {
      width: 0,
      opacity: 0,
      duration: 2.5,
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 50%',
      },
    });
  });

  return (
    <footer
      className="relative flex items-end w-full h-screen px-14 rounded-t-3xl contact"
      ref={ref}
    >
      <div className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[60rem] h-[20rem]">
        <div className="relative">
          <a href="mailto:shiyamrobert@gmail.com" className="">
            <h4 className={`text-[7rem] font-neue-montreal text-white tween`}>
              <span className="">Let's Connect →</span>
            </h4>
          </a>
        </div>
        <button className="px-2 py-1 absolute top-[3rem]  right-[7rem] text-sm font-medium border-[1px] bg-violet hover:bg-violet/70 rounded-2xl font-circular-medium flex justify-center items-center">
          <span className="inline-block w-4 h-4 mr-2 bg-green-700 rounded-full"></span>
          Open for Opportunities
        </button>
      </div>
      <div className="relative flex items-center justify-between w-full px-10 py-14">
        <div className="absolute top-0 left-0 w-full h-[1px] line bg-white"></div>
        <ul className="space-y-4 text-xl text-white font- font-circular-medium">
          <li className="flex items-center gap-5">
            <a href="">Github</a>
            <SiGithub className="text-white h-7 w-7" />{' '}
          </li>
          <li className="flex items-center gap-5">
            <a href="">LinkedIn</a>
            <FaLinkedin className="text-white h-7 w-7" />{' '}
          </li>
        </ul>
        <ul className="space-y-2 text-lg tracking-wider text-center text-white font-neue-montreal">
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

import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const Contact = ({ setLensHover }) => {
  const connectText = "Let's Connect →";

  const connectTextWords = connectText.split('');

  const handleLensEnter = () => {
    setLensHover(true);
  };
  const handleLensLeave = () => {
    setLensHover(false);
  };

  return (
    <div className="relative flex items-end w-full h-screen px-14 rounded-t-3xl contact">
      <a
        href="mailto:shiyamrobert@gmail.com"
        className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >
        <h4
          className={`text-[7rem] font-neue-montreal tracking-tight text-white `}
          onMouseEnter={handleLensEnter}
          onMouseLeave={handleLensLeave}
        >
          {connectTextWords.map((connectTextWord, index) => (
            <span key={index} className={`hover:text-[9rem] hover:text-bold`}>
              {connectTextWord}
            </span>
          ))}
        </h4>
        <button className="px-2 py-1 absolute top-0 right-0 text-sm font-medium border-[1px] bg-violet hover:bg-violet/70 rounded-2xl font-circular-medium flex justify-center items-center">
          <span className="inline-block w-4 h-4 mr-2 bg-green-700 rounded-full"></span>
          Open for Opportunities
        </button>
      </a>
      <div className="flex items-center justify-between w-full px-10 border-t-2 border-white py-14">
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
    </div>
  );
};

export default Contact;

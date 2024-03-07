import React, { useRef } from 'react';
import Title from '../components/Title';
import { skillsData } from '../../lib/data';
import Magnet from '../components/Magnet';

const WhatIUse = ({ setHoverIcon }) => {
  const magnetref = useRef(null);

  const handleHoverIconEnter = () => {
    setHoverIcon(true);
  };

  const handleHoverIconLeave = () => {
    setHoverIcon(false);
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen text-slate-300">
      <Title title="What I use" />
      <div className="flex flex-col space-y-7 items-center justify-center mt-[12rem]">
        <p className="text-center w-[45rem] text-2xl font-circular-book">
          My toolkit comprises front-end essentials: HTML, CSS, and JavaScript,
          with a focus on React.js and Next.js. Proficient in Tailwind and
          Bootstrap for design, and adept in animation libraries like Framer
          Motion and GSAP for user engagement. Skilled in Git and GitHub for
          seamless project management.
        </p>
        <div className="flex gap-5 ">
          <div className="flex flex-col w-[28rem] h-[28rem] items-center justify-center">
            <div className="flex flex-col items-center justify-center p-4 w-96">
              <h2 className="mb-8 text-xl font-circular-medium">Languages</h2>
              <div className="flex gap-x-[5rem]">
                {skillsData.languages.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="z-[100] hover:text-black transition ease-in-out delay-150"
                      onMouseEnter={handleHoverIconEnter}
                      onMouseLeave={handleHoverIconLeave}
                    >
                      <Magnet magnetref={magnetref}>
                        {<skill.img className="w-12 h-12" />}
                        <p className="mt-5 text-xl">{skill.name}</p>
                      </Magnet>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 w-96">
              <h2 className="mb-8 text-xl font-circular-medium">Frameworks</h2>
              <div className="flex gap-x-[5rem]">
                {skillsData.frameworks.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="z-[100] hover:text-black transition ease-in-out delay-150"
                      onMouseEnter={handleHoverIconEnter}
                      onMouseLeave={handleHoverIconLeave}
                    >
                      <Magnet magnetref={magnetref}>
                        {<skill.img className="w-12 h-12" />}
                        <p className="mt-5 text-xl">{skill.name}</p>
                      </Magnet>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-[28rem] h-[28rem] items-center justify-center">
            <div className="flex flex-col items-center justify-center p-4 w-96">
              <h2 className="mb-8 text-xl font-circular-medium">Styling</h2>
              <div className="flex gap-x-[5rem]">
                {skillsData.styling.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="z-[100] hover:text-black transition ease-in-out delay-150"
                      onMouseEnter={handleHoverIconEnter}
                      onMouseLeave={handleHoverIconLeave}
                    >
                      <Magnet magnetref={magnetref}>
                        {<skill.img className="w-12 h-12" />}
                        <p className="mt-5 text-xl">{skill.name}</p>
                      </Magnet>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 w-96">
              <h2 className="mb-8 text-xl font-circular-medium">Animations</h2>
              <div className="flex gap-x-[5rem]">
                {skillsData.animations.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="z-[100] hover:text-black transition ease-in-out delay-150"
                      onMouseEnter={handleHoverIconEnter}
                      onMouseLeave={handleHoverIconLeave}
                    >
                      <Magnet magnetref={magnetref}>
                        {<skill.img className="w-12 h-12" />}
                        <p className="mt-5 text-xl">{skill.name}</p>
                      </Magnet>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIUse;

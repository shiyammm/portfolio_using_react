import React, { useState } from 'react';
import { useRef } from 'react';
import { projectsData } from '../../lib/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Works = ({ cursor, setHoverLink, setHoverText }) => {
  const slider = useRef();
  const component = useRef();
  const h2Ref = useRef();

  const WorkHeadText1 = 'Digital Work';
  const WorkHeadText2 = 'Presentation ';

  const WorkHeadText1Words = WorkHeadText1.split('');
  const WorkHeadText2Words = WorkHeadText2.split('');
  useGSAP(
    () => {
      /* window.innerWidth - to get the initial width of the screen
      scrollWidth - to get the width after finishing the end scroll of the slider
      then subtracting it to how much width to scroll to the x-axis
   */
      function getScrollAmount() {
        let racesWidth = slider.current.scrollWidth;
        return -(racesWidth - window.innerWidth);
      }

      const tweenSlider = gsap.to(slider.current, {
        x: getScrollAmount,
        duration: 4,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: component.current,
        start: 'top 0%',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tweenSlider,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      });

      const tweenHead = gsap.from(['.headText1', '.headText2'], {
        y: -100,
        opacity: 0,
        stagger: 5,
        duration: 5,
        ease: 'power3.inOut',
      });

      ScrollTrigger.create({
        trigger: h2Ref.current,
        start: 'top 60%',
        end: 'top 30%',
        animation: tweenHead,
        scrub: 1,
        // markers: true,
      });

      const handleMouseEnter = () => {
        gsap.to(cursor.current, {
          scale: 1,
          opacity: 1,
        });
      };

      // Add event listeners for mouseenter
      component.current.addEventListener('mouseenter', handleMouseEnter);
    },
    { scope: component },
  );

  const handleHoverLinkEnter = () => {
    setHoverLink(true);
  };

  const handleHoverLinkLeave = () => {
    setHoverLink(false);
  };
  const handleHoverTextEnter = () => {
    setHoverText(true);
  };

  const handleHoverTextLeave = () => {
    setHoverText(false);
  };

  return (
    <section ref={component} className="overflow-hidden bg-[#121315]">
      <div ref={slider} className="flex h-screen w-fit flex-nowrap">
        <div className="flex items-center justify-center w-screen h-screen">
          <h2
            className="text-[15rem] text-[#9b9d9a] uppercase font-BebasNeue-Regular font-medium leading-[13rem] tracking-[0.1rem] text-center"
            ref={h2Ref}
          >
            {WorkHeadText1Words.map((WorkHeadText1Word, index) => (
              <span key={index} className="inline-block headText1">
                {WorkHeadText1Word}
              </span>
            ))}
            <br />
            {WorkHeadText2Words.map((WorkHeadText2Word, index) => (
              <span
                key={index}
                className="text-[#eaeaea] inline-block headText2"
              >
                {WorkHeadText2Word}
              </span>
            ))}
          </h2>
        </div>
        {projectsData.map((project, index) => (
          <div
            className="relative flex items-center justify-center w-screen h-screen space-x-[5rem] text-white"
            key={index}
          >
            <a
              href={`${project.link}`}
              target="blank"
              onMouseEnter={handleHoverLinkEnter}
              onMouseLeave={handleHoverLinkLeave}
            >
              <img
                src={project.imageUrl}
                alt=""
                className={`w-[57rem] h-[40rem] object-cover rounded-[2rem] ${
                  index === 1
                    ? 'object-left'
                    : index === 2
                    ? 'object-[40%]'
                    : ''
                }`}
              />
            </a>
            <div className="h-[40rem] w-[30rem] flex flex-col gap-4">
              <div className="absolute top-[14rem]">
                <span className="text-[8rem] font-BebasNeue-Regular text-[#9b9d9a] leading-[7rem]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[4rem] font-medium font-BebasNeue-Regular text-white">
                  {project.title}
                </h3>
                <div className="space-x-[1rem] pt-[2rem]">
                  {project.tags.map((tech, index) => (
                    <button
                      key={index}
                      className="py-3 text-xl font-medium tracking-[0.1rem] text-white border-2 rounded-xl px-7 border-violet "
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;

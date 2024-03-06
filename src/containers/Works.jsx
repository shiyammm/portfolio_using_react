import React, { useState } from 'react';
import { useRef } from 'react';
import { projectsData } from '../../lib/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ViewSite from '../components/ViewSite';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const [hoverLink, setHoverLink] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  const slider = useRef();
  const component = useRef();
  const cursor = useRef();

  useGSAP(
    () => {
      /* window.innerWidth - to get the initial width of the screen
      scrollWidth - to get the width after finishing the end scroll of the slider
      then subtracting it to how much width to scroll to the x-axis
    */
      function getScrollAmount() {
        let workWidth = slider.current.scrollWidth;
        let innerWidth = window.innerWidth;
        let xOffset = innerWidth * 0.2; // 20% of innerWidth
        let scrollAmount = -(workWidth - innerWidth + xOffset); // Adjusted scroll amount

        return scrollAmount;
      }

      gsap.fromTo(
        slider.current,
        { xPercent: 20 },
        {
          x: getScrollAmount,
          duration: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: component.current,
            start: 'top 0%',
            // "+=" - the starting amount
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            scrub: 1,

            // It'll get the width of the component for every screen-size refresh to be responsive for every devices
            invalidateOnRefresh: true,
            // markers: true,
          },
        },
      );

      const handleMouse = (e) => {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
        });
      };

      const handleMouseEnter = () => {
        gsap.to(cursor.current, {
          scale: 1,
          opacity: 1,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cursor.current, {
          scale: 0,
          opacity: 0,
        });
      };

      // Add event listeners for pointermove, mouseenter, and mouseleave
      const handlers = {
        pointermove: handleMouse,
        mouseenter: handleMouseEnter,
        mouseleave: handleMouseLeave,
      };

      Object.entries(handlers).forEach(([event, handler]) => {
        component.current.addEventListener(event, handler);
      });
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
    <section
      className="relative w-full h-screen overflow-hidden text-white"
      ref={component}
    >
      <div className="absolute z-[99]" ref={cursor}>
        <ViewSite hoverLink={hoverLink} hoverText={hoverText} />
      </div>
      <div className="fixed top-[9rem] text-white font-roslindale-display text-[7rem] left-14 z-[10]">
        <span
          onMouseEnter={handleHoverTextEnter}
          onMouseLeave={handleHoverTextLeave}
        >
          Works →
        </span>
      </div>
      <div className="flex items-end h-screen flex-nowrap work" ref={slider}>
        {projectsData.map((project, index) => (
          <div
            className="flex items-end w-full px-[5rem] py-[3rem] shrink-0 relative border-[em] border-red-500"
            key={index}
          >
            <div className="flex items-center w-full gap-[8rem] border-[em] border-green-500">
              <div
                className="w-1/2 min-h-[30rem]"
                onMouseEnter={handleHoverLinkEnter}
                onMouseLeave={handleHoverLinkLeave}
              >
                <img
                  src={project.imageUrl}
                  className="object-cover object-left w-full h-full transition-all"
                  alt={project.title}
                />
              </div>
              <div
                className="flex flex-col w-1/2 gap-4"
                onMouseEnter={handleHoverTextEnter}
                onMouseLeave={handleHoverTextLeave}
              >
                <h3 className="text-[2rem] uppercase font-circular-book tracking-[0.2rem] font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-xl">{project.description}</p>
                <div>
                  <span className=" text-2xl font-semibold tracking-[0.1rem] font-neue-montreal">
                    Features:
                  </span>
                  <ul className="list-disc text-lg pl-[2rem] py-5 font-circular-book">
                    {project.features.map((features, index) => (
                      <li key={index}>{features}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-5">
                  {project.tags.map((technology, index) => (
                    <span
                      className="px-4 py-2 font-bold text-black rounded-lg bg-cyan"
                      key={index}
                    >
                      {technology}
                    </span>
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

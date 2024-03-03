import React from 'react';
import { useRef } from 'react';
import { projectsData } from '../../lib/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ViewSite from '../components/VIewSite';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const slider = useRef();
  const component = useRef();

  useGSAP(
    () => {
      /* window.innerWidth - to get the initial width of the screen
      scrollWidth - to get the width after finishing the end scroll of the slider
      then subtracting it to how much width to scroll to the x-axis
    */
      function getScrollAmount() {
        let workWidth = slider.current.scrollWidth;
        return -(workWidth - window.innerWidth);
      }

      gsap.to(slider.current, {
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
      });
    },
    { scope: component },
  );

  return (
    <section
      className="relative w-full h-screen overflow-hidden text-white"
      ref={component}
    >
      <ViewSite component="component" />
      <div className="fixed top-[10rem] text-white font-roslindale-display text-[7rem] left-[5rem]">
        <span>Works →</span>
      </div>
      <div className="flex flex-nowrap work w-fit" ref={slider}>
        {projectsData.map((project, index) => (
          <div
            className="flex items-end w-full pb-[5rem] h-screen shrink-0 px-[5rem] relative"
            key={index}
          >
            <div className="flex items-center  gap-[8rem]">
              <div className="w-1/2 h-[30rem]">
                <img
                  src={project.imageUrl}
                  className="object-cover object-left w-full h-full"
                  alt={project.title}
                />
              </div>
              <div className="flex flex-col w-1/2 gap-4">
                <h3 className="text-[2rem] uppercase font-circular-book tracking-[0.2rem] font-bold">
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

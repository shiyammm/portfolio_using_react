import { skillsData } from '../../lib/data';
import { PiStarFourFill } from 'react-icons/pi';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const WhatIUse = () => {
  const skillTextRef = useRef();
  const whatIUseRef = useRef();

  useGSAP(
    () => {
      gsap.from('.title', {
        y: 70,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: whatIUseRef.current,
          start: 'top 40%',
        },
      });
    },
    { scope: whatIUseRef },
  );

  useEffect(() => {
    let skillTextWidth = skillTextRef.current.offsetWidth;
    let windowWidth = window.innerWidth;

    let mouseX = 0;
    let prevMouseX = 0;

    let skewTarget = 0;
    let translateTarget = 0;

    let skewWithEasing = 0;
    let translateWithEasing = 0;

    let skewEasingFactor = 0.1;
    let translateEasingFactor = 0.05;

    const handleMouse = (e) => {
      mouseX = e.pageX;
    };

    const handleWindowResize = (e) => {
      skillTextWidth = skillTextRef.current.offsetWidth;
      windowWidth = window.innerWidth;
    };

    const lerp = (start, end, factor) => {
      return (1 - factor) * start + factor * end;
    };

    const animate = () => {
      skewTarget = mouseX - prevMouseX;
      prevMouseX = mouseX;

      translateTarget =
        ((skillTextWidth - windowWidth) / windowWidth) * mouseX * -1;

      skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);

      skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing), -75), 75);

      translateWithEasing = lerp(
        translateWithEasing,
        translateTarget,
        translateEasingFactor,
      );

      skillTextRef.current.style.transform = `
        translateX(${translateWithEasing}px)
        skewX(${skewWithEasing}deg)
      `;

      window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);

    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('resize', handleWindowResize);
  });

  return (
    <section
      className="relative grid  w-full h-screen overflow-hidden bg-[#fff] py-14 rounded-3xl"
      ref={whatIUseRef}
    >
      <div className="ml-[6rem] text-left text-black mt-[2rem] title">
        <h4 className="text-[7rem] font-medium font-roslindale-display ">
          My Skill Set{' '}
        </h4>
        <p className="text-[1.5rem] font-circular-book text-black/50 w-[40rem] mt-[1rem]">
          Crafting Exceptional Web Experiences with an Array of Essential
          Frontend Tools and Technologies to Deliver Engaging User Interactions
          and Seamless Digital Journeys.{' '}
        </p>
      </div>
      <div className=" skill_container" ref={skillTextRef}>
        <div className="flex flex-nowrap gap-[6rem] bg-violet font-Canopee-Regular skill_text uppercase p-7  font-medium text-black tracking-[0.6rem]">
          {skillsData.map((skill, index) => (
            <span
              className=" flex items-center gap-[3rem] whitespace-nowrap text-[7rem] skill relative will-change-transform "
              key={index}
            >
              <PiStarFourFill className="w-10 h-10 font-Canopee-Regular" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIUse;

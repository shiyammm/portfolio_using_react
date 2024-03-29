import { skillsData } from '../../lib/data';
import { PiStarFourFill } from 'react-icons/pi';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const WhatIUse = () => {
  const skillRef = useRef();
  const skillTextRef = useRef();
  const sliderRef = useRef();

  const ParagraphText =
    'Crafting Exceptional Web Experiences with an Array of Essential Frontend Tools and Technologies to Deliver Engaging User Interactions and Seamless Digital Journeys.';

  const ParagraphWords = ParagraphText.split(' ');

  useGSAP(
    () => {
      gsap.from('.word', {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: skillRef.current,
          start: 'top 40%',
        },
      });
      gsap.from('.options', {
        y: 30,
        opacity: 0,
        duration: 0.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: skillRef.current,
          start: 'top 40%',
        },
      });
    },
    { scope: skillRef },
  );

  useGSAP(() => {
    gsap.to('.arrow-left', {
      x: -10,
      duration: 1,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });
    gsap.to('.arrow-right', {
      x: 10,
      duration: 1,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });
  });

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
      className=" w-full h-screen space-y-[8rem] overflow-hidden py-14"
      ref={skillRef}
    >
      <div className="text-left text-white mt-[2rem] flex items-center justify-center title flex-col space-y-9 ">
        <p className="text-[3rem] text-center  font-roslindale-display text-white/50  mt-[1rem] text-div px-10 skill-para">
          {ParagraphWords.map((ParagraphWord, index) => (
            <span key={index} className="inline-block mr-3 word">
              {ParagraphWord}
            </span>
          ))}
        </p>
        <span className="flex items-center gap-3 text-white/50 font-circular-book options lg:hidden">
          <span className="arrow-left"> ← </span>
          Move your Cursor
          <span className="arrow-right"> → </span>
        </span>
      </div>
      <div className="relative grid w-full lg:hidden " ref={sliderRef}>
        <div className="skill_container" ref={skillTextRef}>
          <div className="flex flex-nowrap gap-[6rem] bg-violet font-Canopee-Regular skill_text uppercase p-7 2xl:p-4 xl:p-2 font-medium text-black tracking-[0.6rem] xl:mt-[3rem]">
            {skillsData.map((skill, index) => (
              <span
                className=" flex items-center gap-[3rem] xl:gap-[2rem] whitespace-nowrap text-[7rem] xl:text-[4rem] skill relative will-change-transform "
                key={index}
              >
                <PiStarFourFill className="w-10 h-10 font-Canopee-Regular" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default WhatIUse;

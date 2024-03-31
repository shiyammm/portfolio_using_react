import { skillsData } from '../../lib/data';
import { PiStarFourFill } from 'react-icons/pi';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const WhatIUse = () => {
  const skillRef = useRef();
  const skillTextRef = useRef();
  const sliderRef = useRef();
  const tl4 = useRef();

  const ParagraphText =
    'Crafting Exceptional Web Experiences with an Array of Essential Frontend Tools and Technologies to Deliver Engaging User Interactions and Seamless Digital Journeys.';

  const ParagraphWords = ParagraphText.split(' ');

  useGSAP(
    () => {
      tl4.current = gsap.timeline();

      tl4.current.from('.word', {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power4.out',
      });

      tl4.current.from('.options', {
        y: 30,
        opacity: 0,
        duration: 0.4,
        ease: 'power4.out',
      });

      tl4.current.from('.icon', {
        scale: 0,
        opacity: 0,
        rotate: 60,
        x: -80,
        stagger: 0.1,
        ease: 'power1.inOut',
      });

      tl4.current.from('.name', {
        scale: 0,
        opacity: 0,
        y: 80,
        ease: 'power1.inOut',
      });

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

      ScrollTrigger.create({
        trigger: skillRef.current,
        start: 'top 40%',
        animation: tl4.current,
      });
    },
    { scope: skillRef },
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
      className=" w-full h-screen space-y-[8rem] xl:space-y-[1rem] overflow-hidden py-14 xl:flex-center flex-col"
      ref={skillRef}
    >
      <div className="text-left text-white mt-[2rem] flex items-center justify-center title flex-col space-y-9 ">
        <p className=" text-center  font-roslindale-display text-white/50  mt-[1rem] text-div px-10 skill-para">
          {ParagraphWords.map((ParagraphWord, index) => (
            <span key={index} className="inline-block mr-3 word">
              {ParagraphWord}
            </span>
          ))}
        </p>
        <span className="flex items-center gap-3 text-white/50 font-circular-book options xl:hidden">
          <span className="arrow-left"> ← </span>
          <span>Move your Cursor</span>
          <span className="arrow-right"> → </span>
        </span>
      </div>
      <div className="relative grid w-full xl:hidden " ref={sliderRef}>
        <div className="skill_container" ref={skillTextRef}>
          <div className="flex flex-nowrap gap-[6rem] bg-violet font-Canopee-Regular skill_text uppercase p-7 2xl:p-4 xl:p-2 font-medium text-black tracking-[0.6rem] xl:mt-[3rem]">
            {skillsData.map((skill, index) => (
              <span
                className=" flex items-center gap-[3rem] xl:gap-[2rem] whitespace-nowrap text-[7rem] xl:text-[4rem] skill relative will-change-transform "
                key={index}
              >
                <PiStarFourFill className="w-10 h-10 font-Canopee-Regular" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex-wrap items-center justify-center hidden px-3 xl:flex"
        style={{
          width: 'calc(24.6rem + 24.6vw)',
          // height: 'calc(20.5rem + 20.5vw)',
          gap: 'calc(1.6rem + 1.6vw)',
        }}
      >
        {skillsData.map((skill, i) => (
          <div
            style={{
              width: 'calc(3.5rem + 3.5vw)',
              height: 'calc(3.5rem + 3.5vw)',
              // boxShadow: '0px 0px 5px 1px  #37EBA9',
              // borderRadius: '50%',
            }}
            key={i}
            className="flex flex-col items-center justify-center gap-5 text-center "
          >
            <skill.icon
              className=" text-white/50 icon"
              style={{
                width: 'calc(2.1rem + 2.1vw)',
                height: 'calc(2.1rem + 2.1vw)',
              }}
            />
            <span
              style={{ fontSize: 'calc(0.7rem + 0.7vw)' }}
              className=" text-white/70 name"
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIUse;

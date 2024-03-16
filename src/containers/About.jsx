import Title from '../components/Title';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { useParallax } from 'react-scroll-parallax';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { ref } = useParallax({ speed: 20 });

  const aboutRef = useRef();

  const Name = 'Hi, this is Shiyam Robert,';

  const Based = 'Based in India, IN';

  const ParagraphText =
    "A passionate front-end developer with a focus on crafting captivating digital experiences. Embracing a love for technology and creativity, I thrive on mastering new tools and techniques to deliver innovative solutions. With expertise in transforming designs into interactive web applications, I ensure seamless user experiences and visually striking interfaces. My attention to detail and commitment to excellence drive me to create compelling websites that leave a lasting impact. Let's collaborate to enhance your digital presence and bring your ideas to life!";

  const NameWords = Name.split(' ');

  const BasedWords = Based.split(' ');

  const ParagraphWords = ParagraphText.split(' ');

  useGSAP(
    () => {
      const tweenWord = gsap.from('.word', {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power4.out',
      });

      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: 'top 50%',
        animation: tweenWord,
        // markers: true,
      });

      const tweenLine = gsap.from('.paragraphDiv', {
        width: 0,
        duration: 1.5,
      });

      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: 'top 50%',
        animation: tweenLine,
        // markers: true,
      });
    },
    { scope: aboutRef },
  );

  return (
    <section
      className="w-full h-screen text-black bg-violet rounded-[2rem] px-[9rem] flex flex-col justify-center"
      ref={(el) => {
        // Assigning the element to both refs
        aboutRef.current = el;
        ref.current = el;
      }}
    >
      <div className="flex justify-between">
        <div>
          <h2 className="text-left text-[2.1rem] leading-[5rem] font-neue-montreal pb-[0.5rem]">
            {NameWords.map((nameWord, index) => (
              <span key={index} className="inline-block word mr-2.5">
                {nameWord}
              </span>
            ))}
          </h2>
        </div>
        <div>
          <h2 className="text-left text-[2rem] leading-[5rem] font-neue-montreal">
            {BasedWords.map((basedWord, index) => (
              <span key={index} className="inline-block mr-2.5 word">
                {basedWord}
              </span>
            ))}
          </h2>
        </div>
      </div>
      <div className="w-full h-[2px] bg-black paragraphDiv"></div>
      <div className="">
        <p className="text-left text-[3.2rem] leading-[5rem] font-neue-montreal pt-[1rem]">
          {ParagraphWords.map((ParagraphWord, index) => (
            <span key={index} className="inline-block mr-3 word">
              {ParagraphWord}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;

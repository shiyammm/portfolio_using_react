import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();

  const Name = 'Hi, this is Shiyam Robert,';

  const Based = 'Based in India, IN';

  const ParagraphText1 =
    "A passionate front-end developer with a focus on crafting captivating digital experiences. Embracing a love for technology and creativity, I thrive on mastering new tools and techniques to deliver innovative solutions. With expertise in transforming designs into interactive web applications, I ensure seamless user experiences and visually striking interfaces. My attention to detail and commitment to excellence drive me to create compelling websites that leave a lasting impact. Let's collaborate to enhance your digital presence and bring your ideas to life!";
  const ParagraphText2 =
    "Hey there! 👋 As a dedicated front-end developer, I'm all about creating amazing digital experiences that truly stand out. I'm super passionate about technology and creativity, and I'm always excited to learn new tools and techniques to bring fresh ideas to life. I specialize in turning designs into interactive web apps that not only look fantastic but also provide seamless user experiences. Attention to detail and a commitment to excellence are my jam, and I love nothing more than crafting websites that leave a lasting impression. Let's team up and make your online presence shine! ";

  const NameWords = Name.split(' ');

  const BasedWords = Based.split(' ');

  const ParagraphWords1 = ParagraphText1.split(' ');
  const ParagraphWords2 = ParagraphText2.split(' ');

  useGSAP(
    () => {
      const aboutAnim = gsap.from(aboutRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.5,
        ease: 'power.out',
      });

      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: 'top 80%',
        animation: aboutAnim,
        // markers: true,
      });
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
      const tweenSmallWord = gsap.from('.small-screen-word', {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power4.out',
      });

      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: 'top 80%',
        animation: tweenSmallWord,
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
      className="w-full h-screen text-white/70 bg-[#121315] rounded-[2rem] flex flex-col justify-start about"
      ref={(el) => {
        aboutRef.current = el;
        // ref.current = el;
      }}
    >
      <div className="px-[9rem] py-[9rem] xl:px-[4rem] xl:py-[4rem] md:hidden">
        <div className="flex justify-between ">
          <div>
            <h2
              style={{
                fontSize: 'calc(0.9rem + 1vw)',
                lineHeight: 'calc(3rem + 2vw)',
              }}
              className="text-left font-neue-montreal pb-[0.5rem] about-head"
            >
              {NameWords.map((nameWord, index) => (
                <span key={index} className="inline-block word mr-2.5">
                  {nameWord}
                </span>
              ))}
            </h2>
          </div>
          <div>
            <h2
              style={{
                fontSize: 'calc(0.9rem + 1vw)',
                lineHeight: 'calc(3rem + 2vw)',
              }}
              className="text-left font-neue-montreal about-head"
            >
              {BasedWords.map((basedWord, index) => (
                <span key={index} className="inline-block mr-2.5 word">
                  {basedWord}
                </span>
              ))}
            </h2>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white/70 paragraphDiv md:hidden"></div>
        <div className="">
          <p
            className="text-left font-neue-montreal pt-[1rem] about-para md:hidden"
            style={{
              fontSize: 'calc(0.8rem + 1vw)',
              lineHeight: 'calc(1rem + 3vw)',
            }}
          >
            {ParagraphWords1.map((ParagraphWord1, index) => (
              <span key={index} className="inline-block mr-3 word">
                {ParagraphWord1}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="hidden p-14 xs:p-7 sm:p-10 md:block">
        <p
          className="text-left font-neue-montreal about-para "
          style={{
            fontSize: 'calc(0.8rem + 1vw)',
            lineHeight: 'calc(1rem + 3vw)',
          }}
        >
          {ParagraphWords2.map((ParagraphWord2, index) => (
            <span
              key={index}
              className="inline-block mr-3 xs:mr-2 small-screen-word"
            >
              {ParagraphWord2}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;

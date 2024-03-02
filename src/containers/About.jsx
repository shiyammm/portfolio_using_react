import Title from '../components/Title';
import React from 'react';

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen text-white bg-gray">
      <div className="absolute top-10">
        <Title title="About" />
      </div>
      <p className="text-center text-[2.5rem] font-neue-montreal w-[75rem] mt-[8rem] leading-[4rem]">
        Hi, this is <span className="font-gtApina">Shiyam Robert </span>, a
        passionate <span className="font-gtApina"> front-end developer</span>{' '}
        with a focus on crafting captivating digital experiences. Embracing a
        love for technology and creativity, I thrive on mastering new tools and
        techniques to deliver innovative solutions. With expertise in
        transforming designs into interactive web applications, I ensure
        seamless user experiences and visually striking interfaces. My attention
        to detail and commitment to excellence drive me to create compelling
        websites that leave a lasting impact. Let's collaborate to enhance your
        digital presence and bring your ideas to life!"
      </p>
    </div>
  );
};

export default About;

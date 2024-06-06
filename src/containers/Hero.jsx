import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = ({ tl1, navLoaderRef }) => {
  useGSAP(() => {
    tl1.current = gsap
      .timeline()
      .from('.word-1', {
        opacity: 0,
        skewX: '-20deg',
        duration: 0.7,
        ease: 'expo.out',
        delay: 0.3,
      })
      .from('.word-2', {
        opacity: 0,
        skewX: '20deg',
        duration: 0.7,
        ease: 'expo.out',
      })
      .from('.word-3', {
        opacity: 0,
        skewX: '-15deg',
        duration: 0.7,
        ease: 'expo.out',
      })
      .from('.word-4', {
        opacity: 0,
        skewX: '15deg',
        duration: 0.7,
        ease: 'expo.out',
      })
      .from('.secondPara', {
        y: 20,
        opacity: 0,
        ease: 'power4.out',
      })
      .from(navLoaderRef.current, {
        y: -10,
        opacity: 0,
      });
  });

  return (
    <section
      className="relative z-10 w-full h-screen flex-center hero"
      id="Home"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas>
          <Stars radius={50} count={500} factor={4} fade speed={0.5} />
        </Canvas>
      </div>
      <div id="heroText">
        <h1
          className="tracking-wider text-center font-Canopee-Regular"
          style={{
            lineHeight: 'calc(2rem + 3vw)',
          }}
        >
          <span
            className="text-white word-1 "
            style={{
              fontSize: 'calc(2rem + 4vw)',
              marginRight: 'calc(1rem + 0.5vw)',
            }}
          >
            Let's
          </span>
          {'  '}
          <span
            className="text-white word-2 "
            style={{
              fontSize: 'calc(2rem + 4vw)',
              marginRight: 'calc(1rem + 0.5vw)',
            }}
          >
            Create
          </span>
          <br />
          <span
            className=" word-3 text-cyan"
            style={{
              fontSize: 'calc(2rem + 4vw)',
              marginRight: 'calc(1rem + 0.5vw)',
            }}
          >
            Awesome
          </span>
          <span
            className="text-white word-4 "
            style={{
              fontSize: 'calc(2rem + 4vw)',
              marginRight: 'calc(1rem + 0.5vw)',
            }}
          >
            Work!{' '}
          </span>
        </h1>
        <span
          className="flex justify-center mt-5 text-white font-circular-book secondPara"
          style={{
            fontSize: 'calc(0.5rem + 1vw)',
            marginTop: 'calc(0.3rem + 0.5vw)',
          }}
        >
          Nurturing Curiosity, Igniting Learning{' '}
        </span>
      </div>
    </section>
  );
};

export default Hero;

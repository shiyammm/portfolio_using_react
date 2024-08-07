import React, { useState, useRef, useContext, useEffect } from 'react';
import { projectsData } from '../../lib/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import TiltImage from '../components/TiltImage';
import { FiExternalLink } from 'react-icons/fi';
import { GlobalContext } from '../../context/GlobalContext';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const { cursor, setHoverLink } = useContext(GlobalContext);

  const [activeImg, setActiveImg] = useState(null);
  const slider = useRef();
  const component = useRef();
  const h2Ref = useRef();
  const projectsSmallScreenDiv = useRef();
  const tl3 = useRef();

  const WorkHeadText1 = 'Digital';
  const WorkHeadText2 = 'work';
  const WorkHeadText3 = 'Presentation';

  const WorkHeadText1Words = WorkHeadText1.split('');
  const WorkHeadText2Words = WorkHeadText2.split('');
  const WorkHeadText3Words = WorkHeadText3.split('');

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

  //Scroll Animation for small devices

  useGSAP(
    () => {
      tl3.current = gsap
        .timeline()
        .from('.works-title', {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power.in',
        })
        .from('#project-1', {
          x: -500,
          opacity: 0,
          duration: 0.7,
          ease: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        })
        .from('#project-2', {
          x: 500,
          opacity: 0,
          duration: 0.7,
          ease: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        })
        .from('#project-3', {
          x: -500,
          opacity: 0,
          duration: 0.7,
          ease: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        })
        .from('#project-4', {
          x: 500,
          opacity: 0,
          duration: 0.7,
          ease: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        });

      ScrollTrigger.create({
        trigger: projectsSmallScreenDiv.current,
        // markers: true,
        start: 'top 60%',
        end: 'top 90%',
        animation: tl3.current,
      });
    },
    { scope: projectsSmallScreenDiv },
  );

  const isMd = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    // Ensure only one section is focused on navigation
    if (isMd) {
      component.current.removeAttribute('id');
      projectsSmallScreenDiv.current.setAttribute('id', 'Works');
    } else {
      component.current.setAttribute('id', 'Works');
      projectsSmallScreenDiv.current.removeAttribute('id');
    }
  }, [isMd]);

  const handleHoverLinkEnter = () => {
    setHoverLink(true);
  };

  const handleHoverLinkLeave = () => {
    setHoverLink(false);
  };
  const handleMouseClick = (i) => {
    setActiveImg((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <section
        ref={component}
        className="overflow-hidden xl:hidden"
        id={isMd ? '' : 'Works'}
      >
        <div ref={slider} className="flex h-screen w-fit flex-nowrap ">
          <div className="w-screen h-screen flex-center">
            <h2
              style={{
                fontSize: 'calc(6.8rem + 6.8vw)',
                lineHeight: 'calc(6rem + 6vw)',
              }}
              className=" text-[#9b9d9a] uppercase font-BebasNeue-Regular font-medium tracking-[0.1rem] text-center"
              ref={h2Ref}
            >
              {WorkHeadText1Words.map((WorkHeadText1Word, index) => (
                <span key={index} className="inline-block headText1">
                  {WorkHeadText1Word}
                </span>
              ))}{' '}
              {WorkHeadText2Words.map((WorkHeadText2Word, index) => (
                <span key={index} className="inline-block headText1">
                  {WorkHeadText2Word}
                </span>
              ))}
              <br />
              {WorkHeadText3Words.map((WorkHeadText3Word, index) => (
                <span
                  key={index}
                  className="text-[#eaeaea] inline-block headText2"
                >
                  {WorkHeadText3Word}
                </span>
              ))}
            </h2>
          </div>
          {projectsData.map((project, index) => (
            <div
              className="flex-center w-screen h-screen space-x-[5rem] text-white"
              key={index}
            >
              <a
                href={`${project.url}`}
                key={index}
                className="relative image"
                target="blank"
                onMouseEnter={handleHoverLinkEnter}
                onMouseLeave={handleHoverLinkLeave}
                id={`desktop-project-image-${index + 1}`}
              >
                <TiltImage
                  projectImage={project.imageUrl}
                  projectLink={project.url}
                  setHoverLink={setHoverLink}
                  index={index}
                />
              </a>
              <div
                style={{
                  width: 'calc(14.5rem + 14.5vw)',
                  height: 'calc(17.5rem + 17.5vw)',
                }}
                className="h-[40rem] flex flex-col gap-4 relative"
                id={`desktop-project-data-${index + 1}`}
              >
                <div className="absolute bottom-[5rem]">
                  <span
                    style={{ fontSize: 'calc(4rem + 4vw)' }}
                    className="font-bold font-BebasNeue-Regular text-[#9b9d9a] leading-[7rem]"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{ fontSize: 'calc(1.8rem + 1.8vw)' }}
                    className="font-medium text-white font-BebasNeue-Regular"
                  >
                    {project.title}
                  </h3>
                  <div className="space-x-[1rem] pt-[1rem]">
                    {project.tags.map((tech, index) => (
                      <button key={index} className="">
                        <span
                          className="py-3 font-medium tracking-[0.1rem] text-white border-[1px] rounded-xl px-6 2xl:px-4"
                          style={{
                            fontSize: 'calc(0.5rem + 0.5vw)',
                          }}
                        >
                          {tech}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="relative items-center justify-center hidden w-full h-screen px-6 text-white xl:flex works-mob"
        ref={projectsSmallScreenDiv}
        id={isMd ? 'Works' : ''}
      >
        <h1
          style={{
            fontSize: 'calc(2.5rem + 2.5vw)',
          }}
          className="absolute text-white -translate-x-1/2 top-14 xl:top-1 font-Canopee-Regular left-1/2 works-title"
        >
          Works
        </h1>
        <div className="mt-20 space-y-4">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl project-div"
              id={`project-${i + 1}`}
              onClick={() => handleMouseClick(i)}
            >
              <img
                style={{
                  width: 'calc(25.5rem + 25.5vw)',
                  height:
                    activeImg === i
                      ? 'calc(11.5rem + 11.5vw)'
                      : 'calc(4.5rem + 4.5vw)',
                }}
                className={`object-cover ${
                  activeImg === i
                    ? ' transition-all object-center overflow-hidden'
                    : ''
                } `}
                id={`img-${i + 1}`}
                src={project.imageUrl}
                alt={project.title}
              />
              <div
                className={`absolute flex  w-full h-full -translate-x-1/2 -translate-y-1/2 shadow-sm rounded-2xl bg-black/10 top-1/2 left-1/2 ${
                  activeImg === i
                    ? 'bg-black/10 justify-start items-end'
                    : 'items-center justify-center'
                }`}
              >
                <div
                  className={`flex w-full h-44 bg-black/50 flex-col space-y-6 ${
                    activeImg === i
                      ? 'justify-start items-start p-10'
                      : 'justify-center items-center'
                  } `}
                >
                  <span
                    className={`text-xl font-semibold tracking-wider text-left text-white opacity-100 font-neue-montreal ${
                      activeImg === i ? 'hidden' : 'block'
                    } `}
                  >
                    {project.title}
                  </span>
                  <span
                    className={`text-xl font-semibold tracking-wider text-left text-white opacity-100 font-neue-montreal  ${
                      activeImg === i ? 'flex items-center gap-5' : 'hidden'
                    } `}
                  >
                    {project.title}
                    <a href={project.url} target="_blank">
                      <FiExternalLink />
                    </a>
                  </span>

                  <span
                    className={`${
                      activeImg == i ? 'block' : 'hidden '
                    } text-sm font-neue-montreal flex gap-4`}
                  >
                    {project.tags.map((tech, index) => (
                      <button key={index} className="">
                        <span
                          className=" font-medium tracking-wider bg-[#454545] rounded-2xl"
                          style={{
                            paddingInline: 'calc(0.5rem + 0.5vw)',
                            paddingBlock: 'calc(0.2rem + 0.2vw)',
                            fontSize: 'calc(0.6rem + 0.6vw)',
                          }}
                        >
                          {tech}
                        </span>
                      </button>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;

import RestCountries from '../src/assets/images/CountryInsight.webp';
import PriceWhiz from '../src/assets/images/PriceWhiz.webp';
import Metaverse from '../src/assets/images/MetaverseMadness.webp';
import Bank from '../src/assets/images/bank.webp';
import { ImHtmlFive } from 'react-icons/im';
import {
  SiCss3,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiFramer,
  SiTailwindcss,
  SiGreensock,
} from 'react-icons/si';
import { FaLinkedin, FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsBootstrapFill } from 'react-icons/bs';

export const NavLinks = ['Home', 'Works', 'Contact', 'CV'];

export const SocialLinks = [
  { name: 'Github', icon: SiGithub, url: 'https://github.com/shiyammm' },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/shiyam-robert/',
  },
];

export const projectsData = [
  {
    title: 'Metaverse Madness UI/UX',
    description: `
    Rest Countries is a dynamic web application enabling users to explore countries worldwide, featuring a dark and light theme toggle for personalized viewing and seamless integration with external APIs for comprehensive country information.`,
    features: [
      'Dark and Light Theme Toggle',
      'Region Filtering',
      'Seamless Integration with External APIs',
    ],
    tags: ['HTML', 'CSS', 'NextJS', 'Tailwind'],
    url: 'https://metaverse-madnesss.vercel.app/',
    imageUrl: Metaverse,
  },

  {
    title: 'Price Whiz',
    description: `
    The Restaurant UI is a visually stunning website presenting an immersive interface for restaurant exploration, offering captivating design elements and seamless navigation for an exceptional dining experience.`,
    features: [
      'Visually Stunning Design',
      'Immersive Interface',
      'Seamless Navigation',
    ],
    tags: ['HTML', 'CSS', 'Next JS', 'Tailwind'],
    url: 'https://pricewhiz.vercel.app/',
    imageUrl: PriceWhiz,
  },
  {
    title: 'Country Insight',
    description: `
    Country Insight is a dynamic web application enabling users to explore countries worldwide, featuring a dark and light theme toggle for personalized viewing and seamless integration with external APIs for comprehensive country information.`,
    features: [
      'Dark and Light Theme Toggle',
      'Region Filtering',
      'Seamless Integration with External APIs',
    ],
    tags: ['HTML', 'CSS', 'NextJS', 'Tailwind'],
    url: 'https://country-insight-one.vercel.app/',
    imageUrl: RestCountries,
  },
  {
    title: 'Modern Bank UI/UX',
    description: `
    The Restaurant UI is a visually stunning website presenting an immersive interface for restaurant exploration, offering captivating design elements and seamless navigation for an exceptional dining experience.`,
    features: [
      'Visually Stunning Design',
      'Immersive Interface',
      'Seamless Navigation',
    ],
    tags: ['HTML', 'CSS', 'React', 'Tailwind'],
    url: 'https://modern-bank-app-react.vercel.app/',
    imageUrl: Bank,
  },
];

export const skillsData = [
  { name: 'HTML', icon: ImHtmlFive },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React JS', icon: FaReact },
  { name: 'Next JS', icon: TbBrandNextjs },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: BsBootstrapFill },
  { name: 'Framer motion', icon: SiFramer },
  { name: 'GSAP', icon: SiGreensock },
];

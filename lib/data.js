import RestCountries from '../src/assets/images/Restcountries.png';
import Restaurant from '../src/assets/images/Restaurant.png';
import Metaverse from '../src/assets/images/metaverse.png';
import Bank from '../src/assets/images/bank.png';
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiGreensock } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';

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
    tags: ['HTML', 'CSS', 'React', 'Tailwind'],
    link: 'https://metaverse-madness-react.netlify.app/',
    imageUrl: Metaverse,
  },

  {
    title: 'Restaurant UI/UX',
    description: `
    The Restaurant UI is a visually stunning website presenting an immersive interface for restaurant exploration, offering captivating design elements and seamless navigation for an exceptional dining experience.`,
    features: [
      'Visually Stunning Design',
      'Immersive Interface',
      'Seamless Navigation',
    ],
    tags: ['HTML', 'CSS', 'React', 'Tailwind'],
    link: 'https://restaurant-app01.netlify.app/',
    imageUrl: Restaurant,
  },
  {
    title: 'Rest Countries API',
    description: `
    Rest Countries is a dynamic web application enabling users to explore countries worldwide, featuring a dark and light theme toggle for personalized viewing and seamless integration with external APIs for comprehensive country information.`,
    features: [
      'Dark and Light Theme Toggle',
      'Region Filtering',
      'Seamless Integration with External APIs',
    ],
    tags: ['HTML', 'CSS', 'React', 'Tailwind'],
    link: 'https://get-countries-api-with-theme-switcher.netlify.app/',
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
    link: 'https://modernbankwithai.netlify.app/',
    imageUrl: Bank,
  },
];

export const skillsData = {
  languages: [
    { name: 'HTML', img: ImHtmlFive },
    { name: 'JavaScript', img: SiJavascript },
    { name: 'TypeScript', img: SiTypescript },
  ],
  styling: [
    { name: 'CSS', img: SiCss3 },
    { name: 'Tailwind', img: SiTailwindcss },
    { name: 'Bootstrap', img: BsBootstrapFill },
  ],
  frameworks: [
    { name: 'React JS', img: FaReact },
    { name: 'NextJS', img: TbBrandNextjs },
  ],
  animations: [
    { name: 'Framer Motion', img: SiFramer },
    { name: 'GSAP', img: SiGreensock },
  ],
};

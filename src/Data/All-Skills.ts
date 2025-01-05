import { IconType } from 'react-icons';
import { 
  SiJavascript, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFigma, 
  SiMongodb, 
  SiGithub, 
  SiFirebase, 
  SiMui,
  SiPython, 
  SiSolidity, 
  SiNextdotjs,
  SiRecoil 
} from 'react-icons/si';

export interface Skills {
    name: string;
    logo: IconType;
    position: { x: number; y: number };
    size: number;
    color: string;
}

export const allSkills: Skills[] = [
  {
    name: 'JavaScript',
    logo: SiJavascript,
    position: { x: 10, y: 85 },
    size: 31,
    color: '#f5a442',
  },
  {
    name: 'React',
    logo: SiReact,
    position: { x: 85, y: 40 },
    size: 39,
    color: '#61DAFB',
  },
  {
    name: 'TypeScript',
    logo: SiTypescript,
    position: { x: 60, y: 45 },
    size: 33,
    color: '#3178C6',
  },
  {
    name: 'Tailwind',
    logo: SiTailwindcss,
    position: { x: 72, y: 83 },
    size: 35,
    color: '#06B6D4',
  },
  {
    name: 'Node.js',
    logo: SiNodedotjs,
    position: { x: 15, y: 70 },
    size: 41,
    color: '#339933',
  },
  {
    name: 'Figma',
    logo: SiFigma,
    position: { x: 5, y: 37 },
    size: 44,
    color: '#F24E1E',
  },
  {
    name: 'MongoDB',
    logo: SiMongodb,
    position: { x: 37, y: 8 },
    size: 43,
    color: '#47A248',
  },
  {
    name: 'Git and GitHub',
    logo: SiGithub,
    position: { x: 30, y: 45 },
    size: 30,
    color: '#181717',
  },
  {
    name: 'Firebase',
    logo: SiFirebase,
    position: { x: 58, y: 73 },
    size: 37,
    color: '#f58000',
  },
  {
    name: 'MUI',
    logo: SiMui,
    position: { x: 50, y: 20 },
    size: 35,
    color: '#007FFF',
  },
  {
    name: 'Python',
    logo: SiPython,
    position: { x: 15, y: 15 },
    size: 38,
    color: '#3776AB',
  },
  {
    name: 'Solidity',
    logo: SiSolidity,
    position: { x: 87, y: 85 },
    size: 28,
    color: '#363636',
  },
  {
    name: 'Next.js',
    logo: SiNextdotjs,
    position: { x: 70, y: 15 },
    size: 40,
    color: '#000000',
  },
  {
    name: 'Recoil',
    logo: SiRecoil,
    position: { x: 35, y: 80 },
    size: 30,
    color: '#3578E5',
  },
];


// import * as Icons from 'react-icons/si';

// const IconComponent = (iconName) => {
//   const Icon = Icons[iconName];
//   return Icon ? <Icon /> : null;
// };

// const SkillComponent = ({ skill }) => {
//   return (
//     <div>
//       <h3>{skill.name}</h3>
//       {IconComponent(skill.logo)} {/* Render the logo */}
//       <p>Size: {skill.size}</p>
//       <p>Position: {`x: ${skill.position.x}, y: ${skill.position.y}`}</p>
//       <p>Color: {skill.color}</p>
//     </div>
//   );
// };

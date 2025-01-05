import { IconType } from "react-icons";
import { FaJs, FaPython, FaReact } from "react-icons/fa";
import MyComputerimg from '@/../public/My_Computer.png'
import { StaticImageData } from "next/image";

export interface IProject {
  name: string;
  logo: IconType;
  description: string;
  link: string;
  color: string;
  image : StaticImageData;
}

export const ProjectsData: IProject[] = [
  {
    name: "Project 1",
    logo: FaReact,
    description: "This is a description of project 1 This is a description of project 1 This is a description of project 1 This is a description of project 1 This is a description of project 1 This is a description of project 1 ",
    link: "https://www.example.com",
    color: "#FF69B4",
    image : MyComputerimg,
  },
  {
    name: "Project 2",
    logo: FaPython,
    description: "This is a description of project 2",
    link: "https://www.example.com",
    color: "#008000",
    image : MyComputerimg,
  },
  {
    name: "Project 3",
    logo: FaJs,
    description: "This is a description of project 3",
    link: "https://www.example.com",
    color: "#0000FF",
    image : MyComputerimg,
  },
  {
    name: "Project 4",
    logo: FaReact,
    description: "This is a description of project 1",
    link: "https://www.example.com",
    color: "#FF69B4",
    image : MyComputerimg,
  },
  {
    name: "Project 5",
    logo: FaPython,
    description: "This is a description of project 2",
    link: "https://www.example.com",
    color: "#008000",
    image : MyComputerimg,
  },
  {
    name: "Project 6",
    logo: FaJs,
    description: "This is a description of project 3",
    link: "https://www.example.com",
    color: "#0000FF",
    image : MyComputerimg,
  },
];

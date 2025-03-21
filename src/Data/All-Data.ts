import Help_and_Support from '@/../public/Help_and_Support.webp';
import CMD_img from "@/../public/Command_Prompt.webp";
import ClosedFolder from '@/../public/Folder_Closed.webp';
import OpenedFolder from '@/../public/Folder_Opened.webp';
import MyComputerimg from '@/../public/My_Computer.webp';
import AboutMe from "@/Pages/AboutMe";
import LetsConnect from "@/Pages/LetsConnect";
import SkillSet from '@/Pages/SkillsPage';
import MyComputer from '@/Pages/MyComputer';
import CMD from '@/Components/Tabs/CMD';
import Experience from '@/Pages/Experience';
import Projects from '@/Pages/Projects';
import React from "react";
import { StaticImageData } from "next/image";
import InfoTabs from "@/Pages/InfoTabs";

export interface AllFoldersProps {
    title: string;
    IconClose: StaticImageData;
    IconOpen: StaticImageData;
    Component: React.ComponentType<any>;
    Tab: 'SimpleTab' | 'ErrorTab' | 'CMD';
    list ?: AllFoldersProps[];
    description ?: String;
    Position : {x : number, y : number}
    Size : {w : number, h : number}
}

// Helper function to generate random positions between 1 and 150
const getRandomPosition = () => ({
    x: Math.floor(Math.random() * 200) + 500,
    y: Math.floor(Math.random() * 150) + 1,
});

export const AllFolders: AllFoldersProps[] = [
    {
        title: "Let's Connect",
        IconClose: ClosedFolder,
        IconOpen: OpenedFolder,
        Component: LetsConnect,
        Tab: "SimpleTab",
        Position : getRandomPosition(),
        Size : {w : 800, h : 500},
    },
    {
        title: "My Computer",
        IconClose: MyComputerimg,
        IconOpen: MyComputerimg,
        Component: MyComputer,
        Tab: "SimpleTab", // All use SimpleTab
        Position : getRandomPosition(),
        Size : {w : 800, h : 500},

    },
    {
        title: "Skill Set",
        IconClose: ClosedFolder,
        IconOpen: OpenedFolder,
        Component: SkillSet,
        Tab: "SimpleTab", // All use SimpleTab
        Position : getRandomPosition(),
        Size : {w : 800, h : 500},

    },
    {
        title: "Help",
        IconClose: Help_and_Support,
        IconOpen: Help_and_Support,
        Component: InfoTabs,
        Tab: "SimpleTab", 
        Position : getRandomPosition(),
        Size : {w : 800, h : 500},

    },
    {
        title: "CMD",
        IconClose: CMD_img,
        IconOpen: CMD_img,
        Component: CMD,
        Tab: "CMD", // All use SimpleTab
        Position : getRandomPosition(),
        Size : {w : 800, h : 500},

    },
    {
        title: "Experience",
        IconClose: ClosedFolder,
        IconOpen: OpenedFolder,
        Component: Experience,
        Tab: "SimpleTab", // All use SimpleTab
        Position : getRandomPosition(),
        Size : {w : 800, h : 500},

    },
    {
        title: "Projects",
        IconClose: ClosedFolder,
        IconOpen: OpenedFolder,
        Component: Projects,
        Tab: "SimpleTab", // All use SimpleTab
        Position : getRandomPosition(),
        Size : {w : 800, h : 500},

    },
    {
        title: "About Me",
        IconClose: ClosedFolder,
        IconOpen: OpenedFolder,
        Component: AboutMe,
        Tab: "SimpleTab", // All use SimpleTab
        Position : getRandomPosition(),
        Size : {w : 800, h : 500},
    },
];

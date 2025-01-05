import { IconType } from "react-icons";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { LuAppWindow } from "react-icons/lu";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { BiSolidError } from "react-icons/bi";
import { MdOutlineTab } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { GiLoveMystery } from "react-icons/gi";
import { GiEasterEgg } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { TbInfoSquareFilled } from "react-icons/tb";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { SiNounproject } from "react-icons/si";
import { TfiTarget } from "react-icons/tfi";

export const baseurl = "https://github.com/ikshit264/Portfolio";

interface DirectoryItem {
  title: string;
  type: "file" | "folder";
  link?: string;
  children?: DirectoryItem[];
  images?: IconType[];
}

const portfolioStructure: DirectoryItem = {
  title: "tree/main",
  type: "folder",
  children: [
    { title: "README.md", type: "file", link: "/blob/main/README.md" },
    {
      title: "components.json",
      type: "file",
      link: "/blob/main/components.json",
    },
    {
      title: "next.config.mjs",
      type: "file",
      link: "/blob/main/next.config.mjs",
    },
    { title: "package.json", type: "file", link: "/blob/main/package.json" },
    {
      title: "postcss.config.mjs",
      type: "file",
      link: "/blob/main/postcss.config.mjs",
    },
    {
      title: "tailwind.config.ts",
      type: "file",
      link: "/blob/main/tailwind.config.ts",
    },
    { title: "tsconfig.json", type: "file", link: "/blob/main/tsconfig.json" },
    {
      title: ".eslintrc.json",
      type: "file",
      link: "/blob/main/.eslintrc.json",
    },
    {
      title: "public",
      type: "folder",
      children: [
        { title: "bg_img", type: "folder", link: "/tree/main/public/bg_img" },
        { title: "videos", type: "folder", link: "/tree/main/public/videos" },
      ],
    },
    {
      title: "src",
      type: "folder",
      children: [
        {
          title: "Components",
          type: "folder",
          children: [
            {
              title: "ParentComponent.tsx",
              type: "file",
              link: "/tree/main/src/Components/ParentComponent.tsx",
            },
            {
              title: "FutureUseComponents",
              type: "folder",
              children: [
                {
                  title: "FolderContent.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/FutureUseComponents/FolderContent.tsx",
                },
                {
                  title: "GetSiteCount.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/FutureUseComponents/GetSiteCount.tsx",
                },
              ],
            },
            {
              title: "PageComponents",
              type: "folder",
              children: [
                {
                  title: "Experience.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/PageComponents/Experience.tsx",
                },
                {
                  title: "Projects.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/PageComponents/Projects.tsx",
                },
                {
                  title: "SkillSet.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/PageComponents/SkillSet.tsx",
                },
              ],
            },
            {
              title: "Tabs",
              type: "folder",
              children: [
                {
                  title: "CMD.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/Tabs/CMD.tsx",
                },
                {
                  title: "ErrorTab.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/Tabs/ErrorTab.tsx",
                },
                {
                  title: "SimpleTab.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/Tabs/SimpleTab.tsx",
                },
              ],
            },
            {
              title: "common",
              type: "folder",
              children: [
                {
                  title: "Icon_React.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/common/Icon_React.tsx",
                },
                {
                  title: "MyContent.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/common/MyContent.tsx",
                },
                {
                  title: "RightClicked.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/common/RightClicked.tsx",
                },
                {
                  title: "Template.tsx",
                  type: "file",
                  link: "/tree/main/src/Components/common/Template.tsx",
                },
                {
                  title: "Navbar",
                  type: "folder",
                  children: [
                    {
                      title: "AddressTab.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/Navbar/AddressTab.tsx",
                    },
                    {
                      title: "Content.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/Navbar/Content.tsx",
                    },
                    {
                      title: "Interactions.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/Navbar/Interactions.tsx",
                    },
                    {
                      title: "NavBar.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/Navbar/NavBar.tsx",
                    },
                    {
                      title: "NavComp.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/Navbar/NavComp.tsx",
                    },
                    {
                      title: "TopControls.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/Navbar/TopControls.tsx",
                    },
                  ],
                },
                {
                  title: "TaskBar",
                  type: "folder",
                  children: [
                    {
                      title: "AllOpenTabs.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/AllOpenTabs.tsx",
                    },
                    {
                      title: "Divider.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/Divider.tsx",
                    },
                    {
                      title: "LittleInfo.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/LittleInfo.tsx",
                    },
                    {
                      title: "LoggingEffect.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/LoggingEffect.tsx",
                    },
                    {
                      title: "MenuItem.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/MenuItem.tsx",
                    },
                    {
                      title: "OpenTab.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/OpenTab.tsx",
                    },
                    {
                      title: "ScreenSaver.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/ScreenSaver.tsx",
                    },
                    {
                      title: "ShutDownEffect.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/ShutDownEffect.tsx",
                    },
                    {
                      title: "StartButton.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/StartButton.tsx",
                    },
                    {
                      title: "StartComponents.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/StartComponents.tsx",
                    },
                    {
                      title: "StartMenu.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/StartMenu.tsx",
                    },
                    {
                      title: "SubMenu.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/SubMenu.tsx",
                    },
                    {
                      title: "TaskBarRHS.tsx",
                      type: "file",
                      link: "/tree/main/src/Components/common/TaskBar/TaskBarRHS.tsx",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const Info = [
  {
    Title: "Overview",
    points: [
      "Welcome to My Portfolio! This site is designed to provide an intuitive and engaging user experience. My primary goal is to offer a comprehensive resource where users can access various functionalities and information seamlessly. The site features a modern and user-friendly interface, built with the latest technologies to ensure high performance and responsiveness.",
      "Key Features:",
      "- User-Friendly Interface: Easy navigation and interaction.",
      "- Responsive Design: Optimized for both desktop and mobile devices.",
      "- Performance: Fast loading times and smooth interactions.",
    ],
    directory_struct: portfolioStructure,
  },
  {
    Title: "Design",
    points: [
      "Design Philosophy:",
      "Our design philosophy is pure nostalgia! The UI is a love letter to Windows XP – the first operating system I ever used on my chunky old PC. It’s like a virtual time machine to an era of blue taskbars, pixelated wallpapers, and the comforting chime of Windows startup.",
      "Design Elements:",
      "- **Retro Vibes**: Everything from the buttons to the tabs screams Windows XP. Yes, including the iconic gradients and the Start Menu feel. No dark modes here, we’re keeping it old-school!",
      "- **Pixelated Charm**: Typography that echoes the early 2000s (but don’t worry, it’s still readable). Fonts are a mix of functional and nostalgic vibes.",
      "- **Color Palette**: Inspired by the classic XP blues and greens with a dash of fun – because who doesn’t love some happy colors?",
      "- **Classic Layout**: Logical, familiar, and very ‘XP’ – because some things just work better when they’re retro.",
      "- **Easter Eggs**: Keep an eye out! There are hidden nods to XP quirks for those who loved those good ol’ days.",
      "Accessibility:",
      "While Windows XP didn’t think much about accessibility, I do! This design ensures everyone can navigate and enjoy the retro goodness seamlessly.",
      "Why XP? Honestly, because it’s the OG. This project is not just a portfolio – it’s a portal to my childhood tech adventures. If you ever right-clicked for fun or spent hours customizing your desktop icons, you’re in for a treat!",
    ],
    images : [PiFigmaLogoDuotone, GiLoveMystery, GiEasterEgg]
  },
  {
    Title: "Development",
    points: [
      "How We Built This:",
      "Creating this site was like crafting a masterpiece—it’s packed with thought, effort, and a whole lot of geeky fun!",
      "What’s Under the Hood:",
      "- **The Core:** Fully built with Next.js (yes, the whole thing!) because it’s fast, flexible, and just plain awesome.",
      "- **The Language of Wizards:** TypeScript for keeping our code sharp, clean, and typo-proof.",
      "- **Styling Powerhouse:** Tailwind CSS to make everything look sleek and modern without breaking a sweat.",
      "- **The Secret Ingredients:** A bunch of cool npm packages that save time, add flair, and make things work like magic.",
      "- **Big Brain Moves:** Tons of knowledge, late-night debugging, and just the right amount of coffee.",
      "- **Designs that Wow:** Crafted sleek designs in Figma, turning ideas into visually stunning UI components.",
    ],
    images: [
      SiNextdotjs,
      RiTailwindCssFill,
      FaNodeJs,
      SiRedux,
      LuAppWindow,
      PiFigmaLogoDuotone,
    ],
  },
   {
    Title: "Structural Features",
    points: [
      "- **Contexts:** Tracks and maintains tab states for open, minimized, maximized, and front position, Separates error tab states from common tab states.",
      "- **Actions:** Initialize arrays for folders and errors, Setting tab states (open, min, max, front)",
      "- **Tab Types**",
      "--- Simple Tab: Basic Tab Structure",
      "--- CMD Tab: Specific Tab Structure for CMD",
      "--- Error Tab: Common Error Tab Structure",
      "- **Helper Functions**",
      "--- makeFalse: Set tab states to false.",
      "--- makeTrue: Set tab states to true.",
      "--- makeErrorFalse: Set error tab states to false.",
      "--- makeErrorTrue: Set error tab states to true and front.",
      "- **The Secret Ingredients:** A bunch of cool npm packages that save time, add flair, and make things work like magic.",
      "- **Responsive Features:** Window resize listener adjusts for phone layout.",
      "- **Designs that Wow:** Crafted sleek designs in Figma, turning ideas into visually stunning UI components.",
    ],
    images: [BiSolidError, MdOutlineTab, MdOutlineStorage, SiRedux, MdDesignServices ],
  },
  {
    "Title": "All Folders",
    "points": [
      "- **AboutMe.tsx:**",
        "---- Provides a section with personal information, bio, and background.",
       " ---- Displays name, profile picture, contact information. " ,
        "---- Responsive layout for mobile and desktop view.",
        "---- Interactive bio with smooth scrolling and hover effects.",  
        "---- Integrates with other portfolio sections like projects and experience. ", 
        "---- Built using React and Tailwind CSS.",
      "- **Experience.tsx:** ",
        "---- Displays professional work experience and key projects.", 
        "---- Chronological list of work history with company logos.",  
        "---- Clean, modern layout with distinct sections.",
        "---- Interactive hover effects to show more details on job roles.",  
        "---- Built using React, Tailwind CSS, and icons for companies.",
      "- **InfoTabs.tsx:**",
        "---- Manages dynamic tab navigation for different sections like about, experience, and projects.",  
        "---- Tabs to display different portfolio sections.",
       " ---- Easy navigation with clear labels and transitions.", 
        "---- Auto-switch tabs based on user actions or clicks.",
        "---- Built with React and Tailwind CSS.",
      "- **LetsConnect.tsx:**",
        "---- A section to display contact information and ways to get in touch.",
        "---- Links to social media and professional platforms.",  
        "---- Simple and accessible layout with clear CTAs.",
        "---- Quick links to profiles like LinkedIn, GitHub, email.",  
        "---- Built using React, Tailwind CSS, and icons.",
      "- **MyComputer.tsx:**",
        "---- Showcases the user's setup or technical environment.",
        "---- List of tools, software, and hardware used in development.", 
        "---- Organized and visually appealing list.",
        "---- Hover or click for more information on specific tools.",  
        "---- Built using React and Tailwind CSS.",
      "- **Projects.tsx:**",
        "---- Displays a collection of the user's projects and work.",  
        "---- Each project has a description, link, and tech stack used.",  
        "---- Interactive elements like images and buttons.",
        "---- Links to live demos or GitHub repositories.",
        "---- Built using React and Tailwind CSS.",
      "- **SkillsPage.tsx:**",
        "---- Highlights the user's technical skills and expertise.",  
       " ---- List of programming languages, tools, and frameworks.", 
        "---- Organized layout with clear skill categories.",
        "---- Hover effects to show skill proficiency levels.",  
        "---- Built using React and Tailwind CSS.",
    ],
    images: [SlGraph, TbInfoSquareFilled, MdOutlineConnectWithoutContact, FaComputer, SiNounproject, TfiTarget]
  }  
];

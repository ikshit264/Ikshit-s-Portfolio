import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from "react-icons/hi";

interface Project {
    name: string;
    link: string;
    repo: string;
    isIfram: boolean;
    description: string;
    display_image?: any;
}

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {

    return (
        <div className="bg-gradient-to-b h-fit min-h-full bg-black/90 text-black p-8 ">
            <h2 className="text-3xl font-bold mb-6 p-2 text-center bg-gray-200 rounded border border-gray-400 shadow-md">
                My Projects
            </h2>
            <div className="flex flex-wrap flex-grow justify-center items-center gap-4 relative ">
                {projects.map((project, index) => (
                    <div key={index} className='flex flex-col gap-2 shadow-black/80 shadow-sm p-1 transform transition-transform duration-300 group hover:-translate-y-2'>
                        <div className=''>
                            {
                                project.isIfram ? (
                                    <iframe
                                        className='rounded-t-xl max-w-max group-hover:scale-105 transform transition-transform duration-300'
                                        src={`${project.link}`}
                                        title={project.name}
                                        width={500}
                                        height={300}
                                        sandbox="allow-scripts allow-same-origin"
                                    ></iframe>
                                ) :
                                    (
                                        <Image
                                            className='rounded-t-xl max-w-full group-hover:scale-105 transform transition-transform duration-300'
                                            src={project.display_image}
                                            alt={project.name}
                                            width={450}
                                            height={300}
                                        />
                                    )}
                        </div>
                        <h1 className='text-white text-2xl font-semibold'>{project.name}</h1>
                        <div>
                            <div className='flex flex-row gap-2'>
                                <button title='Repositry' className='flex p-1 bg-gray-600 gap-1 items-center rounded-md'>
                                    <a href={project.repo} target='_blank' className='flex gap-1 items-center '>
                                        <FaGithub size={20} />
                                        <span className='text-white/80'>
                                            Repository
                                        </span>
                                    </a>
                                </button>
                                <button title='Live Demo' className='flex p-1 bg-gray-600 gap-1 items-center rounded-md'>
                                    <a href={project.link} target='_blank' className='flex gap-1 items-center'>
                                        <HiExternalLink size={20} />
                                        <span className='text-white/80'>
                                            Live Demo
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

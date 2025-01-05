import React, { useEffect, useState } from 'react';
import Projects from '@/Components/PageComponents/Projects';
import { fetchProjects } from '@/utils/fetchProjects';
import FadeLoader from 'react-spinners/FadeLoader';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      if (!projects.length) {
        const fetchedProjects = await fetchProjects();
        setProjects(fetchedProjects);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    loadProjects();
  }, [projects.length]);

  if (loading) {
    return (
      <div className="flex justify-center h-full w-full items-center">
        <FadeLoader
          height={5}
          loading
          margin={10}
          radius={1}
          speedMultiplier={1.7}
          width={20}
        />
      </div>
    );
  }

  return <Projects projects={projects} />;
};

export default ProjectsPage;

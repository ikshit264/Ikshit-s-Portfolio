import React, { useEffect, useState } from 'react';
import SoloExperience from '@/Components/PageComponents/Experience';
import FadeLoader from 'react-spinners/FadeLoader';
import { fetchExperience } from '@/utils/fetchExperience';

const ProjectsPage = () => {
  const [experience, setexperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      if (!experience.length) {
        const fetchedProjects = await fetchExperience();
        setexperience(fetchedProjects);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    loadProjects();
  }, [experience.length]);

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

  return <SoloExperience Expreiences={experience} />; 
};

export default ProjectsPage;

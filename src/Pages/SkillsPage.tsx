// pages/Skills.tsx

import React, { useEffect, useState } from 'react';
import SkillSet from '@/Components/PageComponents/SkillSet';
import { fetchSkills } from "@/utils/fetchSkills"
import FadeLoader from "react-spinners/FadeLoader";
import { ChildComponentProps } from '@/Types/Interfaces';

const SkillsPage: React.FC<ChildComponentProps> = ({ width }) => {
  const [Skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      setSkills([]);
      const fetchedSkills = await fetchSkills();
      setSkills(fetchedSkills);
      console.log(fetchedSkills)
      setLoading(false);
    };

    loadSkills();
  }, []);

  if (loading) {
    return <div className='flex justify-center h-full w-full items-center'>
      <FadeLoader
        height={5}
        loading
        margin={10}
        radius={1}
        speedMultiplier={1.7}
        width={20}
      />
    </div>;
  }

  return <SkillSet skills={Skills} width={width} />;
};

export default SkillsPage;

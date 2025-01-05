import React, { useState } from 'react';
import Icon_React from '../common/Icon_React';
import '@/Components/styles/SkillSet.css';
import { ChildComponentProps } from '@/Types/Interfaces';

export interface Skill {
  name: string;
  isReactIcon: boolean;
  icon_name: string;
  image_icon?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  position: {
    x: number;
    y: number;
  };
  size: number;
  color: string;
}

type SkillsProps = ChildComponentProps & {
  skills: Skill[];
}

const SkillSet: React.FC<SkillsProps> = ({ skills, width }) => {
  const DELAY_To_RENDER = 600;
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null); // Track hovered skill

  const handleMouseEnter = (index: number) => {
    setHoveredSkill(index);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  if (!width){
    return null;
  }

  return (
    <div className="relative overflow-hidden h-full bg-gradient-to-r from-blue-300 to-blue-100">
      <svg className="absolute inset-0 w-full h-full">
        {skills.map((skill, index) => {
          if (index === 0) return null;

          const previousSkill = skills[index - 1];
          const currentSkill = skill;

          return (
            <line
              key={index}
              x1={`${previousSkill.position.x + 3}%`}
              y1={`${100 - previousSkill.position.y - 3}%`}
              x2={`${currentSkill.position.x + 3}%`}
              y2={`${100 - currentSkill.position.y - 4}%`}
              stroke={skill.color}
              strokeWidth="2"
              style={{
                opacity: 0,
                animation: `drawLine 700ms ease-in-out forwards ${index * DELAY_To_RENDER - DELAY_To_RENDER}ms`,
              }}
            />
          );
        })}

        {/* Line connecting the first skill to the last skill */}
        {skills.length > 1 && (
          <line
            x1={`${skills[0].position.x + 3}%`}
            y1={`${100 - skills[0].position.y - 3}%`}
            x2={`${skills[skills.length - 1].position.x + 3}%`}
            y2={`${100 - skills[skills.length - 1].position.y - 4}%`}
            stroke={skills[0].color}
            strokeWidth="2"
            style={{
              opacity: 0,
              animation: `drawLine 700ms ease-in-out forwards ${skills.length * DELAY_To_RENDER}ms`,
            }}
          />
        )}
      </svg>

      {/* Render the skill icons */}
      {skills.map((skill, index) => (
        <div
          key={index}
          className="absolute Skill p-3 bg-blue-100 rounded-full"
          style={{
            border: '2px solid #a0a0a0',
            boxShadow:
              '3px 3px 8px rgba(0, 0, 0, 0.5), inset 1px 1px 3px rgba(255, 255, 255, 0.8)',
            bottom: `${skill.position.y - 1}%`,
            left: `${skill.position.x}%`,
            transform: 'translate(100%, 50%)',
            opacity: 0,
            animation: `fadeIn 400ms ease-in-out forwards ${index * DELAY_To_RENDER}ms`,
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Icon_React
            iconName={skill.icon_name}
            size={width < 400 ? skill.size - 10 : hoveredSkill==index? skill.size + 1 : skill.size}
            color={skill.color}
          />

          {/* Tooltip on hover */}
          {hoveredSkill === index && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mb-2 ">
              <div className={`w-2 h-2 bg-[${skill.color}] transform rotate-45 mx-auto -mb-1`}></div>
              <div className={`bg-[${skill.color}] text-white p-1 rounded shadow-lg text-xs whitespace-nowrap`}>
                {skill.name}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillSet;

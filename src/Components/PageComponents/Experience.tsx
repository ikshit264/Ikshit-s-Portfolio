import React from 'react'

export interface Experience {
  title: string;
  points: string[];
  list?: Experience[]; // Make list optional
}

export interface SoloExperienceProps {
  Expreiences: Experience[]; // Define the prop correctly
}

const SoloExperience: React.FC<SoloExperienceProps> = ({ Expreiences }) => {
  return (
    <div className="p-4 min-h-fit bg-[#e5e5cb] border border-[#b1b1b1] flex flex-col gap-5">
      {Expreiences.map((experience, index) => (
        <div
          key={index}
          className="relative mt-6 p-4 bg-[#f9f9df] rounded-sm border-2 border-[#8b8b71] shadow-md"
        >
          <div className="relative bg-[#d1edc1] rounded-sm border-2 border-[#8b8b71] px-2 py-1 inline-block shadow-md text-xl font-bold">
            {experience.title}
          </div>
          <ul className="list-disc ml-6 mt-3 text-[#4a4a38]">
            {experience.points?.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {experience.list && (
            <div className="pt-4 flex flex-col gap-4">
              {experience.list?.map((nestedExperience, j) => (
                <div
                  key={j}
                  className="relative mt-6 p-1 bg-[#f4f4ce] rounded-sm border-2 border-[#8b8b71] shadow-lg"
                >
                  <div className="relative -top-7 bg-[#c1daed] rounded-sm border-2 border-[#8b8b71] px-2 py-1 inline-block shadow-md text-xl font-bold">
                    {nestedExperience.title}
                  </div>
                  <ul className="list-disc ml-6 px-1 text-[#4a4a38]">
                    {nestedExperience.points.map((point, k) => (
                      <li key={k}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SoloExperience;

import React from "react";
import Image from "next/image";
import Skill from "./Skill";
import skill_data from "./skill_data/skill_data";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#d67f0e]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <Skill skill_data={skill_data} />
      </div>
    </div>
  );
};

export default Skills;

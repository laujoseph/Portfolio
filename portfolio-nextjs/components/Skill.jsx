import React from "react";
import Image from "next/image";

const Skill = ({ skill_data }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skill_data.map((skill) => {
          return (
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={skill.logo}
                    alt="logo"
                    width="64px"
                    height="64px"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import musterclass from "../public/assets/projects/musterclassimg.png";
import nynaairlines from "../public/assets/projects/nyna_airlinesimg.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#d67f0e]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* input projects in the below div */}
          <ProjectItem
            title="Musterclass"
            backgroundImg={musterclass}
            projectUrl="https://muster-class-nine.vercel.app/"
          />
          <ProjectItem
            title="Nyna-Airlines"
            backgroundImg={nynaairlines}
            projectUrl="https://nyna-airlines.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

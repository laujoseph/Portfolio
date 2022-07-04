import React from "react";
import Image from "next/image";
import htmllogo from "../public/assets/skills/html_logo.png";
import csslogo from "../public/assets/skills/css_logo.png";
import jslogo from "../public/assets/skills/javascript_logo.png";
import reactlogo from "../public/assets/skills/react_logo.png";
import nodejslogo from "../public/assets/skills/nodejs_logo.png";
import githublogo from "../public/assets/skills/github_logo.png";
import mongodblogo from "../public/assets/skills/Logomark_RGB_Forest-Green.png";
import muilogo from "../public/assets/skills/mui_logo.png";

const Skill = ({ skill_data }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={htmllogo} alt="logo" width="64px" height="64px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={csslogo} alt="logo" width="64px" height="64px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>CSS</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={jslogo} alt="logo" width="64px" height="64px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Javascript</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={reactlogo} alt="logo" width="64px" height="64px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>React</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={nodejslogo} alt="logo" width="64px" height="64px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>NodeJS</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={githublogo} alt="logo" width="64px" height="64px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Github</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={mongodblogo} alt="logo" width="64px" height="64px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>MongoDB</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={muilogo} alt="logo" width="64px" height="64px" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>MaterialUI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

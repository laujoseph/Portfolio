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
import reduxlogo from "../public/assets/skills/redux_logo.png"
import firebaselogo from "../public/assets/skills/firebase_logo.png"
import nextlogo from "../public/assets/skills/next_logo.png"
import expresslogo from "../public/assets/skills/express_logo.png"
import gitlogo from "../public/assets/skills/git_logo.png"
import typescriptlogo from "../public/assets/skills/typescript_logo.png"
import sqllogo from "../public/assets/skills/sql_logo.png"
import es6logo from "../public/assets/skills/es6_logo.png"
/*  { logo: "/../public/assets/skills/redux_logo.png", name: "Redux" },
  { logo: "/../public/assets/skills/firebase_logo.png", name: "Firebase" },
  { logo: "/../public/assets/skills/next_logo.png", name: "Next" },
  { logo: "/../public/assets/skills/express_logo.png", name: "Express" },
  { logo: "/../public/assets/skills/git_logo.png", name: "Git" },
  { logo: "/../public/assets/skills/typescript_logo.png", name: "Typescript" },
  { logo: "/../public/assets/skills/sql_logo.png", name: "SQL" },
  { logo: "/../public/assets/skills/es6_logo.png", name: "ES6" }, */
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#d67f0e]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
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
                <Image
                  src={mongodblogo}
                  alt="logo"
                  width="64px"
                  height="64px"
                />
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
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reduxlogo} alt="logo" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={firebaselogo} alt="logo" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextlogo} alt="logo" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={expresslogo} alt="logo" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={gitlogo} alt="logo" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={typescriptlogo} alt="logo" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={sqllogo} alt="logo" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={es6logo} alt="logo" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ES6</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsFolder } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#d67f0e]">Joseph</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            With a passion for problem solving and love of learning, I believe
            in developing creative solutions to meet user needs. I also enjoy
            working in teams and value communication.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/joseph-lau-ys/")
                }
              />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub
                onClick={() => openInNewTab("https://github.com/laujoseph")}
              />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

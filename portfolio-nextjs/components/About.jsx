import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#d67f0e]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <br></br>
          <p className="py-2 text-gray-600">
            Hello! I&apos;m a Software Developer who made the bold decision 
            to pivot my career path and pursue my passion for technology by enrolling 
            in the General Assembly Software Engineering Immersive Course (SEI) in early 2022. 
          </p>

          <p className="py-2 text-gray-600">
            Before the SEI course, I was a resource planner for one of
            Asia&apos;s largest defence and engineering group for 2 years,
            managing a team of technicians to ensure smooth and efficient
            workflows. My interest in software engineering piqued during the
            circuit breaker period when I meddled with online coding courses.
            That led me to a newfound sense of fulfillment in writing codes and
            building apps.</p>
             
            <p className="py-2 text-gray-600">
            Since then, I&apos;ve worked as an
            Avaloq Software Developer and am eager to leverage my newfound skills and passion for technology 
            to make a positive impact and drive meaningful change in the tech industry.
            I am excited about the opportunities ahead and look forward to connecting with like-minded professionals 
            who share my enthusiasm for innovation and creativity.
          </p>
          <p>
            <Link href="/#projects">
              <span className="hover:font-bold cursor-pointer">
                Check out some of my latest projects.
              </span>
            </Link>
          </p>
        </div>
        {/* <div className="mt-5 w-[80%] h-[80%] p-2 flex items-center"> */}
        <div className="w-[80%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="https://i.imgur.com/0NR1WQ3.png" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

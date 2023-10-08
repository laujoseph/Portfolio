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
            I am a recent graduate from the General Assembly Software
            Engineering Immersive (SEI), and have also worked as an
            Instructional Associate for the batch after mine of the same course.
          </p>

          <p className="py-2 text-gray-600">
            Before the SEI course, I was a resource planner for one of
            Asia&apos;s largest defence and engineering group for 2 years,
            managing a team of technicians to ensure smooth and efficient
            workflows. My interest in software engineering piqued during the
            circuit breaker period when I meddled with online coding courses.
            That led me to a newfound sense of fulfillment in writing codes and
            building apps. Now, I help others discover the same sense of
            satisfaction and am excited to dive into the world of tech!
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

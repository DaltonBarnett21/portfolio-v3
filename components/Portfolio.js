import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [tab, setTab] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
      id="portfolio"
      className=" h-full flex flex-col justify-center items-center p-5 "
    >
      <div className="max-w-[1000px] mx-auto">
        <h2 className="font-bold text-3xl mb-5 text-gray-700 flex justify-center">
          Portfolio
        </h2>
        <div className=" flex justify-center ">
          <div className=" grid grid-cols-3 max-w-sm mx-auto ">
            <button
              onClick={() => setTab(0)}
              className={` ${
                tab === 0 ? "bg-gray-700 text-white" : "text-gray-700"
              } font-bold rounded-md p-2 w-20 ml-2`}
            >
              All
            </button>
            <button
              onClick={() => setTab(1)}
              className={`${
                tab === 1 ? "bg-gray-700 text-white" : "text-gray-700"
              }   font-bold rounded-md p-2 w-20 ml-2`}
            >
              Web
            </button>
            <button
              onClick={() => setTab(2)}
              className={` ${
                tab === 2 ? "bg-gray-700 text-white" : "text-gray-700"
              }  text-gray-700 font-bold rounded-md p-2 w-20 ml-2`}
            >
              App
            </button>
          </div>
        </div>
        {/* <div className="mt-5 grid grid-cols-1 lg:grid-cols-2"> */}
        {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
        <div className=" h-52 flex justify-center mt-5">
          <span className=" text-xl">Coming Soon...</span>
        </div>
      </div>
      {/* </div> */}
    </motion.section>
  );
};

export default Portfolio;

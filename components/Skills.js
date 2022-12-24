import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

const frontend = [
  "HTML",
  "CSS",
  "BOOTSTRAP",
  "TAILWIND",
  "JAVASCRIPT",
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "GIT",
];

const backend = [
  "NODE.JS",
  "POSTGRESQL",
  "MONGODB",
  "PRISMA",
  "LINUX",
  "NGINX",
  "PYTHON",
  "BASH",
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
      id="skills"
      className="max-w-[1000px] mx-auto h-screen flex flex-col justify-center p-4"
    >
      <h2 className="font-bold text-3xl mb-10 text-gray-700 flex justify-center">
        Skills
      </h2>
      <div className=" grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-2">
        <div className="flex justify-center">
          <div className=" bg-white h-80 shadow-md border w-96 flex  flex-col  p-4">
            <h2 className="font-bold text-2xl mb-5 text-gray-500 flex justify-center">
              Frontend Skills
            </h2>
            <div className=" grid grid-cols-2">
              {frontend.map((item, i) => (
                <Skill index={i} skill={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" bg-white h-80 shadow-md border w-96 flex  flex-col  p-4">
            <h2 className="font-bold text-2xl mb-5 text-gray-500 flex justify-center">
              Backend Skills
            </h2>
            <div className=" grid grid-cols-2">
              {backend.map((item, i) => (
                <Skill index={i} skill={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

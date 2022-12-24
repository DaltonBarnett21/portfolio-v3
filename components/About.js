import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1000px] mx-auto h-screen mb-96 lg:mb-0 p-4 lg:p-0   "
    >
      <h2 className="font-bold text-3xl mb-5 text-gray-700 flex justify-center">
        About Me
      </h2>

      <div className="mt-10 flex flex-col lg:flex-row">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 0.4,
          }}
          className="flex-1"
        >
          <Image
            src="/me.JPG"
            height={300}
            width={400}
            className=" rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
          className="flex-1 flex flex-col items-center"
        >
          <div className=" grid grid-cols-3 mt-5">
            <div className=" bg-white h-24 shadow-md border lg:w-32 flex items-center flex-col justify-center p-2">
              <span className=" text-gray-600 font-semibold">Experience</span>
              <p className=" text-sm text-gray-500">1 year</p>
            </div>
            <div className=" bg-white h-24 shadow-md border lg:w-32 flex justify-center flex-col items-center p-2">
              <span className=" text-gray-600 font-semibold">Projects</span>
              <p className=" text-sm text-gray-500">2</p>
            </div>
            <div className=" bg-white h-24 shadow-md border lg:w-32 flex justify-center flex-col items-center p-2">
              <span className=" text-gray-600 font-semibold">Skills</span>
              <p className=" text-sm text-gray-500">20+</p>
            </div>
          </div>
          <p className=" text-gray-500 mt-5">
            fullstack web developer that enjoys both frontend and backend
            technologies. I've been a developer for about a year professionally
            but have always played with these technologies before my profession.
            My goal is to be a senior fullstack developer and create the best
            and highest quality products for the consumer.
          </p>
          <button className=" bg-gray-700 flex items-center justify-center text-white p-4 font-bold rounded-lg mt-8 w-44 cursor-pointer transition duration-500 hover:bg-gray-900">
            <span>Download Resume</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

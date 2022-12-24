import React, { useState } from "react";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { motion } from "framer-motion";

const Journey = () => {
  const [tab, setTab] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
      id="journey"
      className="flex flex-col justify-center h-screen"
    >
      <div className="max-w-[1000px] mx-auto   ">
        <h2 className="font-bold text-3xl mb-5 text-gray-700 flex justify-center">
          My Journey
        </h2>
        <div className="flex max-w-sm mx-auto text-gray-700">
          <div className="flex-1 flex justify-center items-center cursor-pointer ">
            <SchoolOutlinedIcon fontSize="large" />
            <span
              onClick={() => setTab(0)}
              className={`font-bold text-xl ml-2 border-b-2 ${
                tab === 0 && "border-b-blue-500"
              } `}
            >
              Education
            </span>
          </div>
          <div className="flex-1 flex justify-center items-center cursor-pointer">
            <BusinessCenterOutlinedIcon fontSize="large" />
            <span
              onClick={() => setTab(1)}
              className={`font-bold text-xl ml-2 border-b-2 ${
                tab === 1 && "border-b-blue-500"
              }`}
            >
              Experience
            </span>
          </div>
        </div>
        <div className=" max-w-[500px] h-96 lg:h-screen overflow-y-scroll flex flex-col items-center mx-auto mt-5  rounded-lg p-4">
          {tab === 0 ? (
            <>
              <div className=" bg-white h-32 shadow-sm border w-80 flex items-center  flex-col  p-4 m-4">
                <h2 className=" text-2xl font-semibold text-gray-800">
                  Bachelor of Science
                </h2>
                <h2 className=" text-gray-500">Computer Science</h2>
                <p className=" text-gray-500">Northeastern State University</p>
              </div>

              <div className=" bg-white h-32 shadow-sm border w-80 flex items-center  flex-col  p-4 m-4">
                <h2 className=" text-2xl font-semibold text-gray-800">
                  Associate of Art
                </h2>
                <h2 className=" text-gray-500">General Studies</h2>
                <p className=" text-gray-500">Connors State College</p>
              </div>
            </>
          ) : (
            <>
              <div className=" bg-white h-32 shadow-sm border w-80 flex items-center  flex-col  p-4 m-4">
                <h2 className=" text-2xl font-semibold text-gray-800">
                  Web Developer
                </h2>
                <h2 className=" text-gray-500">National Bus Sales</h2>
                <p className=" text-gray-500">March 2022 - present</p>
              </div>

              <div className=" bg-white h-32 shadow-sm border w-80 flex items-center  flex-col  p-4 m-4">
                <h2 className=" text-2xl font-semibold text-gray-800">
                  Data Analyst
                </h2>
                <h2 className=" text-gray-500">Amazon</h2>
                <p className=" text-gray-500"> 2021 - March 2022</p>
              </div>

              <div className=" bg-white h-32 shadow-sm border w-80 flex items-center  flex-col  p-4 m-4">
                <h2 className=" text-2xl font-semibold text-gray-800">
                  Problem Solve Lead
                </h2>
                <h2 className=" text-gray-500">Amazon</h2>
                <p className=" text-gray-500">September 2020 - March 2021</p>
              </div>

              <div className=" bg-white h-32 shadow-sm border w-80 flex items-center  flex-col  p-4 m-4">
                <h2 className=" text-2xl font-semibold text-gray-800 ">
                  Customer Service
                </h2>
                <h2 className=" text-gray-500">Lowes</h2>
                <p className=" text-gray-500">
                  September 2011 - September 2020
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Journey;

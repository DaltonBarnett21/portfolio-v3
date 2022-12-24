import React from "react";
import Image from "next/image";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
      id="home"
      className="max-w-[900px] snap-center flex h-screen items-center  mx-auto text-gray-500 p-4 "
    >
      <div className="flex flex-1 items-center flex-col">
        <div className="lg:hidden h-64 w-64 relative mb-5">
          <Image src="/me.JPG" fill className=" rounded-full object-cover" />
        </div>
        <h1 className=" text-gray-700 text-5xl font-semibold">
          Dalton Barnett
        </h1>
        <span className=" text-lg font-semibold mt-4">Web Developer</span>
        <p className="mt-5 text-center">
          I'm a web developer based out of Tulsa, and I'm very passionate about
          all things web development!{" "}
        </p>

        <Link href="#contact">
          <button className=" bg-gray-700 flex items-center justify-center text-white p-3 font-bold rounded-lg mt-8 w-40 cursor-pointer transition duration-500 hover:bg-gray-900">
            <span>Say Hello</span>
            <SendOutlinedIcon className=" text-white ml-2" />
          </button>
        </Link>
      </div>
      <div className="hidden lg:flex flex-1 items-center flex-col ">
        <div className=" h-80 w-80 relative">
          <Image src="/me.JPG" fill className=" rounded-full object-cover" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

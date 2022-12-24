import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white h-48 flex flex-col justify-center p-4">
      <h2 className="font-bold text-3xl mb-5 text-gray-700 flex justify-center">
        Barnett
      </h2>
      <div className=" lg:max-w-lg mx-auto grid grid-cols-3 mt-5 text-gray-500">
        <Link href="#about">
          <span className="flex justify-center cursor-pointer transition duration-400 hover:text-gray-700">
            About
          </span>
        </Link>

        <Link href="#skills">
          <span className="flex justify-center cursor-pointer transition duration-400 hover:text-gray-700">
            Skills
          </span>
        </Link>

        <Link href="#portfolio">
          <span className="flex justify-center cursor-pointer transition duration-400 hover:text-gray-700">
            Portfolio
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

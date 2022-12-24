import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PhotoAlbumOutlinedIcon from "@mui/icons-material/PhotoAlbumOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { motion, AnimatePresence } from "framer-motion";
import { navbarVariant } from "../utils/animations";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <>
      <motion.nav
        variants={navbarVariant}
        initial={"hidden"}
        whileInView="show"
        className="border border-gray-300"
      >
        <div className="flex sticky top-0 justify-end lg:justify-between items-center p-4 max-w-[1700px] z-50 mx-auto text-gray-500 bg-gray-100">
          <span className="text-2xl hidden lg:block font-semibold cursor-pointer text-gray-700 ">
            Dalton Barnett
          </span>

          {isOpen ? (
            <div onClick={() => setIsOpen(!isOpen)}>
              <CloseOutlinedIcon className=" cursor-pointer" />
            </div>
          ) : (
            <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
              <MenuOutlinedIcon className=" cursor-pointer" />
            </div>
          )}

          <ul className="lg:flex hidden">
            <Link href="#home">
              <li className="mr-4 cursor-pointer transition duration-400 hover:text-gray-700">
                Home
              </li>
            </Link>

            <Link href="#about">
              <li className="mr-4 cursor-pointer transition duration-400 hover:text-gray-700">
                About
              </li>
            </Link>
            <Link href="#skills">
              <li className="mr-4 cursor-pointer transition duration-400 hover:text-gray-700">
                Skills
              </li>
            </Link>
            <Link href="#journey">
              <li className="mr-4 cursor-pointer transition duration-400 hover:text-gray-700">
                Education & Experience
              </li>
            </Link>
            <Link href="#portfolio">
              <li className="mr-4 cursor-pointer transition duration-400 hover:text-gray-700">
                Portfolio
              </li>
            </Link>
            <Link href="#contact">
              <li className="mr-4 cursor-pointer transition duration-400 hover:text-gray-700">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 350, opacity: 0 }}
            animate={{ x: 5, opacity: 1 }}
            exit={{ x: 350, opacity: 0 }}
            transition={{ type: "spring", stiffness: 35, delay: 0.2 }}
            className=" w-64 h-[1500px] bg-gray-700 p-4 fixed right-0 top-0 rounded-l-md  z-50"
          >
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex justify-end p-4"
            >
              <CloseOutlinedIcon className=" cursor-pointer text-white" />
            </div>
            <ul className=" text-white font-bold">
              <Link href="#home">
                <li className="mt-5 flex items-center cursor-pointer transition duration-400 hover:text-gray-300">
                  <HomeOutlinedIcon className="mr-2" /> Home
                </li>
              </Link>

              <Link href="#about">
                <li className="mt-5 flex items-center cursor-pointer transition duration-400 hover:text-gray-300">
                  <PersonOutlineOutlinedIcon className="mr-2" /> About
                </li>
              </Link>

              <Link href="#skills">
                <li className="mt-5 flex items-center cursor-pointer transition duration-400 hover:text-gray-300">
                  <ReceiptLongOutlinedIcon className="mr-2" />
                  Skills
                </li>
              </Link>

              <Link href="#journey">
                <li className="mt-5 flex items-center cursor-pointer transition duration-400 hover:text-gray-300">
                  <SchoolOutlinedIcon className="mr-2" />
                  Education & Experience
                </li>
              </Link>

              <Link href="#portfolio">
                <li className="mt-5 flex items-center cursor-pointer transition duration-400 hover:text-gray-300">
                  <PhotoAlbumOutlinedIcon className="mr-2" />
                  Portfolio
                </li>
              </Link>

              <Link href="#contact">
                <li className="mt-5 flex items-center cursor-pointer transition duration-400 hover:text-gray-300">
                  <SendOutlinedIcon className="mr-2" />
                  Contact
                </li>
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

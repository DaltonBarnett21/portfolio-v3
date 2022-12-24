import React, { useState } from "react";
import Image from "next/image";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ProjectCard = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className=" shadow-md rounded-md border p-4 bg-white flex flex-col items-center m-4 ">
      <Image
        src="/twitter.png"
        height={300}
        width={450}
        className=" rounded-lg shadow-lg"
      />
      <div className="flex w-full flex-col items-start p-2">
        <h2 className=" text-2xl font-bold text-gray-700">Twitter Clone</h2>
        <span
          onClick={onOpenModal}
          className=" text-gray-500 hover:text-blue-500 cursor-pointer mt-2"
        >
          View Technology used
        </span>
        <span className="text-gray-500 cursor-pointer hover:text-blue-500 mt-2">
          Demo
          <ArrowForwardOutlinedIcon className="text-gray-500 hover:text-blue-500" />
        </span>
      </div>
      {open && (
        <Modal open={open} onClose={onCloseModal} center>
          <div className="p-6 w-[300px] lg:w-[500px] h-[500px]">
            <h3 className="text-xl text-gray-700 font-bold border-b border-b-gray-500">
              Stack Used
            </h3>
            <ul className="mt-2 text-gray-600">
              <li className="text-md font-bold mt-4">Frontend</li>
              <ul className="ml-2">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>React Context API</li>
                <li>React Query</li>
              </ul>
            </ul>
            <ul className="mt-2 text-gray-600">
              <li className="text-md font-bold mt-4">Backend</li>
              <ul className="ml-2">
                <li>Node.js</li>
                <li>Prisma</li>
                <li>Postgresql</li>
              </ul>
            </ul>
            <ul className="mt-2 text-gray-600">
              <li className="text-md font-bold mt-4">Dev Ops</li>
              <ul className="ml-2">
                <li>Linux</li>
                <li>NGINX</li>
                <li>Docker</li>
              </ul>
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectCard;

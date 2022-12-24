import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Contact = () => {
  const [status, setStatus] = useState({
    isLoading: false,
    error: false,
    success: false,
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    setStatus({ ...status, isLoading: true });
    emailjs
      .sendForm(
        "service_ogq2cb2",
        "template_k1o72a4",
        form.current,
        "cxFwnkZHO4ULLXOh8"
      )
      .then(
        (result) => {
          setStatus({ ...status, success: true });
          setTimeout(() => {
            setStatus({ ...status, success: false });
          }, 3000);
        },
        (error) => {
          setStatus({ ...status, error: true });
          console.log(error.text);
        }
      );
  };

  if (status.isLoading) {
    return (
      <div className="h-screen flex flex-col justify-start items-center mt-5">
        <Image src="/loading.gif" width={200} height={400} />
        <span className=" font-bold text-lg text-gray-600">
          Submitting Form...
        </span>
      </div>
    );
  }

  if (status.success) {
    return (
      <div className="h-screen flex flex-col justify-start items-center mt-5">
        <span className=" font-bold text-2xl text-gray-600">
          Thank you for your interest!
        </span>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
      id="contact"
      className=" h-full flex flex-col justify-center items-center mt-5 "
    >
      <div className="lg:max-w-[1000px] mx-auto">
        <h2 className="font-bold text-3xl mb-5 text-gray-700 flex justify-center">
          Contact
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={form}
          className=" flex flex-col lg:w-[500px] p-6 text-gray-500 "
        >
          {errors.name?.type === "required" && (
            <p className=" text-red-500 font-bold" role="alert">
              Name is required
            </p>
          )}
          <input
            placeholder="Name"
            type="text"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
            className=" bg-slate-100 border border-gray-500 p-4 rounded-lg mb-4 outline-none "
          />
          {errors.email?.type === "required" && (
            <p className=" text-red-500 font-bold" role="alert">
              Email is required
            </p>
          )}

          <input
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            className="bg-gray-100 border border-gray-500 p-4 rounded-lg mb-4  outline-none"
          />
          {errors.message?.type === "required" && (
            <p className=" text-red-500 font-bold" role="alert">
              Message is required
            </p>
          )}

          <textarea
            placeholder="Your Message"
            type="text"
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            className="bg-gray-100 border border-gray-500 p-4 rounded-lg mb-4  outline-none"
          ></textarea>

          <button className="mt-2 bg-gray-700 flex items-center justify-center text-white p-4 font-bold rounded-lg lg:w-52 cursor-pointer transition duration-500 hover:bg-gray-900">
            <span>Send Message</span>
            <SendOutlinedIcon className=" text-white ml-2" />
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;

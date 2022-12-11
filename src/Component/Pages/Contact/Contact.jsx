import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Social_icon from "../Social_icon/Social_icon";
import "./constact.css";
import emailjs from "@emailjs/browser";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [loding, setLoding] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();

  // send email on gmail
  const onSubmit = (data) => {
    setLoding(true);
    emailjs
      .sendForm(
        "service_62mpsxm",
        "template_35vqwel",
        form.current,
        "cXjvjEJ6ZGgM1Mf5H"
      )
      .then(
        (result) => {
          toast.success("Email send successfull");
          setLoding(false);
          reset();
        },
        (error) => {
          toast.error(error.text);
          setLoding(false);
        }
      );
  };

  return (
    <div className="contactBg">
      <section className="pt-16">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex  lg:-mx-6">
            <div data-aos="fade-up" className="lg:w-1/2 lg:mx-6">
              <h1 className="text-3xl font-semibold capitalize  lg:text-4xl">
                Contact us for <br /> more info
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    Sylhet, Habigonj Sadar, Bangladesh
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    (+880) 1766-3580XX
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    acb@example.com
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>
                <Social_icon />
              </div>
            </div>

            <div
              data-aos="fade-down"
              className=" lg:w-1/2 lg:mx-6 pt-4 md:pt-0"
            >
              <div>
                <h1 className="text-xl md:text-2xl font-medium text-gray-700 pb-10">
                  What do you want to ask
                </h1>

                <form
                  ref={form}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* name */}
                  <div>
                    <label htmlFor="name">Enter name</label>
                    <input
                      className="block w-full outline-none border-[1px] border-teal-300 p-1 rounded"
                      {...register("name", { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    {errors.name && (
                      <span className="block text-red-400">
                        Name is required
                      </span>
                    )}
                  </div>
                  {/* email */}
                  <div>
                    <label htmlFor="email">Enter Email</label>
                    <input
                      className="block w-full outline-none border-[1px] border-teal-300 p-1 rounded"
                      {...register("email", { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    {errors.email && (
                      <span className="block text-red-400">
                        Email is required
                      </span>
                    )}
                  </div>
                  {/* teaxarea */}
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      rows="4"
                      cols="50"
                      className="block w-full outline-none border-[1px] border-teal-300 p-1 rounded"
                      {...register("message", { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    {errors.message && (
                      <span className="block text-red-400">
                        Message is required
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-teal-400 block px-7 hover:px-9 duration-300 hover:bg-white hover:border-[1px] hover:border-orange-400 py-1 text-center mx-auto rounded-sm"
                  >
                    <div>{loding ? <Spinner /> : "Submit"}</div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

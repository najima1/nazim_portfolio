import React from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import "./about_me.css";
import codingImg from "../../image/programming.svg";

const About_me = () => {
  return (
    <div className="about_me_Bg pt-16">
      <h1 className="text-center block uppercase font-semibold text-xl text-[#12CBC4] md:2xl">
        About me
      </h1>
      <div className="text-[#FFC312] border-[#FFC312] border-b-[2px] w-[150px] pt-1  mx-auto"></div>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div
          data-aos="zoom-in"
          className="flex items-center justify-center w-full h-98 lg:w-1/2"
        >
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src={codingImg}
            alt="coding image"
          />
        </div>

        <div data-aos="zoom-out" className="w-full lg:w-1/2">
          <div className="lg:max-w-lg md:pl-5">
            <div>
              <h1 className="text-3xl font-semibold tracking-wide  lg:text-4xl">
                Hi There!
                <br /> I'm
                <span className="text-teal-400"> Mohammed Nazim</span>
              </h1>
              <strong className="text-[#12CBC4] mt-2">Visual Designer</strong>
              <p className="text-[#5b6673] pt-4">
                I am a Visual Web Designer with a strong focus on digital
                branding. Visul design seeks to attract, inspire, create desires
                and motivate people to respond to messages, with a view to
                making a favorable impact.
              </p>
            </div>

            <div className="mt-8 space-y-2">
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2 text-[#2f3542]">
                  Email : mohammednazim3629@gmail.com
                </span>
              </p>
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2 text-[#2f3542]">
                  From : Sylhet, Habigonj sadar, Bangladesh
                </span>
              </p>
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2 text-[#2f3542]">
                  Language : English, Bengali
                </span>
              </p>
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2 text-[#2f3542]">
                  Freelance : Available
                </span>
              </p>

              {/* download button */}
              <div>
                <a
                  target="_blank"
                  className="inline-block bg-teal-400 px-3 py-2 mt-4 hover:px-8 transition-all rounded hover:bg-[#57606f] hover:text-white hover:duration-500"
                  href="https://drive.google.com/file/d/1YvtGCdIcCNjn6LX9jzoTpghT83uJ_VVG/view?usp=share_link"
                  download={true}
                >
                  RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_me;

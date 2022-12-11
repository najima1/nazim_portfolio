import React, { useEffect } from "react";
import logo from "../../image/nazim.png";
import CustomBtn from "../CustomBtn/CustomBtn";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./hero_css.css";
import Social_icon from "../Social_icon/Social_icon";
import AOS from "aos";

const Hero_section = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className=" px-6 pt-16 pb-3 mx-auto customBg">
      <div className="container items-center lg:flex h-screen">
        <div data-aos="fade-up" className="w-full lg:w-1/2">
          <div className="lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
              <Typewriter
                options={{
                  strings: [
                    "Hi, This is Mohammed Nazim",
                    "Front-end React Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="mt-4 text-[#4b6584] md:text-xl">
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations. Client satisfaction is my first priority.
            </p>

            {/* custom button */}
            <CustomBtn />

            {/* social icon */}
            <Social_icon />
          </div>
        </div>

        <div
          data-aos="fade-down"
          className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-[42%] mx-auto"
        >
          <img
            className="w-full h-full lg:max-w-3xl"
            src={logo}
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero_section;

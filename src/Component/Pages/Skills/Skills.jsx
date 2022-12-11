import React from "react";
import "react-circular-progressbar/dist/styles.css";
import "./customPrograss.css";
import logo from "../../image/skills.svg";
import SkillBar from "react-skillbars";

const Skills = () => {
  const skills = [
    { type: "HTML", level: 95 },
    { type: "CSS3", level: 90 },
    { type: "Tailwind", level: 93 },
    { type: "Boostrap ", level: 80 },
    { type: "Javascript", level: 75 },
    { type: "React", level: 80 },
    { type: "Node.js", level: 65 },
    { type: "Express.js", level: 62 },
  ];

  const colors = {
    bar: "#22a6b3",
    title: {
      text: "#30336b",
      background: "#fff",
    },
    level: {
      minimum: 0,
      maximum: 100,
    },
  };

  return (
    <div className="skillBg group pt-16" id="#skills">
      <div className="container ">
        <h1 className="text-center block text-2xl text-white group-hover:border-b-[3px] w-[30%] mx-auto border-teal-300">
          My skills
        </h1>

        <div className="container px-6  mx-auto ">
          <div className="items-center lg:flex md:gap-x-10">
            <div
              data-aos="fade-up"
              className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
            >
              <img
                className="w-full h-full lg:max-w-3xl mx-auto"
                src={logo}
                alt="Catalogue-pana.svg"
              />
            </div>

            <div
              data-aos="fade-down"
              className="w-full pt-8 md:pt-0 lg:w-1/2 pb-9 md:pb-0"
            >
              <div className="lg:max-w-lg">
                <SkillBar skills={skills} height={"3vh"} colors={colors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

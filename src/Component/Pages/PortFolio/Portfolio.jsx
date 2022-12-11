import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/image1.png";
import logo2 from "../../image/image3.png";
import logo3 from "../../image/image4.png";
import logo4 from "../../image/Screenshot_4.png";
import classs from "./glass.module.css";

const Portfolio = () => {
  return (
    <div className={classs.bg_img}>
      <div className="container py-16 group">
        <h1 className="block text-center py-3 text-xl md:text-2xl font-semibold group-hover:border-b-[3px] w-[19%] mx-auto border-teal-300">
          PORTFOLIOS
        </h1>

        {/* project collection */}

        <div className={classs.gridImg}>
          <Link to="/project1" className={classs.wraper}>
            <img src={logo} alt="" />
            <div className={classs.contents}></div>
          </Link>
          <Link to="/project2" className={classs.wraper}>
            <img src={logo2} alt="" />
            <div className={classs.contents}></div>
          </Link>
          <Link to="/project3" className={classs.wraper}>
            <img src={logo3} alt="" />
            <div className={classs.contents}></div>
          </Link>
          <Link to='/project4' className={classs.wraper}>
            <img src={logo4} alt="" />
            <div className={classs.contents}></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

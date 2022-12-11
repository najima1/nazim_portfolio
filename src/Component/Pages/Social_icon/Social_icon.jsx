import React from "react";
import { Link, NavLink } from "react-router-dom";

const Social_icon = () => {
  return (
    <div className="flex items-center gap-3 mt-7">
      <a
        href="https://web.facebook.com/nazim007"
        target="_blank"
        className="w-8 h-8 rounded-full bg-[#3b5998] text-xl flex items-center justify-center text-white hover:bg-[#FDA7DF] transition-all"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a
        href="https://github.com/najima1"
        target="_blank"
        className="w-8 h-8 rounded-full bg-[#171515] text-xl flex items-center justify-center text-white hover:bg-[#FDA7DF] transition-all"
      >
        <i className="fa-brands fa-github "></i>
      </a>
      <a
        href="https://www.linkedin.com/in/nazim-uddin-409a54259/"
        target="_blank"
        className="w-8 h-8 rounded-full bg-[#0e76a8] text-xl flex items-center justify-center text-white hover:bg-[#FDA7DF] transition-all"
      >
        <i className="fa-brands fa-linkedin "></i>
      </a>
    </div>
  );
};

export default Social_icon;

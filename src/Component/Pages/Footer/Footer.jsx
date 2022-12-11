import React from "react";
import logo from "../../image/navLogo.png";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 py-8 bg-[#273c75] dark:text-gray-400">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 pb-2">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
              <img src={logo} alt="" />
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Use
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Facebook
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="py-6 text-sm text-center dark:text-gray-400">
          © 2022 - Mohammed Nazim || Front-end Developer
        </div>
      </footer>
    </div>
  );
};

export default Footer;

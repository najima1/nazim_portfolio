import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header_nav from "../Pages/Header_nav/Header_nav";

const Layout = () => {
  return (
    <div>
      {/* header navbar */}
      <Header_nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

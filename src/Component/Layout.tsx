import React from "react";
import { Outlet } from 'react-router-dom'
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;

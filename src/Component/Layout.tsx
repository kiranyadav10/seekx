import React from "react";
import { Outlet } from 'react-router-dom'
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default Layout;

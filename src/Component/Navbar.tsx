import React from "react";
import Like from "../assets/SvgImg/Like";
import Menu from "../assets/SvgImg/Menu";
import Search from "../assets/SvgImg/Search";
import Store from "../assets/SvgImg/Store";
import User from "../assets/SvgImg/User";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white px-32 py-6 shadow-3xl">
      <Menu />
      <text>Logo Here</text>
      <div className="flex justify-around gap-6">
        <Search />
        <Like />
        <Store />
        <User />
      </div>
    </nav>
  );
};

export default Navbar;

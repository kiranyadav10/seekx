import React from "react";
import { Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between bg-black px-20 py-2">
      <text className="text-white">Welcome to Our Store Hiscraves</text>
      <Link className="flex row h-2 gap-1" to="tel:+91123-456-7890">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-white text-center mt-1"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        <text className="text-white"> Call Us: 1234567890</text>
      </Link>
    </header>
  );
};

export default Header;

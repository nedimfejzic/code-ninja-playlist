import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../assets/logo.png";

export const Header = ({ ...otherProps }) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <header className="bg-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
        <Link
          to="/"
          className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                  pt-2.5 px-2.5
                "
        >
          <div className="flex items-center ">
            <div className="w-8  " >
              <img src={Logo} className="w-full" />
            </div>
            <div className="text-3xl font-extrabold text-green-900 pl-4 py-2">
              Notebook
            </div>
          </div>
        </Link>

        <div
          onClick={onClick}
          className={`
            md:hidden  text-xl font-bold uppercase text-gray-600 hover:text-green-900 hover:underline  cursor-pointer  mr-4
          `}
        >
          Menu
        </div>

        <nav
          className={`
            ${!active && "hidden"}
            absolute flex flex-col bg-white top-full w-full left-0 z-20
            md:static md:w-auto md:flex py-4
          `}
        >
          <ul className="md:flex-row md:flex">
            <li className="list-none md:mr-5">
              <Link
                to="/"
                className="flex w-full text-base font-bold uppercase text-gray-600 hover:text-green-900 cursor-pointer
                  pt-2.5 px-2.5 
                "
              >
                Home
              </Link>
            </li>

            <li className="list-none md:mr-5">
              <Link
                to="/create"
                className="flex w-full text-base font-bold uppercase text-gray-600 hover:text-green-900 cursor-pointer
                  pt-2.5 px-2.5
                "
              >
                Create
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { GiBrain } from "react-icons/gi";
import { Link } from "react-router-dom";
import { LinearGradient } from "react-text-gradients";
const Nav = () => {
  return (
    <div className="shadow-md min-w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-greenish py-4 px-4">
        <div className="flex items-center font-bold font-sans text-4xl cursor-pointer text-white">
          <Link className="flex" to={"/"}>
            <GiBrain size={35} className="mr-2 mt-1" />
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]} >
              Generative AI
            </LinearGradient>
          </Link>
        </div>
        <ul className="md:flex md:items-center text-white">
          <li className="md:ml-8 text-2xl">
            <a href="#about" className="hover:text-indigo-400 duration-300">
              {" "}
              About Us
            </a>
          </li>
          <li className="md:ml-8 text-2xl">
            <a href="#service" className="hover:text-indigo-400 duration-300">
              {" "}
              Service
            </a>
          </li>
          <li className="md:ml-8 text-2xl">
            <a href="#contact" className="hover:text-indigo-400 duration-300">
              {" "}
              Contact
            </a>
          </li>
          <li className="md:ml-8 text-2xl">
            <a href="#Blog" className="hover:text-indigo-400 duration-300">
              {" "}
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

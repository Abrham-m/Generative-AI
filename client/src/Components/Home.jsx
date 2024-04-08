import React from "react";
import AI from "../images/AI.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Zoom";
const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen min-w-screen flex flex-row-reverse items-center"
      style={{ backgroundImage: `url(${AI})` }}
    >
      <div className=" w-1/2 flex flex-col bg-indigo-300 relative bottom-10">
        <div className=" text-3xl">
          {" "}
          <Typewriter
            options={{
              strings: ["Transform your ideas into"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-3xl">
          {" "}
          <Typewriter
            options={{
              strings: ["breathtaking creations with"],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
            }}
          />
        </div>
        <div className="text-4xl font-bold">
          {" "}
          <Typewriter
            options={{
              strings: ["Generative AI"],
              autoStart: true,
              loop: false,
            }}
          />
        </div>
        <Fade>
          {" "}
          <div className="flex justify-evenly items-center relative right-10">
            <Link
              to="/login"
              className="w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;

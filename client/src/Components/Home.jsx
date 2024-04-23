import React from "react";
import AI from "../images/AI.png";
import { LinearGradient } from "react-text-gradients";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import Nav from "./Nav";
import Service from "./Service";
import AboutUs from "./AboutUs";
const Home = () => {
  return (
    <>
      <Nav />
      <div
        className="bg-cover bg-center min-h-screen min-w-screen flex flex-row-reverse items-center"
        style={{ backgroundImage: `url(${AI})` }}
      >
        <div className=" w-1/2 flex flex-col relative bottom-10 overflow-x-hidden">
          <div className="text-3xl mb-14">
            <div className="mb-4">
              <Fade cascade duration={250} delay={400}>
                Enhance Your Creative Process
              </Fade>
            </div>
            <div className="mb-4">
              <Fade cascade duration={250} delay={4000}>
                with Our Generative AI
              </Fade>
            </div>
          </div>

          <Slide direction="right" delay={7000} duration={1500}>
            <div className="flex items-center relative ml-5">
              <Link
                to="/login"
                className="w-1/4 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue_btn_color hover:bg-blue_btn_hover_color/[1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueness"
              >
                <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                  Get Started
                </LinearGradient>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
      <Service/>
      <AboutUs/>
    </>
  );
};

export default Home;

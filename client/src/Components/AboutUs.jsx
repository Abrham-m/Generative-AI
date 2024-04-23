import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <footer className="bg-gray-800 text-white py-8" id="about">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2 px-4 items-center ">
          <h4 className="text-center text-lg">About Us</h4>
          <p className="text-md">
            Generative AI is a revolutionary technology that uses algorithms to
            create unique content, from art and music to text and synthetic
            media. Discover the endless possibilities and how it can
            revolutionize industries like entertainment, design, and marketing.
            Join us in shaping the future of creativity and innovation with
            generative AI.{" "}
          </p>
        </div>
        <div
          className="w-1/2 text-center flex flex-col justify-start items-center"
          id="contact"
        >
          <h4 className="text-lg mb-2">Contact</h4>
          <div className="flex justify-between">
            <div className="mr-5">
              <FaLocationDot className="inline mr-1 -mt-2" size={18} />
              London, England
            </div>
            <div>
              <FaPhoneAlt className="inline mr-1" />
              +123 456 789
            </div>
          </div>
          <div className="flex my-4">
            <a href="gmail" className="mx-4">
              <CgMail size={32} color="red"/>
            </a>
            <a href="twitter" className="mx-4">
              <FaXTwitter size={28}  color="black"/>
            </a>
            <a href="facebook" className="mx-4">
              <FaFacebook size={28} color="blue"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutUs;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import { FaRegUserCircle } from "react-icons/fa";
const User = () => {
  const location = useLocation();
  const state = location.state || {};
  const { firstName = "Nobody", lastName = "Nobody" } = state;

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  let responseField = document.getElementById("responseField");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post("", prompt, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer `,
        },
      });
      setResponse(response.data);
      responseField.innerHTML = `<div>${response}</div>`;            
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-user_bg_color flex flex-col items-center justify-center">
        <Nav className="relative" />
        <div className="flex absolute top-[70px] right-2 text-2xl bg-gray-100 opacity-70 rounded-lg pr-1">
          <FaRegUserCircle className="my-1 mx-1" size={25} />{" "}
          {firstName + " " + (lastName ? lastName.substring(0, 1) + "." : "")}
        </div>
        <div
          className="flex flex-col w-full items-center justify-center "
          id="box"
        >
          <div className="flex flex-row items-center justify-center space-x-4 w-full">
            <textarea
              className="w-5/12 h-16 p-2 border-2 border-green-700 text-2xl rounded-lg resize-none overflow-auto shadow-md focus:outline-none focus:ring-2 focus:ring-green-700"
              rows={1}
              style={{ resize: "none", overflow: "auto" }}
              onChange={(e) => {
                setPrompt(e.target.value);
                const textarea = e.target;
                textarea.style.height = "auto";
                textarea.style.height = `${textarea.scrollHeight}px`;
              }}
            ></textarea>

            <button
              onClick={handleSubmit}
              className="text-3xl py-3 px-5 rounded-md bg-user_btn_color text-white hover:ring-2 hover:ring-blue-600 transition-colors duration-300"
            >
              Sent
            </button>
          </div>
          <div className="" id="responseField">
          
          </div>
        </div>
      </div>
    </>
  );
};

export default User;

import React, { useState } from "react";
import axios from 'axios'
import Nav from "./Nav";
const User = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response =  axios.post('',prompt,{
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer `
       }
     })
     setResponse(response.data);
     console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-user_bg_color flex items-center justify-center">
        <Nav />
        <div
          className="flex flex-col w-full items-center justify-center "
          id="box"
        >
          <div className="flex flex-row items-center justify-center space-x-4 w-full">
            <textarea
              className="w-5/12 h-16 p-2 border-2 border-pink-500 text-2xl rounded-lg resize-none overflow-auto shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={1}
              style={{ resize: "none", overflow: "auto" }}
              onChange={(e) => {
                setPrompt(e.target.value);
                const textarea = e.target;
                textarea.style.height = "auto";
                textarea.style.height = `${textarea.scrollHeight}px`;
              }}
            ></textarea>

            <button onClick={handleSubmit} className="text-3xl p-3 rounded-md ring-2 ring-blue-500 text-white hover:bg-pink-600 transition-colors duration-300">
              Sent
            </button>
          </div>
          <div>{response}</div>
        </div>
      </div>
    </>
  );
};

export default User;

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) toast.error(`Password didn't match`);
    else {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };
      try {
        const response = await axios.post(
          "http://localhost:4040/api/users",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              "Access-Control-Allow-Headers": "X-Requested-With, Content-Type",
            },
          }
        );
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-950 flex justify-center items-center px-5 py-5">
      <div className="bg-gray-800 text-gray-500 rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden">
        <form className="w-full py-10 px-5" id="form" onSubmit={handleSubmit}>
          <div className="mr-3 flex flex-row-reverse relative bottom-5 text-md text-indigo-600 hover:text-indigo-800 hover:font-bold">
            <Link to="/login">Login</Link>
          </div>
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-200 mb-2">REGISTER</h1>
            <p className="text-xl text-gray-400 font">
              Enter your information to register
            </p>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 flex flex-col mx-10">
              <label className="text-xs text-gray-300 font-semibold px-1 py-1">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                className="w-full bg-gray-300 pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="w-1/2 flex flex-col mx-10">
              <label className="text-xs text-gray-300 font-semibold px-1 py-1">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                className="w-full bg-gray-300 pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col mx-10">
              <label className="text-xs text-gray-300 font-semibold px-1 py-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                className="w-full bg-gray-300 max-w-60 pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 flex flex-col mx-10">
              <label className="text-xs text-gray-300 font-semibold px-1 py-1">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-300 pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-1/2 flex flex-col mx-10">
              <label className="text-xs text-gray-300 font-semibold px-1 py-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-300 pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full flex pt-3">
            <button
              type="submit"
              className="w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              REGISTER NOW
            </button>
          </div>
        </form>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          theme="light"
          closeOnClick={true}
          pauseOnHover={true}
          draggable={false}
          transition={Zoom}
          limit={1}
        />
      </div>
    </div>
  );
};

export default Registration;

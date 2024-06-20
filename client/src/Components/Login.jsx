import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer, Zoom } from "react-toastify";
import Nav from "./Nav"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:4040/api/auth/login",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.message); // to be deleted

      if(response.data.ok){
        navigate("/user");
      }
    } catch (error) {
      toast.error(error["message"]);
      console.log(error["message"]);
    }
  };

  return (
    <>
    <Nav/>
      <div className="min-h-screen flex justify-center items-center w-full bg-gray-950">
        <div className="bg-gray-800 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-200 ">
            Login
          </h1>
          <form action="#">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-700"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-300  mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-700"
                required
              />
              <a
                href="reference"
                class="text-sm text-gray-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                  defaultChecked
                />
                <label
                  for="remember"
                  className="ml-2 block text-sm text-gray-300 "
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/register"
                className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:offset-2 focus:ring-indigo-500"
              >
                Create Account
              </Link>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
          <div class="flex flex-row justify-center my-4">
            <span class="absolute bg-gray-800 px-4 text-gray-500">
              or sign-in with
            </span>
            <div class="w-full bg-gray-200 mt-3 h-px"></div>
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <button className="w-1/2 mx-3 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blueness/[0.7] hover:bg-blueness/[1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueness">
              <span className="mr-2">
                <FcGoogle size={20} />
              </span>{" "}
              Google
            </button>
            <button className="w-1/2 mx-3 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blueness/[0.7] hover:bg-blueness/[1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueness">
              <span className="mr-2">
                <FaGithub size={20} />
              </span>{" "}
              GitHub
            </button>
          </div>
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
    </>
  );
};

export default LoginForm;

//  headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//             "Access-Control-Allow-Headers": "X-Requested-With, Content-Type",
//           },
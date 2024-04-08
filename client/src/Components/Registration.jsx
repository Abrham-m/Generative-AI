import React from "react";
import { useState } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registration = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert(`Password didn't match`);
    } else {
      toast.success(
        "Registration complete! You can now login and explore all the exciting content on our website.",
        {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        }
      );
    }
  };
  return (
    <div className="min-h-screen min-w-screen bg-gray-900 flex justify-center items-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden">
        <div className="w-full py-10 px-5">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900 mb-2">REGISTER</h1>
            <p className="text-xl font">Enter your information to register</p>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 flex flex-col mx-10">
              <label className="text-xs font-bold px-1 py-1">First Name</label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="w-1/2 flex flex-col mx-10">
              <label className="text-xs font-bold px-1 py-1">Last Name</label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col mx-10">
              <label className="text-xs font-bold px-1 py-1">Email</label>
              <input
                type="email"
                className="w-full max-w-60 pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 flex flex-col mx-10">
              <label className="text-xs font-bold px-1 py-1">Password</label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="w-1/2 flex flex-col mx-10">
              <label className="text-xs font-bold px-1 py-1">
                Confirm Password
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full flex ">
            <button
              className="w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
              onClick={handleSubmit}
            >
              REGISTER NOW
            </button>
          </div>
        </div>
        <div></div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Registration;

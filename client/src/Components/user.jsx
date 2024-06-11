import React from "react";
import Nav from "./Nav";
const User = () => {
  return (
    <>
      <div className="min-h-screen bg-user_bg_color flex items-center justify-center">
        <Nav />
        <div
          className="flex flex-col w-full items-center justify-center border-4 border-red-500"
          id="box"
        >
          <div className="flex flex-row items-center justify-center space-x-4 w-full">
            <input type="text" className="w-5/12 h-12 text-2xl" />
            <button className="text-2xl rounded-md border-2 ">Sent</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;

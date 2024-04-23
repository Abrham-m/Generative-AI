import React from "react";

const Service = () => {
  return (
    <div
      className="w-full min-h-screen flex bg-service_color px-5 py-6"
      id="service"
    >
      <div className="h-full w-full flex-col justify-center text-center ">
        <div className="text-white text-4xl mt-16">
          <h1>Take advantages of our Service</h1>
        </div>
        <div
          className="h-full flex justify-evenly items-center  md:mt-32 text-2xl"
          id="pop"
        >
          <div className="flex-col">
            <div className="px-9 py-9 bg-service_box_color my-8 rounded-md border-2  hover:border-yellow-500  transition-all duration-900 ease-in-out">
              Creative writing
            </div>
            <div className="px-9 py-9 bg-service_box_color my-8 rounded-md border-2  hover:border-yellow-500  transition-all duration-600 ease-in-out">
              Design assistance
            </div>
          </div>
          <div className="px-9 py-9 bg-service_box_color rounded-md border-2  hover:border-yellow-500  transition-all duration-600 ease-in-out">
            Content creation
          </div>
          <div className="flex-col">
            <div className="px-9 py-9 bg-service_box_color my-8 rounded-md border-2  hover:border-yellow-500  transition-all duration-600 ease-in-out">
              Personalization
            </div>
            <div className="px-9 py-9 bg-service_box_color my-8 rounded-md border-2  hover:border-yellow-500  transition-all duration-600 ease-in-out">
              Simulation and modeling
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

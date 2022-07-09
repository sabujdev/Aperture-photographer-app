import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import notFound from "../../../Asset/images/not-found.png";

const NotFound = () => {
  return (
    <div className="bg-[#021b29] px-3 pb-20">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <img src={notFound} alt="" />
        <h2 className="text-3xl text-white mb-10">Page not found</h2>
        <Link to="/">
          <button
            className="bg-yellow-500 hover:bg-[#f2a70c] hover:shadow-md text-black px-4 py-2 rounded-full flex gap-3 items-center w-44"
          >
            <BsArrowLeft className="text-xl"></BsArrowLeft> Back to home 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

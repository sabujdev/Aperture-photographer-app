import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { id, name, details, price, image } = service;
    const navigate = useNavigate();
    const handleBookBtn = id => {
        navigate(`/service/${id}`)
    }
  return (
    <div className="text-white bg-[#021b29] hover:bg-[#042131] hover:shadow-lg px-5 py-7 rounded-md flex-1">
      <img
        src={image}
        alt=""
        className=" w-24 h-24 rounded-md border-2 border-yellow-200"
      />
      <h3 className="text-xl my-3">{name}</h3>
      <p className="text-slate-500">{details}</p>
      <h1 className="text-3xl mt-3 mb-6 text-yellow-100">${price}</h1>
      <button onClick={()=>handleBookBtn(id)}
        className="bg-yellow-500 hover:bg-[#f2a70c] hover:shadow-md text-black px-4 py-2 rounded-full flex gap-3 items-center w-36"
      >
        Book now <BsArrowRight className="text-xl"></BsArrowRight>
      </button>
    </div>
  );
};

export default Service;

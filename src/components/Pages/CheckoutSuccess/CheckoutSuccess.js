import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const CheckoutSuccess = () => {
  return (
    <div className="bg-[#021b29] px-3 pb-20 h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col items-center justify-center text-white bg-[#07273a] max-w-xl p-5 rounded-lg shadow-2xl">
        <BsCheckCircle className="text-5xl text-green-600"></BsCheckCircle>
        <h2 className="text-2xl mt-10 text-slate-300 text-center mb-2">Thank you for booking the service!</h2>
        <h2 className="text-lg text-slate-300 text-center">I'll contact you shortly.</h2>
      </div>
    </div>
  );
};

export default CheckoutSuccess;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Checkout = () => {
  const [service, setService] = useState([]);
  const [user] = useAuthState(auth);
  const { serviceId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    // process.env.PUBLIC_URL + 
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) =>
        setService(data.find((s) => s.id === parseInt(serviceId)))
      );
  }, []);

  console.log(service);

  const navigate = useNavigate();
  const handleCheckout = (data) => {
    navigate("/checkout-success");
  };

  return (
    <div className="bg-[#021b29] px-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:items-start items-center md:gap-20  py-20">
        <div className="text-white bg-[#01151f] p-5 md:p-10 w-full max-w-md rounded-lg shadow-2xl">
          <div className="flex items-center justify-between gap-5 mb-10">
            <h1 className="text-2xl">Checkout</h1>
            <div className="flex-1 w-full h-[2px] bg-yellow-600"></div>
          </div>
          <form
            onSubmit={handleSubmit(handleCheckout)}
            action=""
            className="text-right flex flex-col gap-2"
          >
            <input
              {...register("name", { required: "Name is required!" })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="text"
              name="name"
              placeholder="Name..."
              value={user.displayName}
            />
            {errors.name?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.name?.message}
              </p>
            )}
            <input
              {...register("address", { required: "Address is required!" })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="text"
              name="address"
              placeholder="Address..."
            />
            {errors.address?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.address?.message}
              </p>
            )}
            <input
              {...register("phone", { required: "Phone is required!" })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="tel"
              name="phone"
              placeholder="Phone..."
            />
            {errors.phone?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.phone?.message}
              </p>
            )}
            <input
              {...register("email", { required: "Email is required!" })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="email"
              name="email"
              placeholder="Email..."
              value={user.email}
            />
            {errors.email?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.email?.message}
              </p>
            )}
            <input
              {...register("password", { required: "Email is required!" })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="password"
              name="password"
              placeholder="Password..."
            />
            {errors.password?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.password?.message}
              </p>
            )}

            <input
              className="cursor-pointer bg-yellow-500 hover:bg-[#f2a70c] hover:shadow-md text-black px-6 py-2 rounded-full mt-4"
              type="submit"
              value="Proceed"
            />
          </form>
        </div>
        <div className="text-white p-5 bg-[#07273a] rounded-lg shadow-2xl">
          <h2 className="text-xl mb-10">Selected Service</h2>
          <img className="rounded-lg mb-1" src={service.image} alt="" style={{ maxWidth: '50px' }} />
          <div className="">
            <h4 className="text-lg">{service.name}</h4>
            <h4 className="text-2xl">${service.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

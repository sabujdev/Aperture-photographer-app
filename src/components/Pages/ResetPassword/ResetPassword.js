import React from "react";
import photographer from "../../../Asset/images/photographer.png";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleResetPassword = (data) => {
    const { email } = data;
    sendPasswordResetEmail(email);
    toast.success("Please check your inbox to reset password!");
  };

  return (
    <div className="bg-[#021b29] px-3">
      <ToastContainer></ToastContainer>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-end md:gap-20">
        <div className="text-white bg-[#01151f] p-5 md:p-10 w-full max-w-md rounded-lg my-20 shadow-2xl">
          <div className="flex items-center gap-3 mb-10">
            <h1 className="text-2xl">Reset password</h1>
            <div className="flex-1 w-full h-[2px] bg-yellow-600" style={{maxWidth:'80px'}}></div>
          </div>
          <form
            onSubmit={handleSubmit(handleResetPassword)}
            action=""
            className="text-right"
          >
            <input
              {...register("email", { required: "Please type your email!" })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full mb-3"
              type="email"
              name="email"
              placeholder="Email..."
            />
            {error && (
              <p className="text-red-400 text-left ml-5">Email is not found!</p>
            )}
            {errors.email?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.email?.message}
              </p>
            )}
            <div className=" flex justify-between items-center mt-5">
              <Link to="/login">
                <li className="flex items-center gap-3 text-slate-400 hover:text-yellow-300 hover:underline">
                  <BsArrowLeft></BsArrowLeft> Back to login
                </li>
              </Link>
              <input
                className="cursor-pointer bg-yellow-500 hover:bg-[#f2a70c] hover:shadow-md text-black px-6 py-2 rounded-full"
                type="submit"
                value={sending ? "Sending..." : "Reset"}
              />
            </div>
          </form>
        </div>
        <div className=" max-w-lg">
          <img src={photographer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

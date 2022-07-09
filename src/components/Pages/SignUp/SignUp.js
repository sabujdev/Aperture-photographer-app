import React from "react";
import photographer from "../../../Asset/images/photographer.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [pass, conPass] = watch(["password", "confirmPassword"]);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignUp = async (data) => {
    if (pass === conPass) {
      const { displayName, email, password } = data;
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName });
      await sendEmailVerification();
    }
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#021b29] px-3">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-end md:gap-20">
        <div className="text-white bg-[#01151f] p-5 md:p-10 w-full max-w-md rounded-lg my-20 shadow-2xl">
          <div className="flex items-center gap-3 mb-10">
            <h1 className="text-2xl">Sign up</h1>
            <div className="flex-1 w-full h-[2px] bg-yellow-600" style={{maxWidth:'80px'}}></div>
          </div>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            action=""
            className="text-right flex flex-col gap-2"
          >
            <input
              {...register("displayName", { required: "Name is required!" })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="text"
              name="displayName"
              placeholder="Name..."
            />
            {errors.displayName?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.displayName?.message}
              </p>
            )}
            <input
              {...register("email", { required: "Email is required!" })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="email"
              name="email"
              placeholder="Email..."
            />
            {error?.message ===
              "Firebase: Error (auth/email-already-in-use)." && (
              <p className="text-red-400 text-left ml-5">
                Email already in use!
              </p>
            )}
            {errors.email?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.email?.message}
              </p>
            )}
            <input
              {...register("password", {
                required: "Password is required!",
                minLength: { value: 6, message: "Password min length is 6" },
              })}
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
              {...register("confirmPassword")}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password..."
            />
            {conPass !== "" && conPass !== pass && (
              <p className="text-red-400 text-left ml-5">
                Password Doesn't Match
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
                value="Sign up"
              />
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
        <div className="">
          <img src={photographer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

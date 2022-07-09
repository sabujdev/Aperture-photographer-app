import React from "react";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithFacebook, fbUser, fbLoading] =
    useSignInWithFacebook(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
  if (fbLoading) {
    <Loading></Loading>
  }
  return (
    <div className="text-center">
      <div className="flex justify-center items-center gap-3 my-6 text-slate-600 text-xl">
        <div className="w-10 h-[1px] bg-slate-600"></div>
        or
        <div className="w-10 h-[1px] bg-slate-600"></div>
      </div>
      Continue with-
      <div className="social-links mt-3 flex flex-wrap justify-center items-center gap-2">
        <button onClick={()=>signInWithFacebook()} className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 py-2 px-4 rounded">
          <FaFacebookF className="text-xl"></FaFacebookF> Facebook
        </button>
        <button onClick={()=>signInWithGoogle()} className="flex items-center gap-2 bg-red-500 hover:bg-red-600 py-2 px-4 rounded">
          <FaGooglePlusG className="text-2xl"></FaGooglePlusG> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

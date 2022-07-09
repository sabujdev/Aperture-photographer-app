import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import defaultUserPic from "../../../Asset/images/user.png";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);

  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="py-14 bg-[#021b29]  text-center px-5 h-100">
      <div className="container mx-auto text-white">
        <h2 className="text-3xl text-center mb-16">Account</h2>
        <div className="flex gap-5 justify-center">
          <div className="user-pfl text-left bg-[#0a2e43] p-6 rounded-lg w-full max-w-2xl shadow-2xl">
            <img src={user.photoURL ? user.photoURL : defaultUserPic} alt="" className="rounded-full"/>
            
            <h3 className="text-xl font-semibold mt-4">
              {user.displayName ? user.displayName : "Sabuj Mahonto"}
            </h3>
            <h3 className="pt-2 mb-4">Email: {user.email}</h3>
            <button
              onClick={logout}
              className="underline text-cyan-600 hover:text-cyan-700 font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

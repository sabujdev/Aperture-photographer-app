import React, { useState } from "react";
import logo from "../../../Asset/images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const handleMobileMenu = () => {
    setVisible(!visible);
  };
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="py-6 px-3 bg-[#021b29] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" style={{ maxWidth: "150px" }} />
          </NavLink>
        </div>
        <div className="navigation relative">
          <span
            onClick={handleMobileMenu}
            className="text-white text-3xl md:hidden"
          >
            {!visible ? <RiMenu3Fill></RiMenu3Fill> : <CgClose></CgClose>}
          </span>
          <ul
            className={`${
              visible === true
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3 hidden md:flex"
            } md: md:translate-y-0 p-5 md:p-0 rounded w-36  md:w-auto transition-all bg-[#ffffff] backdrop-blur-sm md:bg-transparent absolute right-0 top-10 md:static md:opacity-100 flex flex-col md:flex-row items-start justify-right gap-4 md:gap-8 text-black md:text-white`}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f2a70c] italic"
                    : "hover:text-[#f2a70c] hover:italic"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f2a70c] italic"
                    : "hover:text-[#f2a70c] hover:italic"
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f2a70c] italic"
                    : "hover:text-[#f2a70c] hover:italic"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#f2a70c] italic"
                      : "hover:text-[#f2a70c] hover:italic"
                  }
                  to="/my-account"
                >
                  My account
                </NavLink>
              </li>
            )}

            <li>
              {!user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#f2a70c] italic"
                      : "hover:text-[#f2a70c] hover:italic"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              ) : (
                <button
                  onClick={logout}
                  className="hover:text-[#f2a70c] hover:italic"
                >
                  Logout
                </button>
              )}
            </li>
            <li className="mt-5 md:mt-0">
              {!user && (
                <NavLink
                  className="bg-yellow-500 hover:bg-[#f2a70c] hover:shadow-md text-black px-4 py-2 rounded-full"
                  to="/signup"
                >
                  Sign up
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

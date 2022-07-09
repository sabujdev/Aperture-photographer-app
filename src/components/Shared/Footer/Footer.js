import React from "react";
import {
    BsChevronRight,
    BsEnvelopeFill,
    BsFacebook,
    BsYoutube
} from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../../Asset/images/logo.svg";

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <div>
      <div className="py-10 px-3 bg-[#01151f]">
        <div className="container mx-auto flex flex-col sm:flex-row gap-5 justify-between">
          <div className="">
            <img src={logo} alt="" style={{ maxWidth: "150px" }} />
            <div className="flex gap-3 items-center text-[#010e15] mt-5">
              <Link
                className=" bg-[#07273a] hover:text-white text-lg p-3 rounded-full"
                to="/"
              >
                <BsFacebook></BsFacebook>
              </Link>
              <Link
                className=" bg-[#07273a] hover:text-white text-lg p-3 rounded-full"
                to="/"
              >
                <BsEnvelopeFill></BsEnvelopeFill>
              </Link>
              <Link
                className=" bg-[#07273a] hover:text-white text-lg p-3 rounded-full"
                to="/"
              >
                <BsYoutube></BsYoutube>
              </Link>
            </div>
          </div>
          <div className="navigation">
            <ul className=" text-white flex flex-col gap-3">
              <li>
                <Link className="hover:text-[#f2a70c] hover:italic" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#f2a70c] hover:italic"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#f2a70c] hover:italic" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white mb-3 text-xl">Newsletter</h2>
            <p className="text-white mb-3 text-slate-500">
              Subscribe to get latest offer!
            </p>
            <div className="relative flex items-center" style={{ minWidth: "250px", maxWidth:"350px" }}>
              <input
                className="py-2 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
                type="email"
                name=""
                id=""
                placeholder="Your email..."
                
              />
              <span className="bg-yellow-500 hover:bg-[#f2a70c] p-3 absolute right-0 rounded-full cursor-pointer shadow">
                <BsChevronRight className="text-xl"></BsChevronRight>
              </span>
            </div>
          </div>
        </div>
          </div>
          <div className="bg-[#011017] py-2"><p className="text-slate-800 text-center text-sm">Copyright &copy; {year}. All rights reserved by <strong>Aperture</strong> </p></div>
    </div>
  );
};

export default Footer;

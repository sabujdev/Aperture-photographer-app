import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import photographer from "../../../../Asset/images/photographer.png";

const Banner = () => {
  return (
    <div className="bg-[#021b29] px-3">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white py-16 lg:py-0">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Sabuj M,</h1>
          <h1 className="text-4xl md:text-6xl font-bold">a product photographer</h1>
          <p className="my-5 md:my-10 text-slate-500">
            Based in Bangladesh, I specialize in product photography and love to
            take photos with creativity and passion.
          </p>
          <div className="flex md:items-center flex-col md:flex-row gap-7 mt-10">
            <Link to="gallery" spy={true} smooth={true} duration={700}>
              <button className="text-black hover:italic transition-all bg-yellow-500 hover:bg-[#f2a70c] flex gap-3 items-center px-5 py-3 rounded-full">
                Explore my works
                <BsArrowRight className="text-xl"></BsArrowRight>
              </button>
            </Link>
            <div className="flex gap-2 items-center">
              <span className="flex h-4 w-4 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="rounded-full h-4 w-4 bg-yellow-500"></span>
              </span>
              <Link to="services" spy={true} smooth={true} duration={700} className="cursor-pointer">
              <button className="text-black hover:italic transition-all bg-yellow-500 hover:bg-[#f2a70c] flex gap-3 items-center px-5 py-3 rounded-full">
              Available services
               <BsArrowRight className="text-xl"></BsArrowRight>
              </button>
             </Link>
            </div>
          </div>
        </div>
        <div>
          <img src={photographer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

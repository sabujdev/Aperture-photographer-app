import React, { useState } from "react";
import {CgClose} from 'react-icons/cg'

const GalleryImage = ({ url }) => {
    const [modal, setModal] = useState(false);
  return (
    <>
      <div className={`${modal?'scale-100':'scale-0'} modal w-full h-screen fixed z-50 flex justify-center items-center overflow-hidden transition-all duration-500 top-0 left-0 bg-[#000000f0] backdrop-blur p-10`}>
              <img src={url} alt="" className=" w-auto max-w-full h-auto max-h-full block" />
              <CgClose onClick={()=>setModal(false)} className="text-white text-3xl absolute right-3 top-3 md:right-10 md:top-10 cursor-pointer"></CgClose>
      </div>
      <img
        onClick={()=>setModal(!modal)} className="transition-all duration-500 cursor-crosshair rounded-xl hover:blur-sm"
        src={url}
        alt=""
        style={{ padding: "5px" }}
      />
    </>
  );
};

export default GalleryImage;

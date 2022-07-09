import React from "react";
import image1 from "../../../../Asset/images/product-1.jpeg";
import image2 from "../../../../Asset/images/product-2.jpeg";
import image3 from "../../../../Asset/images/product-3.jpeg";
import image4 from "../../../../Asset/images/product-4.jpeg";
import image5 from "../../../../Asset/images/product-5.jpeg";
import image6 from "../../../../Asset/images/product-6.jpeg";
import image7 from "../../../../Asset/images/product-7.jpeg";

import GalleryImage from "../../Home/Gallery/GalleryImage/GalleryImage";

const imagesURL = [image1, image2, image7, image3, image4, image5, image6];
const Gallery = () => {
  return (
    <div className="bg-[#021b29] py-16 md:py-28 px-3" id="gallery">
      <div className="container mx-auto" style={{ maxWidth: "1100px" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white">My Works</h1>

        <p className="mt-5 mb-10 text-slate-500" style={{ maxWidth: "500px" }}>
          Helping businesses through photography is what makes my job
          meaningful. Explore some of my recent work down below.
        </p>
        <div className="gallery columns-1 sm:columns-2 md:columns-3 gap-0">
                  {
                      imagesURL.map((url, index) => (<GalleryImage url={url} key={index}></GalleryImage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

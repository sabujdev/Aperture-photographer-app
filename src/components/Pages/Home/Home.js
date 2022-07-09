import React from "react";
import Banner from "../../Pages/Home/Banner/Banner";
import Gallery from "../../Pages/Home/Gallery/Gallery";
import Services from "../../Pages/Home/Services/Services";
import PhotographyTools from "../../Pages/Home/PhotographyTools/PhotographyTools";

const Home = () => {
  return (
    <>
          <Banner></Banner>
          <Services></Services>
          <Gallery></Gallery>
          
          <PhotographyTools></PhotographyTools>
    </>
  );
};

export default Home;

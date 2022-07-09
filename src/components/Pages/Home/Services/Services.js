import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-[#01151f] py-16 md:py-28 px-3" id="services">
      <div className="container mx-auto" style={{ maxWidth: "1100px" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          My Services
        </h1>
        <p className="mt-5 mb-10 text-slate-500" style={{ maxWidth: "500px" }}>
          I love to take photos with creativity and passion.
        </p>
        <div className="flex flex-wrap justify-center gap-5 mx-auto">
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

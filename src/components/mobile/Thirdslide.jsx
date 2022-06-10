import React from "react";
import Noise from "../../assets/Noise.svg";

function Thirdslide() {
  return (
    <div
      className="h-[100vh] w-full"
      // style={{
      //   background: "linear-gradient(135deg, #81FFEF 0%, #F067B4 100%)",
      // }}
    >
      <div className="max-h-[80vh] font-jost text-white">
        <h1 className="sm:text-4xl pt-[10vh] text-[2rem] tracking-wider mx-10 leading-[130%] font-[900] text-center">
          <span className="text-[#FC74D0]">KudosZone</span> Token Usage
        </h1>
        <br />
        <br />
        <div className="h-[50vh] w-full">
          <img src={Noise} alt="" srcset="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Thirdslide;

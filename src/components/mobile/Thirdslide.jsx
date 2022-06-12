import React from "react";
import Noise from "../../assets/Noise.svg";
import Noise1 from "../../assets/Noise1.svg";

function Thirdslide() {
  return (
    <div
      className="h-[100vh] w-full"
      // style={{
      //   background: "linear-gradient(135deg, #81FFEF 0%, #F067B4 100%)",
      // }}
    >
      <div className="max-h-[80vh] font-jost text-white">
        <h1 className="sm:text-5xl text-4xl pt-[6vh] tracking-wider mx-10 leading-[130%] font-[900] text-left">
          <span className="text-[#FC74D0]">KudosZone</span> Token Usage
        </h1>
        <br />
        <div className="w-[90vw] h-auto mx-auto relative">
          <img
            src={Noise}
            alt=""
            srcset=""
            className="w-[90vw] h-full"
            style={{ transform: "scaleY(0.9)" }}
          />
          <img
            src={Noise1}
            alt=""
            srcset=""
            className="w-full h-full absolute top-0"
            style={{
              // background: "rgba(255, 255, 255, 0.2",
              backdropFilter: "blur(10px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Thirdslide;

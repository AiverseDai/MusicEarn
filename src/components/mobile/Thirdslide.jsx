import React from "react";
import Noise from "../../assets/Noise.svg";
import Noise1 from "../../assets/Noise1.svg";
import Mask2 from "../../assets/Mask2.png";
import Jan from "../../assets/Jan.svg";

function Thirdslide() {
  return (
    <div
      className="h-[120vh] w-full py-[10vh] relative"
      style={{
        background: `url(${Mask2})`,
        backgroundSize: "100vw 120vh",
      }}
    >
      <div className="absolute bottom-[6vh] left-[10vw]">
        <img src={Jan} alt="" srcset="" className="w-[100px] h-[100px]" />
      </div>
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

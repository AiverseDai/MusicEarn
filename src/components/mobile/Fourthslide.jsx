import React from "react";
import Next from "../../assets/Next.svg";
import Barchart from "../../assets/Barchart.svg";
import Security from "../../assets/Rec.svg";

import Mask1 from "../../assets/Mask1.png";
function Fourthslide() {
  return (
    <div
      className="min-h-[100vh] mt-[10vh] w-full"
      // style={{
      //   background: "linear-gradient(135deg, #81FFEF 0%, #F067B4 100%)",
      // }}
      style={{
        background: `url(${Mask1})`,
        backgroundSize: "100vw 100vh",
        backgroundPosition: "center center",
      }}
    >
      <div className="max-h-[80vh] font-jost text-white">
        <h1 className="sm:text-5xl text-4xl pt-[10vh] tracking-wider mx-10 leading-[130%] font-[900] text-left">
          <span className="text-[#FC74D0]">KudosZone</span> Tokenomics
        </h1>
        <br />
        <br />
        <br />
        <div className="w-[84vw] h-full mx-auto relative">
          <div
            className="w-[100vw] ml-[-8vw] absolute bottom-2 z-0 overflow-hidden"
            // style={{ filter: "blur(16px)" }}
          >
            <img
              src={Security}
              alt=""
              srcset=""
              className="w-[100vw] mx-auto"
            />
          </div>
          <div className="absolute top-[-4vh] max-h-[25vh] w-full z-[100000]">
            <div className="w-full h-[25vh]">
              <img
                src={Barchart}
                alt=""
                srcset=""
                className="mx-auto max-h-[65vh] z-[1000000]"
                // style={{ backdropFilter: "blur(50px)" }}

                //   style={{ transform: "scale(1.1)" }}
              />
            </div>
          </div>
          <div
            className="flex flex-col absolute bottom-[8vh] w-[80vw] z-[100000]"
            // style={{ backdropFilter: "blur(50px)" }}
          >
            <div className="flex my-4 justify-between">
              <div className="w-2/5 text-[20px]">
                <span className="text-[#7BD0FF] text-[16px]">3%</span> Audit
              </div>
              <div className="w-3/5 text-[20px]">
                <span className="text-[#1F93FF] text-[16px]">20%</span>{" "}
                Fundraising
              </div>
            </div>
            <div className="flex my-4 justify-between">
              <div className="w-2/5 text-[20px]">
                <span className="text-[#A139F3] text-[16px]">5%</span> Liquidity
              </div>
              <div className="w-3/5 text-[20px]">
                <span className="text-[#EF39F3] text-[16px]">7%</span> Marketing
              </div>
            </div>
            <div className="flex my-4 justify-between">
              <div className="w-2/5 text-[20px]">
                <span className="text-[#3D39F3] text-[16px]">5%</span> Team
              </div>
              <div className="w-3/5 text-[20px]">
                <span className="text-[#B41633] text-[16px]">60%</span>{" "}
                Community rewards
              </div>
            </div>
          </div>
          <img
            src={Next}
            style={{ transform: "scale(1.1)", backdropFilter: "blur(16px)" }}
            alt=""
            srcset=""
            className="w-auto h-full mx-auto"
            // style={{ backdropFilter: "blur(50px)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Fourthslide;

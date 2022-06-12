import React, { useState } from "react";
import Calendar from "../../assets/Calendar.svg";
import Projects from "../../assets/Projects.svg";
import NFTs from "../../assets/mint.svg";
import Mask1 from "../../assets/Mask1.png";
import Another from "../../assets/Another.svg";
import A from "../../assets/A.svg";

function Secondslide() {
  const slides = [
    {
      turn: 0,
      text: "Market seller",
      pic: Calendar,
    },
    {
      turn: 1,
      text: "NFT minting",
      pic: NFTs,
    },
    {
      turn: 2,
      text: "INO",
      pic: Projects,
    },
    {
      turn: 3,
      text: "Nft Staking & Rental",
      pic: Calendar,
    },
    {
      turn: 4,
      text: "NFT bridge",
      pic: NFTs,
    },
    {
      turn: 5,
      text: "NFT gift card",
      pic: Projects,
    },
  ];

  const [index, setIndex] = useState(0);
  return (
    <div
      className="w-full h-[100vh] text-white relative"
      style={{
        background: `url(${Mask1})`,
        backgroundSize: "100vw 100vh",
      }}
    >
      <div className="absolute bottom-[-3vh] left-[10vw]">
        <img src={Another} alt="" srcset="" className="w-[100px] h-[100px]" />
      </div>
      <div className="absolute bottom-[4vh] right-[10vw]">
        <img src={A} alt="" srcset="" className="w-[100px] h-[100px]" />
      </div>
      <div className="max-h-[80vh] font-jost">
        <h1 className="sm:text-5xl text-4xl pt-[10vh] tracking-wider mx-10 leading-[130%] font-[900]">
          Why <span className="text-[#FC74D0]">KudosZone</span> is Better Than
          Others
        </h1>
        <br />
        <br />
        {
          <>
            <div
              className="card mx-10 h-[350px] w-auto border-2 rounded-2xl bg-white relative"
              style={{ boxShadow: "0px 15px 50px rgba(230, 116, 185, 0.08)" }}
            >
              <img
                src={slides[index].pic}
                alt=""
                srcset=""
                className="mx-auto pt-[100px]"
              />
              <p className="pt-1 text-[#454868] text-center text-2xl font-bold">
                {slides[index].text}
              </p>
              <br />
              <div className="absolute bottom-[-20px] w-full z-[1000]">
                <div
                  className="flex w-[100px] h-[40px] bg-white mx-auto"
                  style={{ boxShadow: "10px 14px 24px rgba(1, 22, 39, 0.08)" }}
                >
                  <div
                    className="w-[49px] border-r-1 justify-center flex my-auto text-black font-bold"
                    style={{
                      boxShadow: "-10px 14px 24px rgba(1, 22, 39, 0.08)",
                    }}
                    onClick={() => {
                      if (index) {
                        setIndex(index - 1);
                      } else {
                        setIndex(5);
                      }
                    }}
                  >
                    <i
                      className="fa-solid fa-arrow-left"
                      // onClick={() => {
                      //   setIndex(5 - index);
                      //   // console.log("first");
                      // }}
                    ></i>
                  </div>
                  <div
                    className="w-[49px] border-l-1  justify-center flex my-auto text-black font-bold"
                    style={{
                      boxShadow: "-10px 14px 24px rgba(1, 22, 39, 0.08)",
                    }}
                    onClick={() => setIndex((index + 1) % 6)}
                  >
                    <i
                      className="fa-solid fa-arrow-right"
                      // onClick={() => {
                      //   setIndex((index + 1) % 6);
                      //   // console.log("second");
                      // }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default Secondslide;

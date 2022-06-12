import React, { useState } from "react";
import El from "../../assets/El.svg";
import "../../css/carousel.css";

function Sixthslide() {
  const slides = [
    {
      turn: 0,
      text: "MULTICHAIN",
      pic: El,
    },
    {
      turn: 1,
      text: "Security",
      pic: El,
    },
    {
      turn: 2,
      text: "Decentralized",
      pic: El,
    },
    {
      turn: 3,
      text: "Mutli Token Royalities",
      pic: El,
    },
    {
      turn: 4,
      text: "Low Fees",
      pic: El,
    },
  ];

  const [index, setIndex] = useState(0);
  return (
    <div
      className="w-full h-[100vh] text-white"
      // style={{
      //   background: "linear-gradient(135deg, #81FFEF 0%, #F067B4 100%)",
      // }}
    >
      <div className="max-h-[80vh] font-jost">
        <h1 className="sm:text-[3.59rem] text-[2.59rem] pt-[10vh] tracking-wider mx-6 leading-[130%] font-[900] text-center">
          What Makes <span className="text-[#FC74D0]">KudosZone</span> Special
        </h1>
        <br />
        <br />
        <br />
        {
          <>
            <div
              className="card mx-16 h-[45vh] w-auto rounded-2xl relative"
              style={{
                boxShadow: "0px 15px 50px rgba(230, 116, 185, 0.08)",
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(50px)",
              }}
            >
              <div
                className="flex justify-center items-center h-full z-[1000] relative"
                style={{ backdropFilter: "blur(250px)" }}
              >
                <div className="w-full h-full my-auto flex items-center justify-center z-[1000]">
                  <div className="flex justify-center flex-col items-center z-[1000]">
                    <i className="fa-solid fa-chart-simple fa-4x my-auto"></i>
                    <br />
                    <p className="pt-1 text-white tracking-wider text-center text-2xl font-bold">
                      {slides[index].text}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute top-[2vh] right-[-20px] flex justify-center items-center h-[40vh] w-full z-[-1] rounded-2xl"
                  style={{
                    boxShadow: "0px 15px 50px rgba(230, 116, 185, 0.08)",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(50px)",
                  }}
                ></div>
                <div
                  className="absolute top-[-40px] left-[-30px] w-[80px] h-[80px] z-0"
                  style={{
                    background:
                      "linear-gradient(162.31deg, rgba(187, 250, 150, 0.325) 2.52%, rgba(62, 166, 146, 0.5) 63.84%)",
                    backdropFilter: "blue(20px)",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>
          </>
        }
        <br />
        <div className="flex max-w-[60vw] mx-auto justify-around">
          {slides.map((item, index1) => (
            <>
              {index === index1 ? (
                <div
                  className="w-[15px] h-[15px] text-white bg-black"
                  style={{ borderRadius: "50%" }}
                  onClick={() => setIndex(index1)}
                ></div>
              ) : (
                <div
                  className="w-[15px] h-[15px] text-white bg-[#0000005f] hover:bg-black"
                  onClick={() => setIndex(index1)}
                  style={{ borderRadius: "50%" }}
                ></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sixthslide;

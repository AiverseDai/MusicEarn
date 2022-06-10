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
        <h1 className="sm:text-4xl pt-[14vh] text-[2rem] tracking-wider mx-2 leading-[130%] font-[900] text-center">
          Features Which Makes <span className="text-[#FC74D0]">KudosZone</span>{" "}
          Special
        </h1>
        <br />
        <br />
        {
          <>
            <div
              className="card mx-16 h-[380px] w-auto border-4 rounded-2xl bg-[#FC74D0] relative"
              style={{ boxShadow: "0px 15px 50px rgba(230, 116, 185, 0.08)" }}
            >
              <div className="relative">
                <img
                  src={slides[index].pic}
                  alt=""
                  srcset=""
                  className="mx-auto mt-[70px]"
                />
                <div className="absolute top-0 left-0 w-full h-full my-auto flex items-center justify-center">
                  <div className="flex justify-center items-center">
                    <i className="fa-solid fa-chart-simple fa-4x my-auto"></i>
                  </div>
                </div>
              </div>
              <br />
              <p className="pt-1 text-white tracking-wider text-center text-2xl font-bold">
                {slides[index].text}
              </p>
              <br />
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

import React from "react";
import lap from "../../assets/lap.svg";
import ppl from "../../assets/ppl.svg";
import elipse from "../../assets/ellipse.svg";
function Slide1() {
  return (
    <div className="w-full h-full">
      <div
        className="absolute top-[15vh] h-[62vh] mx-[1vw] w-[80vw]"
        style={{
          background: "linear-gradient(135deg, #81FFEF 0%, #F067B4 100%)",
          borderTopLeftRadius: "2vw",
          borderTopRightRadius: "2vw",
          borderBottomLeftRadius: "2vw",
          borderBottomRightRadius: "8vw",
        }}
      >
        <div className="flex font-jost text-white">
          <div className="w-3/5 px-6">
            <div className="pt-[10vh] pb-2 pl-6">
              <h1
                className="text-5xl text-[#FEFEFE] font-bold"
                style={{ lineHeight: "120%" }}
              >
                Buy, Sell and Stake Your NFTs
              </h1>
              <p className="text-[2.5vh]  pt-6">
                One Place Zone for All your Nft activity with a variety of
                products. Buy, create, sell, lend, staking, earn, insurance, nft
                gift card, nft bridge and more.
              </p>
              <div className="flex pt-4">
                <button
                  class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg"
                >
                  Register
                </button>
                <button
                  class="border-2 border-[rgba(255, 255, 255, 0.5)] text-white 
                font-bold py-2 px-6  ml-2 text-sm font-400 rounded-lg"
                >
                  Whitepaper
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/5 pl-4 relative">
            <img
              src={lap}
              className="absolute top-4 left-4 w-[35vh] h-[35vh]"
            />
            <img
              src={ppl}
              className="absolute top-[-4vh] right-[-4vw] w-[32vw] h-[75vh]"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[30px] right-[20vw]">
        <img
          src={elipse}
          alt=""
          className="max-h-[50px] w-[15vw]"
          style={{
            filter: "blur(40px)",
            background: "rgba(30, 30, 30, 0.61)",
          }}
        />
      </div>
    </div>
  );
}

export default Slide1;

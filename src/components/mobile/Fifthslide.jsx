import React from "react";
import fac from "../../assets/fac.svg";
import twi from "../../assets/twi.svg";
import discord from "../../assets/discord.svg";
import tele from "../../assets/tele.svg";
import ins from "../../assets/ins.svg";
import ball from "../../assets/ball.svg";
import Dot from "../../assets/dot.svg";
import Mask1 from "../../assets/Mask1.png";

function Fifthslide() {
  return (
    <div
      className="w-full h-[100vh] font-jost relative overflow-hidden"
      style={
        {
          // background: `url(${Mask1})`,
          // backgroundSize: "100vw 50vh",
          // backgroundPosition: "center center",
        }
      }
    >
      <div
        className="absolute h-[60vh] top-[16vh] right-0 w-[100vw]"
        style={{
          background: `url(${Mask1})`,
          backgroundSize: "100vw 100vh",
        }}
      ></div>
      <div className="pt-[8vh] mx-4 text-white">
        {/* <h1 className="text-center text-4xl font-bold text-black">
          Join the community
        </h1> */}
        <br />
        <div
          className="h-[20vh] flex flex-wrap rounded-xl justify-center p-4 relative"
          style={{
            boxShadow: "-7.7541px 37.6824px 108.557px rgba(126, 123, 160, 0.2)",
            backdropFilter: "blur(10px)",
            background:
              "linear-gradient(190.57deg, rgba(255, 255, 255, 0.56) 19.25%, rgba(248, 248, 255, 0.71) 54.39%, rgba(255, 255, 255, 0.59) 90.02%)",
          }}
        >
          <div className="absolute right-[-10px] top-[-10px]">
            <img src={Dot} alt="" className="w-[50px] h-[50px]" />
          </div>
          {/* <img
            src={discord}
            alt=""
            srcset=""
            className="p-3 w-[70px] my-auto"
          /> */}
          <img src={tele} alt="" srcset="" className="p-3 w-[120px] my-auto" />
          <img src={twi} alt="" srcset="" className="p-3 w-[120px] my-auto" />
          {/* <img src={ins} alt="" srcset="" className="p-3 w-[70px] my-auto" /> */}
          {/* <img src={fac} alt="" srcset="" className="p-3 w-[70px] my-auto" /> */}
        </div>

        <h1 className="text-center mt-[6vh] text-[2.59rem] font-bold text-white">
          Join Early access
        </h1>
        <p className="text-center text-xl text-white">
          Top 1,000 users with the highest Referrals will get a Free Limited
          Edition Kudo NFT. Join Early Acess.{" "}
          <span className="text-[]">How It Works?</span>
        </p>
        <div class="mt-6 w-3/4 mx-auto">
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 
                    text-gray-900 text-sm rounded-lg focus:border-blue-500 
                    block w-full p-2.5 outline-none"
            placeholder="Email address"
            required
          />
        </div>
      </div>
      <div className="absolute bottom-[-5vh] right-[-5vh] overflow-hidden">
        <img src={ball} alt="" className="w-[25vh] h-[25vh]" />
      </div>
    </div>
  );
}

export default Fifthslide;

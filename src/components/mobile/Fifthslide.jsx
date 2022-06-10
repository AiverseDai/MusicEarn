import React from "react";
import fac from "../../assets/fac.svg";
import twi from "../../assets/twi.svg";
import discord from "../../assets/discord.svg";
import tele from "../../assets/tele.svg";
import ins from "../../assets/ins.svg";

function Fifthslide() {
  return (
    <div
      className="w-full h-[100vh] font-jost"
      // style={{
      //   background: "linear-gradient(135deg, #81FFEF 0%, #F067B4 100%)",
      // }}
    >
      <div className="pt-[10vh] mx-4">
        <h1 className="text-center text-4xl font-bold text-black">
          Join the community
        </h1>
        <br />
        <div className="h-[180px] flex flex-wrap rounded-xl justify-center p-4">
          <img
            src={discord}
            alt=""
            srcset=""
            className="p-3 w-[110px] my-auto"
          />
          <img src={tele} alt="" srcset="" className="p-3 w-[110px] my-auto" />
          <img src={twi} alt="" srcset="" className="p-3 w-[110px] my-auto" />
          <img src={ins} alt="" srcset="" className="p-3 w-[110px] my-auto" />
          <img src={fac} alt="" srcset="" className="p-3 w-[110px] my-auto" />
        </div>
        <br />
        <br />
        <h1 className="text-center mt-[6vh] text-4xl font-bold text-black">
          Join Early access
        </h1>
        <br />
        <br />
        <p className="text-center text-xl text-white">
          Top 1,000 users with the highest Referrals will get a Free Limited
          Edition Kudo NFT. Join Early Acess.{" "}
          <span className="text-[]">How It Works?</span>
        </p>
        <br />
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
    </div>
  );
}

export default Fifthslide;

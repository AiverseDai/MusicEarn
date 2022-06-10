import React from "react";
import fac from "../../assets/fac.svg";
import twi from "../../assets/twi.svg";
import discord from "../../assets/discord.svg";
import tele from "../../assets/tele.svg";
import ins from "../../assets/ins.svg";
// import fac from "../assets/fac.svg";

function Slide6() {
  return (
    <div className="overflow-x-hidden w-full text-[#464646]  h-full font-jost">
      <div className="px-[5vw]">
        <div className="text mt-10">
          <h1 className="font-[900] text-4xl">Join the community</h1>
          <br />
          <div
            className="min-h-[120px] mr-[5vw] flex flex-wrap rounded-xl justify-between p-4"
            style={{
              background:
                "linear-gradient(226.27deg, #FC74D0 -10.19%, #49B9F8 -10.17%, #9F54FF -10.16%, #FF69BD 104.85%)",
            }}
          >
            <img
              src={discord}
              alt=""
              srcset=""
              className="m-2 max-h-[80px] my-auto"
            />
            <img
              src={tele}
              alt=""
              srcset=""
              className="m-2 max-h-[80px] my-auto"
            />
            <img
              src={twi}
              alt=""
              srcset=""
              className="m-2 max-h-[80px] my-auto"
            />
            <img
              src={ins}
              alt=""
              srcset=""
              className="m-2 max-h-[80px] my-auto"
            />
            <img
              src={fac}
              alt=""
              srcset=""
              className="m-2 max-h-[80px] my-auto"
            />
          </div>
          <br />
          <br />
          <div className="flex">
            <div className="w-1/2 p-2 text-center">
              <h1 className="text-3xl font-black pb-2">Join Early Access</h1>
              <p className="text-[15px] px-4 text-[#898CA9]">
                Top 1,000 users with the highest Referrals will get a Free
                Limited Edition Kudo NFT. Join Early Acess.
                <span className=""> How It Works?</span>
                <br />
                <div class="mt-6 w-1/2 mx-auto">
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
              </p>
            </div>
            <div className="w-1/2 p-2 text-center">
              <div className="p-4 flex flex-wrap">
                <button
                  class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  m-4 font-400 rounded-lg my-2 w-[140px]"
                >
                  Jobs
                </button>
                <button
                  class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  m-4 font-400 rounded-lg my-2 w-[140px]"
                >
                  FAQs
                </button>
                <button
                  class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  m-4 font-400 rounded-lg my-2 w-[140px]"
                >
                  Terms
                </button>
                <button
                  class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  m-4 font-400 rounded-lg my-2 w-[140px]"
                >
                  Privacy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide6;

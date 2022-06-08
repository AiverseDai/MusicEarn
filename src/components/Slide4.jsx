import React from "react";
import kudo1 from "../assets/kudo2.svg";
import NFT from "../assets/NFTs.svg";
import launchpads from "../assets/launchpads.svg";
import re from "../assets/re.svg";

function Slide4() {
  return (
    <div className="py-10 h-full font-jost relative">
      <div className="flex h-full">
        <div className="w-2/5 h-full justify-center flex">
          <img
            src={kudo1}
            alt=""
            style={{ transform: "scale(1.3)" }}
            className="mx-4 max-h-[60vh] my-auto pb-[2vh]"
          />
        </div>
        <div className="mt-16 w-3/5 pr-[10vw]">
          <h1 className="text-5xl leading-[110%] font-bold text-[#454868] tracking-wider">
            <span className="text-[#FC74D0]">KudosZone</span> Token Usage
          </h1>
          <br />
          <div className="flex flex-wrap mr-[4vw]">
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Partner Projects Airdrop
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Marketplace token
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Staking Rewards
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Rental Fee Reimbursement
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Liquidity Mining Rewards
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              NFT Launchpad
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[10vh] right-[30vw]">
        <img src={NFT} alt="" className="max-h-[70px]" />
      </div>
      <div className="absolute top-[5vh] right-[12vw]">
        <img src={launchpads} alt="" className="max-h-[30px]" />
      </div>
      <div className="absolute top-[12vh] right-[24vw]">
        <img src={re} alt="" className="max-h-[30px]" />
      </div>
    </div>
  );
}

export default Slide4;

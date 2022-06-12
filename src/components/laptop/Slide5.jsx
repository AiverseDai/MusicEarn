import React from "react";
import kudo1 from "../../assets/kudo2.svg";
import re from "../../assets/re.svg";
import auditing from "../../assets/auditing.svg";
import com from "../../assets/com.svg";
import per from "../../assets/per.svg";

function Slide5() {
  return (
    <div className="py-10 h-full font-jost relative">
      <div className="flex h-full">
        <div className="w-2/5 h-full justify-center flex">
          <img
            src={kudo1}
            alt=""
            style={{ transform: "scale(1.3)" }}
            className="mx-4 max-h-[60vh] my-auto pb-[2vh] rotatecircle"
          />
        </div>
        <div className="mt-16 w-3/5 pr-[10vw]">
          <h1 className="text-5xl leading-[110%] font-bold text-[#454868] tracking-wider">
            <span className="text-[#FC74D0]">KudosZone</span> Tokenomics
          </h1>
          <br />
          <div className="flex flex-wrap mr-[4vw]">
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Audit - 3%
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Team - 5%
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Liquidity 5%
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Marketing - 5%
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Community Rewards- 60%
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Fundraising - 22%
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-[7vh] right-[24vw]">
        <img src={re} alt="" className="max-h-[30px]" />
      </div>
      <div className="absolute bottom-[20vh] right-[24vw]">
        <img src={com} alt="" className="max-h-[30px]" />
      </div>
      <div className="absolute bottom-[12vh] left-[24vw]">
        <img src={per} alt="" className="max-h-[50px]" />
      </div>
      <div className="absolute top-[5vh] left-[10vw]">
        <img src={auditing} alt="" className="max-h-[30px]" />
      </div>
    </div>
  );
}

export default Slide5;

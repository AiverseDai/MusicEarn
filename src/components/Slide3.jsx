import React from "react";
import kudo1 from "../assets/kudo1.svg";

function Slide3() {
  return (
    <div className="py-10 h-full font-jost">
      <div className="flex h-full">
        <div className="w-2/5 h-full justify-center flex">
          <img
            src={kudo1}
            alt=""
            className="mx-4 max-h-[60vh] my-auto pb-[2vh]"
          />
        </div>
        <div className="mt-10 w-3/5 pr-[10vw]">
          <h1 className="text-5xl leading-[110%] font-bold text-[#454868] tracking-wider">
            Some Features Which Makes{" "}
            <span className="text-[#FC74D0]">KudosZone</span> Special
          </h1>
          <br />
          <div className="flex flex-wrap mr-[4vw]">
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Multichain
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Low Platform Fee
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Fully Security
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Decentralised
            </button>
            <button
              class="bg-[#FC74D0] text-white text-sm
                 font-bold py-2 px-6  mr-2 font-400 rounded-lg my-2"
            >
              Multi Token Royalties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide3;

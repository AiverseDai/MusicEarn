import React from "react";
import Calendar from "../assets/Calendar.svg";
import Projects from "../assets/Projects.svg";
import NFTs from "../assets/mint.svg";

function Slide2() {
  return (
    <div className="w-full h-full">
      <div className="p-4">
        <div className="flex flex-col">
          <div className="flex h-1/2">
            <div className="w-1/4">
              <h1 className="text-[#454868] font-jost text-3xl font-[900] pb-2">
                Why we are better than others
              </h1>
              <p className="text-sm font-jost text-[#454868]">
                KudosZone is a platform for all in one zone for performing all
                nft like create, buy, sell, nft staking, lend nft, borrow nft
                with fixed renting fee for passive income,
                <br />
                The biggest difference between non-fungible token (NFT) and
                fungible token (FT) is that FT usually has only financial value
                and can only be used for trading, staking, etc.
              </p>
            </div>
            <div className="w-1/4">
              <div className="mx-10 border-2 border-white mt-[20%] h-[80%] rounded-xl">
                <img
                  src={Calendar}
                  alt=""
                  srcset=""
                  className="w-[100px] mx-auto my-2"
                  style={{ transform: "scale(1.3)" }}
                />
                <h1 className="text-[#454868] font-jost text-center font-bold text-xl">
                  Market place
                </h1>
              </div>
            </div>
            <div className="w-1/4">
              <div className="mx-10 border-2 border-white mt-[40%] h-[80%] rounded-xl">
                <img
                  src={NFTs}
                  alt=""
                  srcset=""
                  className="w-[100px] mx-auto my-2"
                  style={{ transform: "scale(0.9)" }}
                />
                <h1 className="text-[#454868] font-jost text-center font-bold text-xl">
                  NFT minting
                </h1>
              </div>
            </div>
            <div className="w-1/4">
              <div className="mx-10 border-2 border-white mt-[20%] h-[80%] rounded-xl">
                <img
                  src={Projects}
                  alt=""
                  srcset=""
                  className="w-[100px] mx-auto py-2"
                  style={{ transform: "scale(1.3)" }}
                />
                <h1 className="text-[#454868] font-jost text-center font-bold text-xl">
                  INO
                </h1>
              </div>
            </div>
          </div>
          <div className="flex h-1/2">
            <div className="w-1/4">
              <div className="mx-10 border-2 border-white mt-[20%] h-[70%] rounded-xl">
                <img
                  src={Calendar}
                  alt=""
                  srcset=""
                  className="w-[100px] mx-auto my-2"
                  style={{ transform: "scale(1.3)" }}
                />
                <h1 className="text-[#454868] font-jost text-center font-bold text-xl">
                  NFT Insurance
                </h1>
              </div>
            </div>
            <div className="w-1/4">
              <div className="mx-10 border-2 border-white h-[80%] rounded-xl">
                <img
                  src={Calendar}
                  alt=""
                  srcset=""
                  className="w-[100px] mx-auto my-2"
                  style={{ transform: "scale(1.3)" }}
                />
                <h1 className="text-[#454868] font-jost text-center font-bold text-xl">
                  Nft Staking & Rental
                </h1>
              </div>
            </div>
            <div className="w-1/4">
              <div className="mx-10 mt-[20%] h-[80%] rounded-xl">
                <img
                  src={NFTs}
                  alt=""
                  srcset=""
                  className="w-[100px] mx-auto my-2"
                  style={{ transform: "scale(0.9)" }}
                />
                <h1 className="text-[#454868] font-jost text-center font-bold text-xl">
                  NFT bridge
                </h1>
              </div>
            </div>
            <div className="w-1/4">
              <div className="mx-10 border-2 border-white h-[80%] rounded-xl">
                <img
                  src={Projects}
                  alt=""
                  srcset=""
                  className="w-[100px] mx-auto py-2"
                  style={{ transform: "scale(1.3)" }}
                />
                <h1 className="text-[#454868] font-jost text-center font-bold text-xl">
                  NFT gift card
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide2;

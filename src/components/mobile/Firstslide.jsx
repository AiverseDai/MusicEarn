import React from "react";
import sand from "../../assets/Exclude.svg";
import ppl from "../../assets/Toffe.svg";
import Web3 from "web3/dist/web3.min.js";
import Web3Modal from "web3modal";
import Path from "../../assets/Path.svg";
import Sv from "../../assets/Sv.png";

function Firstslide({ setWalletAddress, walletAddress }) {
  const providerOptions = {
    metmask: {
      package: true,
    },
    binancechainwallet: {
      package: true,
    },
  };
  const web3Modal = new Web3Modal({
    network: "rinkeby",
    // theme: "dark",
    cacheProvider: true,
    providerOptions,
  });
  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    await window.ethereum.send("eth_requestAccounts");
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setWalletAddress(account);
  };
  React.useEffect(() => {
    if (walletAddress) {
      connectWallet();
    }
  }, []);
  return (
    <div
      className="w-full pt-[6vh] h-full min-h-[100vh]"
      // style={{
      //   background: "linear-gradient(135deg, #81FFEF 0%, #F067B4 100%)",
      // }}
    >
      <div className="pt-2 relative">
        <img
          src={Sv}
          alt=""
          srcset=""
          className="max-h-[50vh] w-[80vw] mx-auto"
        />

        {/* <img
          src={Sv}
          alt=""
          srcset=""
          className="absolute top-[-1vh] right-[5vw] max-h-[15vh] w-auto mx-auto"
        /> */}
        <div className="text-white font-jost absolute top-[25vh]">
          <h1 className="sm:text-[3.59rem] text-[2.59rem] leading-[120%] tracking-wider mx-8 font-[700]">
            Buy, Sell <br />
            And Stake Your NFTs
          </h1>
          <br />
          <p className="text-lg font-[500] mx-8 tracking-wide">
            One Place Zone for All your Nft activity with a variety of products.
            Buy, create, sell, lend, staking, earn, insurance, nft gift card,
            nft bridge and more.
          </p>
          <br />
          <div className="flex flex-col mx-10">
            {/* <button
              class="bg-[#FC74D0] text-white text-[20px]
                  py-2 my-2 px-6  font-400 rounded-lg w-[180px] mx-auto"
              onClick={connectWallet}
            >
              {walletAddress
                ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(
                    walletAddress.length - 5,
                    walletAddress.length
                  )}`
                : "Connect"}
            </button> */}
            {/* <br /> */}
            <a href="https://drive.google.com/file/d/1jqvx-wLFYmU2tRj_BXL5wcBec6zGed_l/view">
              <button
                class="text-white 
                 py-2 my-2 px-6 text-[20px] font-400 rounded-lg w-[180px] mx-auto border-b-8 border-[#3E2BB7]"
                style={{
                  background:
                    "linear-gradient(95.71deg, rgba(255, 188, 204, 0.7) 2.77%, rgba(96, 107, 255, 0.231) 99.19%)",
                  borderRadius: "25px",
                }}
              >
                Pitchdeck
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstslide;

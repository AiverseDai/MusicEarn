import React from "react";
import sand from "../../assets/sand.svg";
import ppl from "../../assets/ppl.svg";
import Web3 from "web3/dist/web3.min.js";
import Web3Modal from "web3modal";

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
          src={ppl}
          alt=""
          srcset=""
          className="max-h-[30vh] w-auto mx-auto"
        />
        <img
          src={sand}
          alt=""
          srcset=""
          className="absolute top-[10vh] left-[15vw] max-h-[15vh] w-auto mx-auto"
        />
      </div>
      <div className="text-white font-jost">
        <h1 className="sm:text-4xl text-3xl tracking-wider mx-4 font-[900] text-center">
          Buy, Sell And Stake Your NFTs
        </h1>
        <br />
        <p className="text-lg font-[600] mx-4 text-center tracking-wide">
          One Place Zone for All your Nft activity with a variety of products.
          Buy, create, sell, lend, staking, earn, insurance, nft gift card, nft
          bridge and more.
        </p>
        <br />
        <div className="flex flex-col mx-10">
          <button
            class="bg-[#FC74D0] text-white text-[16px]
                  py-2 my-2 px-6  font-400 rounded-lg w-[140px] mx-auto"
            onClick={connectWallet}
          >
            {walletAddress
              ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(
                  walletAddress.length - 5,
                  walletAddress.length
                )}`
              : "Connect"}
          </button>
          {/* <br /> */}
          <button
            class="border-2 border-[rgba(255, 255, 255, 0.5)] text-white 
                 py-2 my-2 px-6 text-[16px] font-400 rounded-lg w-[140px] mx-auto"
          >
            Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
}

export default Firstslide;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3/dist/web3.min.js";
import Web3Modal from "web3modal";

function Header({ setWalletAddress, walletAddress }) {
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
    <div className="font-robo h-[5vh] flex fixed mr-[1vw] mt-[2vh] mb-[3vh] ml-[5vw]  z-[100000000] p-4 w-[94vw]">
      <div className="w-2/5 invisible">Hello</div>
      <div className="w-1/2 flex justify-between">
        <div className="flex  text-[#6F6F6F] invisible">
          <Link
            to="/createnftcollection"
            className="mx-2 font-bold tracking-wider font-robo my-auto cursor-pointer"
          >
            Create
          </Link>
          <Link
            to="/createnftcollection"
            className="mx-2 font-bold tracking-wider font-robo my-auto cursor-pointer"
          >
            Marketplace
          </Link>
          <Link
            to="/createnftcollection"
            className="mx-2 font-bold tracking-wider font-robo my-auto cursor-pointer"
          >
            Staking
          </Link>
          <Link
            to="/createnftcollection"
            className="mx-2 font-bold tracking-wider font-robo my-auto cursor-pointer"
          >
            Account
          </Link>
        </div>
        {/* <div> */}
        <button
          class="py-1 text-black tracking-wider font-bold
         px-4 font-300 my-auto rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, #FDD3D5 0%, #F0C3FE 46.27%, #DBEEFF 96.47%)",
            boxShadow: "0px 20px 25px rgba(207, 167, 247, 0.3)",
            border: "3px solid #FFFFFF",
          }}
          onClick={connectWallet}
        >
          {walletAddress
            ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(
                walletAddress.length - 5,
                walletAddress.length
              )}`
            : "Connect"}
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;

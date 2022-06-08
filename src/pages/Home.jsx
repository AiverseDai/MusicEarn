import React from "react";
import Header from "../components/common/Header";
import FullpageWrapper from "../components/common/Wrapper";
import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";

function Home({ walletAddress, setWalletAddress }) {
  return (
    <>
      <Header
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
      />
      <FullpageWrapper />
      <div className="fixed top-0 left-0 w-[5vw] h-full flex flex-col justify-between z-[100000000]">
        <img src={logo} alt="" srcset="" className="mx-3 mt-4 w-auto h-auto" />
        <div className="flex flex-col max-h-[300px] mx-3 mb-4 justify-around ">
          <img src={insta} alt="" className="max-w-[20px] mx-auto my-2" />
          <img src={fb} alt="" className="max-h-[20px] mx-auto my-2" />
          <img src={twitter} alt="" className="max-w-[20px] mx-auto my-2" />
        </div>
      </div>
    </>
  );
}

export default Home;

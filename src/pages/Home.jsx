import React from "react";
import Header from "../components/common/Header";
import FullpageWrapper from "../components/common/Wrapper";
import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import Mask1 from "../assets/Mask1.png";
import twitter from "../assets/twitter.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Firstslide from "../components/mobile/Firstslide";
import Secondslide from "../components/mobile/Secondslide";
import Thirdslide from "../components/mobile/Thirdslide";
import Fourthslide from "../components/mobile/Fourthslide";
import useScrollDirection from "../hooks/useScrollDirect";
import Fifthslide from "../components/mobile/Fifthslide";
import Sixthslide from "../components/mobile/Sixthslide";

function Home({ walletAddress, setWalletAddress }) {
  const { height, width } = useWindowDimensions();
  const { scrollDirection, scrollPos } = useScrollDirection();
  return (
    <>
      {width < 768 ? (
        <>
          <div
            className="w-full min-h-[100vh]"
            style={{
              background: "linear-gradient(270.9deg, #4E41CB 0%, #C694C9 100%)",
            }}
          >
            <Firstslide
              setWalletAddress={setWalletAddress}
              walletAddress={walletAddress}
            />
            <Secondslide />
            <Sixthslide />
            <Thirdslide />
            <div
            // style={{
            //   background: `url(${Mask1})`,
            //   backgroundSize: "100vw 100vh",
            // }}
            >
              <Fourthslide />
              <Fifthslide />
            </div>
          </div>
          <div className={`fixed top-[2vh] left-[2vh]`}>
            <img src={logo} alt="" srcset="" className="w-[40px]" />
          </div>
          <div
            className={`fixed bottom-16 mx-[6vw] w-[88vw] bg-white min-h-[60px] flex align-middle justify-between border z-[10000000]`}
            style={{ borderRadius: "40px" }}
          >
            <div className="flex justify-between w-full sm:mx-28 mx-8 text-[22px]">
              <h1 className="my-auto hover:text-[#4181FF]">
                <i class="fa-solid fa-house"></i>
              </h1>
              <h1 className="my-auto hover:text-[#4181FF]">
                <i class="fa-solid fa-chart-simple"></i>
              </h1>
              <h1 className="my-auto hover:text-[#4181FF]">
                <i class="fa-solid fa-credit-card"></i>
              </h1>
              <h1 className="my-auto hover:text-[#4181FF]">
                <i class="fa-solid fa-gear"></i>
              </h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header
            walletAddress={walletAddress}
            setWalletAddress={setWalletAddress}
          />
          <FullpageWrapper />
          <div className="fixed top-0 left-0 w-[5vw] h-full flex flex-col justify-between z-[100000000]">
            <img
              src={logo}
              alt=""
              srcset=""
              className="mx-3 mt-4 w-auto h-auto"
            />
            <div className="flex flex-col max-h-[300px] mx-3 mb-4 justify-around ">
              <img src={insta} alt="" className="max-w-[20px] mx-auto my-2" />
              <img src={fb} alt="" className="max-h-[20px] mx-auto my-2" />
              <img src={twitter} alt="" className="max-w-[20px] mx-auto my-2" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;

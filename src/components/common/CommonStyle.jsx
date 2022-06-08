import React from "react";
import logo from "../../assets/logo.svg";
import Header from "./Header";
import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";

function CommonStyle({ children }) {
  return (
    <div className="section w-[100vw] h-[100vh] m-0 bg-[#CACACA]">
      <div className="absolute top-0 left-0 w-[5vw] h-full flex flex-col justify-between">
        <img src={logo} alt="" srcset="" className="mx-3 mt-4 w-auto h-auto" />
        <div className="flex flex-col max-h-[300px] mx-3 mb-4 justify-around ">
          <img src={insta} alt="" className="max-w-[20px] mx-auto my-2" />
          <img src={fb} alt="" className="max-h-[20px] mx-auto my-2" />
          <img src={twitter} alt="" className="max-w-[20px] mx-auto my-2" />
        </div>
      </div>
      <div
        className="mr-[1vw] mt-[2vh] mb-[3vh] ml-[5vw] h-[95vh] w-[94vw] rounded-2xl p-4"
        style={{
          background:
            "linear-gradient(115.68deg, #FFFFFF -15.64%, #FFFFFF 108.26%)",
        }}
      >
        <Header />
        {children}
      </div>
    </div>
  );
}

export default CommonStyle;

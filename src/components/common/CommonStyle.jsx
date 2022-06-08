import React from "react";

function CommonStyle({ children }) {
  return (
    <div className="section w-[100vw] h-[100vh] m-0 bg-[#CACACA]">
      <div
        className="mr-[1vw] mt-[2vh] mb-[3vh] ml-[5vw] h-[95vh] w-[94vw] rounded-2xl p-4"
        style={{
          background:
            "linear-gradient(115.68deg, #FFFFFF -15.64%, #FFFFFF 108.26%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default CommonStyle;

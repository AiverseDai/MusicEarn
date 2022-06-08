import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="font-robo h-[5vh] flex">
      <div className="w-2/5 invisible">Hello</div>
      <div className="w-1/2 flex justify-between">
        <div className="flex  text-[#6F6F6F]">
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
            Staking
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
        >
          Connect
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;

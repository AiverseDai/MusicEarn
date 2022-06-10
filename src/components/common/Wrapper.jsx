import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import "../../css/styles.css";
import CommonStyle from "./CommonStyle";
import Slide1 from "../laptop/Slide1";
import Slide2 from "../laptop/Slide2";
import Slide3 from "../laptop/Slide3";
import Slide4 from "../laptop/Slide4";
import Slide5 from "../laptop/Slide5";
import Slide6 from "../laptop/Slide6";

const anchors = [
  "firstSlide",
  "secondSlide",
  "thirdSlide",
  "fourthSlide",
  "fifthSlide",
  "sixthSlide",
];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    onLeave={(origin, destination, direction) => {
      // console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <CommonStyle children={<Slide1 />} />
          <CommonStyle children={<Slide2 />} />
          <CommonStyle children={<Slide3 />} />
          <CommonStyle children={<Slide4 />} />
          <CommonStyle children={<Slide5 />} />
          <CommonStyle children={<Slide6 />} />
        </div>
      );
    }}
  />
);

export default FullpageWrapper;

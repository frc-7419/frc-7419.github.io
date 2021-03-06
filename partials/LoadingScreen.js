import React from "react";
import GoodRobot2020 from "../public/static/images/GoodRobot2020.js";
import Transition from "../utils/Transition.js";
import { Audio } from "react-loader-spinner";
const LoadingScreen = () => {
  return (
    <>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
      <div className="fixed top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
        {/* <GoodRobot2020 className="animate-spin" size="16rem" color="#FFFFFF" autoSpin={true}/> */}
        {/* <img
          className=" animate-spin"
          src="/static/images/goodrobot2020.png"
        ></img> */}
        <Audio height="100" width="100" color="black" ariaLabel="loading" />
      </div>
    </>
  );
};

export default LoadingScreen;

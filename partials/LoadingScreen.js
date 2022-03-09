import React from "react";
import GoodRobot2020 from '../public/static/images/GoodRobot2020.js';

const LoadingScreen = () => {
  return (
    <div className="mx-auto">
        <GoodRobot2020 className="animate-spin" size="16rem" color="#ADD8E6" autoSpin={true}/>
    </div>
  );
};

export default LoadingScreen;

import React from "react";
import { animated } from "react-spring";
import useBoop from "../utils/UseBoop";
const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;

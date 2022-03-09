/**
 * // useWindowDimension.js
 * * This hook returns the viewport/window height and width
 */

import { useEffect, useState } from "react";

const WindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export default WindowDimensions;

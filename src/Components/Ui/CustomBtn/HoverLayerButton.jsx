import React from "react";
import { motion as Motion } from "../../../Shared/Libs";

export const HoverLayerButton = ({
  children ,
  className ,
  textSize ,  
  bg_during_hover ,
  bg_before_hover ,
  type = "button",
}) => {
  return (
    <Motion.button
      type={type}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative h-10 overflow-hidden rounded-lg border border-main-color ${ bg_before_hover } px-6 py-1 font-bold text-main-color ${className}`}
    >
      <Motion.span
        variants={{
          rest: { width: 0, height: 0, opacity: 0 },
          hover: { width: 200, height: 96, opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`absolute inset-0 m-auto rounded-4xl ${bg_during_hover}`}
      />

      <Motion.span
        variants={{
          rest: { color:  "#d9a520" },
          hover: { color: "#ffffff" },
        }}
        className={`relative z-10 font-medium ${textSize}`}
      >
        {children}
      </Motion.span>
    </Motion.button>
  );
};

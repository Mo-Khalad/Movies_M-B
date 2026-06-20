import React from "react";
//import { motion as Motion } from "@/src/Shared/Libs";
import { motion as Motion } from "@/Shared/Libs";
import { NavLink } from '@/Shared/Libs'

export const HoverLayerButton = ({
  children ,
  className ,
  textSize ,  
  bg_during_hover ,
  bg_before_hover ,
  color_before_hover ,
  color_during_hover ,
  type = "button",
}) => {
  
  return (
   <NavLink to={'/login'}>
       <Motion.button
      type={type}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative h-10 overflow-hidden rounded-lg border border-main-color px-6 py-1 font-bold text-main-color ${className}`}
    >
      <Motion.span
        variants={{
          rest: { width: 0, height: 0, opacity: 0 },
          hover: { width: 200, height: 96, opacity: 1 },
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`absolute inset-0 m-auto rounded-4xl bg-main-color`}
      />

      <Motion.span
        variants={{
          rest: { color: '#d9a520'},
          hover: { color:'#f4f4f4' },
        }}
        className={`relative z-10 font-medium ${textSize}`}
      >
        {children}
      </Motion.span>
    </Motion.button>
    
   </NavLink> 
  
  );
};

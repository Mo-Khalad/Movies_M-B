import React from "react";
import { motion as Motion } from "../../Shared/Libs";
import { HoverLayerButton } from "../../components/Ui/CustomBtn/HoverLayerButton";

export const MainContent = () => {
  return (
    <div
    viewport={{ once: true }}
      className="w-full h-screen  bg-[url('/src/assets/images/hero.webp')] bg-cover
       bg-center bg-no-repeat relative flex justify-center overflow-hidden items-center"
    >
      <div className="absolute inset-0 bg-gray-950 opacity-40"></div>

      <Motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 1 , delay:0.1}}
       className="relative z-20 flex flex-wrap justify-center items-center">
        <h1
          className="text-center w-full 
        font-extrabold text-5xl sm:text-6xl md:text-8xl mb-8 text-transparent bg-clip-text bg-linear-to-r from-[#d9a520] via-[#f1c857] to-[#d9a520]
        "
        >
          Cinematic Royale
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 text-center">
          Unlimited movies, TV shows, and more
          <br />
          Premium stories. Exclusive access. Pure cinematic excellence.
        </p>
        <div className="w-full text-center mt-8 flex justify-center">
            <HoverLayerButton className="w-40 h-14 me-10" 
            bg_during_hover={'bg-white'}
            color_during_hover={'#ffffff'}
            bg_before_hover={'bg-[#d9a520]'} 
            > Get Start </HoverLayerButton>
            <HoverLayerButton className="w-40 h-14" textSize={"text-xl" }
             bg_before_hover={'bg-white'}
             bg_during_hover={'bg-transparent'}
             color_during_hover={'#d9a520'}
            >More info</HoverLayerButton>
        </div>
      </Motion.div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -bottom-15 left-0 right-0 w-full"
      >
        <path
          fill="#000"
          d="M0,224L120,197.3C240,171,480,117,720,122.7C960,128,1200,
          192,1320,224L1440,256L1440,320L0,320Z"
        />

        <Motion.path
          d="M0,224L120,197.3C240,171,480,117,720,122.7C960,128,1200,192,1320,224L1440,256"
          stroke="#d9a52055"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

    </div>
  );
};

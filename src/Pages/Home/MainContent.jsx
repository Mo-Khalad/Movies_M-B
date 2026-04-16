import React from "react";

export const MainContent = () => {
  return (
    <div
      className="w-full h-screen  bg-[url('/src/assets/images/hero.webp')] bg-cover
       bg-center bg-no-repeat relative flex justify-center overflow-hidden items-center"
    >
      <div className="absolute inset-0 bg-gray-950 opacity-40"></div>
     

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute -bottom-15 left-0 right-0 w-full"><path fill="#000" fill-opacity="1" d="M0,224L120,197.3C240,171,480,117,720,122.7C960,128,1200,192,1320,224L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path><path stroke="#d9a52055" stroke-width="2" fill="none" class="strok-1 strok-main" d="M0,224L120,197.3C240,171,480,117,720,122.7C960,128,1200,192,1320,224L1440,256" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></svg>

      <div className="relative z-20 flex flex-wrap justify-center items-center">
        <h1 className="text-center w-full 
        font-extrabold text-5xl sm:text-6xl md:text-8xl mb-8 text-transparent bg-clip-text bg-linear-to-r from-[#d9a520] via-[#f1c857] to-[#d9a520]
        ">Cinematic Royale</h1>
        <p className="text-xl md:text-2xl text-gray-400 text-center">Unlimited movies, TV shows, and more<br/>
        Premium stories. Exclusive access. Pure cinematic excellence.</p>
        <div className="w-full text-center mt-8">
          <button className="btn btn-outline btn-warning m-3">Warning</button>
          <button className="btn btn-outline btn-warning m-3">Warning</button>

        </div>
      </div>


    </div>
  );
};
/*
  <div className="absolute inset-x-0 z-30 h-96 bg-base-100 radius-50 h">
      </div>
      <div className="absolute inset-x-0 z-20 h-96 radius-50 h2">
      </div>

 */
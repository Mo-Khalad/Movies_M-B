import React from "react";
import img from "../../assets/images/tvShows.webp";
import tv from "../../assets/images/tv.webp";
import chromeCast from "../../assets/images/chromeCast.webp";
export const WatchEverywhere = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/images/childInCinema.webp')] bg-cover
       bg-center bg-no-repeat bg-fixed relative h-80 flex justify-center items-center">
        <div className="absolute inset-0 bg-gray-950 opacity-40">
         
        </div>
        <h2 className="text-amber-50 relative z-10 opacity-100 text-4xl">
            {" "}
            Enjoy every moment of your life{" "}
          </h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-lvh my-10 place-items-center p-5">
        <div className="h-full flex flex-wrap items-center">
          <div className="ms-10 ">
            <h2 className="text-amber-300 text-4xl my-5"> Watch everywhere </h2>
            <h4 className="text-gray-400 text-lg xl:text-2xl mt-10">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more
            </h4>
            <div className="w-lx grid grid-cols-5 gap-2 my-10 pe-1 md:pe-25">
              <img className="ms-2" width={50} src={tv} alt="tv" />
              <img className="ms-2" width={50} src={tv} alt="tv" />
              <img className="ms-2" width={50} src={tv} alt="tv" />
              <img className="ms-2" width={50} src={tv} alt="tv" />
              <img className="ms-2" src={chromeCast} alt="chromeCast" />
            </div>
          </div>
        </div>

        <div>
          <img src={img} alt="image" />
        </div>
      </section>
    </>
  );
};

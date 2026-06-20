import React from "react";
import { appsIcons } from "@/Logic/dataLocalStatic";
import { motion as Motion } from "@/Shared/Libs";
import { BounceInUp } from '@/Shared/components'
import { tvShow } from "@/Shared/Images";
export const WatchEverywhere = () => {
  return (
    <>
      <div
        className="bg-[url('/src/assets/images/childInCinema.webp')] bg-cover
       bg-center bg-no-repeat bg-fixed relative h-60 md:h-80 flex justify-center items-center"
      >
        <div className="absolute inset-0 bg-gray-950 opacity-40"></div>
        <h2 className="text-amber-50 relative z-10 opacity-100 text-2xl md:text-4xl">
          {" "}
          Enjoy every moment of your life{" "}
        </h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-lvh my-10 place-items-center p-5">
        <Motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-full flex flex-wrap items-center"
        >
          <div className="md:ms-10">
            <h2 className="text-amber-300 text-4xl my-5"> Watch everywhere </h2>
            <h4 className="text-gray-400 text-lg xl:text-2xl mt-10">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more
            </h4>
            <div className="w-xs md:w-lg grid grid-cols-4 gap-5 md:gap-2 my-10 pe-1 md:pe-25">
              {appsIcons.map(({ image, width }, index) => {
                return (
                  <Motion.img
                    initial={width === 30 && { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={
                      width === 30
                        ? { duration: 1, delay: 0.7 }
                        : { duration: 1 }
                    }
                    viewport={{ once: true }}
                    key={`${index}`}
                    className={`ms-2`}
                    src={image}
                    alt="icon"
                    width={width}
                  />
                );
              })}
            </div>
          </div>
        </Motion.div>
        <BounceInUp duration={0.9}>
          <img src={tvShow} alt="tvShow" />
        </BounceInUp>
      </section>
    </>
  );
};

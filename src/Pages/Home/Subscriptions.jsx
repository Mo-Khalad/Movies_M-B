import React from "react";
//import { motion as Motion } from "@/Shared/Libs";
import { subscriptionsData } from "@/Logic/dataLocalStatic";
import { BounceInUp } from "@/Shared/Components";
import { SubmitBtn } from "@/Components/Ui/CustomBtn/SubmitBtn";

export const Subscriptions = () => {
  const isMobile = window.innerWidth < 768;
  const className =
    "scroll-mt-28 bg-base-200 border-2 border-[#8d680a] border-main/50 max-w-9/10 mx-auto rounded-tr-full rounded-bl-full my-20 p-0 md:p-9";
  return (
    <section className={className}>
   
   <BounceInUp 
      duration={0.9}
      className="text-3xl md:text-5xl w-full mt-4 md:mt:8 mb-10 md:mb-20 text-center text-main-color"
     >
        Choose your package
     </BounceInUp>

      <div className="flex flex-wrap justify-evenly items-center">
        {subscriptionsData.map(({ type, title, price, features, month } , index) => {
          return (
            <BounceInUp
              key={index}
              className={`${type === "economy"
                ? "w-76 h-64 shadow-second-shadow hover:shadow-main-shadow"
                : "w-76 h-64 md:w-96 md:h-76 md:shadow-main-shadow"
              } my-2 bg-base-100 shadow-main-shadow flex items-center`}
              duration = {0.6}
              whileHover={!isMobile ? (type === "economy" ? { 
                  scale: 1.2 ,
                  transition:{
                  type: "tween",
                  duration: 0.2,
                  ease: "easeOut"
                }
              } : {}) : {}
            }
            >
              <div className="card-body">
                <span
                  className={`badge badge-xs badge-warning ${type === "economy" ? "bg-[#927f12ce]" : "bg-transparent text-gray-300"}  border-0 text-amber-50 text-[8px]`}
                >
                  {type}
                </span>
                <div className="flex justify-between mt-1">
                  <h2
                    className={`text-2xl font-bold my" ${type !== "economy" ? "text-2xl md:text-3xl" : "text-2xl"}`}
                  >
                    {title}
                  </h2>
                  <span
                    className={`${type !== "economy" ? "text-2xl md:text-3xl" : "text-2xl"}`}
                  >
                    {price}/{month}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2 text-xs">
                  {features.map((feature , index) => {
                    return (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span
                          className={`${type !== "economy" ? "md:text-sm" : ""}`}
                        > 
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4">
                   <SubmitBtn type={ type }> Subscribe </SubmitBtn>
                </div>
              </div>
            </BounceInUp>
          );
        })}
      </div>
    </section>
  );
};

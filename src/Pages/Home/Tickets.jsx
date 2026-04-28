import React from "react";
import { Dropdown } from "../../Components/Ui/Blocks/Dropdown";
import {
  movieTimeOptions,
  seatsCountOptions,
} from "../../Logic/dataLocalStatic";
import { motion as Motion } from "../../Shared/Libs";

export const Tickets = () => {
  return (
    <section className="bg-base-300 w-full my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="w-full col-span-1 min-h-screen loveImage text-center hidden md:block"></div>

        <div className="min-h-screen bg-dark flex flex-wrap justify-center items-center">
          <div className="w-full">
            <h2 className="mt-5 text-4xl md:text-5xl w-full text-center text-main-color">
              Book A Ticket
            </h2>
            <h4 className="w-full text-center mt-6 text-main-color">
              {" "}
              ~ Check out our place ~{" "}
            </h4>
          </div>

          <Motion.form
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-x-8 gap-y-24 grid-cols-1 p-3 md:grid-cols-2 bg-amber-10 w-full text-center"
          >
            <input
              type="text"
              required
              placeholder="Name"
              className="border-0 border-b-2 border-amber-50 text-gray-300 text-[16px] max-w-[475px]"
            />
            <input
              type="text"
              required
              placeholder="Phone"
              className="border-0 border-b-2 border-amber-50 text-gray-300 text-[16px] max-w-[475px]"
            />
            <input
              type="text"
              required
              placeholder="Email"
              className="border-0 border-b-2 border-amber-50 text-gray-300 text-[16px] max-w-[475px]"
            />

            <Dropdown>{seatsCountOptions}</Dropdown>
            <Dropdown>{movieTimeOptions}</Dropdown>

            <input
              type="date"
              className="border-0 border-b-2 border-amber-50 text-gray-300 text-[16px] max-w-[475px]"
            />
          </Motion.form>
        </div>
      </div>
    </section>
  );
};

import React from "react";
export const Dropdown = ({ children }) => {
  return (
    <select
      defaultValue="Pick a color"
      className="w-full select appearance-none border-0 border-b-2 max-w-[475px] border-amber-50 text-gray-300 text-[16px] bg-transparent focus-visible:bg-black focus:border-0 "
    >
      {children.map((items, index) => {
        return (
          <option key={index} className="text-sm md:text-lg">
            {items}
          </option>
        );
      })}
    </select>
  );
};

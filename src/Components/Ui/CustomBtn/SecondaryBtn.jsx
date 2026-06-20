import React from 'react'

export const SecondaryBtn = ({
        children ,
        className ,
        type ,   
      }
) => {
   
    return (
        <>
          <button className={`btn btn-primary btn-block text-xs ${
              type === "economy" ? "h-8" : "h-8 md:h-10 md:mt-6 hover:bg-white transition duration-700 ease-in-out hover:text-main-color"
                }`}
              >
              children 
          </button>
        </>                 
      )
}

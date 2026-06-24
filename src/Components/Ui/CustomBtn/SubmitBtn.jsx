import React from 'react'

export const SubmitBtn = ({
    children ,
    className ,
    type ,   
  }
  ) => {
  
  return (
      <button className={`btn btn-primary btn-block text-xs${
          type === "economy" ? "h-8" : "h-8 md:h-10 md:mt-6 hover:bg-white hover:text-main-color duration-500 transition-all rounded-sm"
            } ${className}`}
          >
          { children }
      </button>              
  )
}

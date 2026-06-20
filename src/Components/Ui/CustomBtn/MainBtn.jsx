import React from 'react'
import { motion as Motion } from "@/Shared/Libs";
/*
const hidden {


 <button
                    className={`btn btn-primary btn-block text-xs ${
                      type === "economy" ? "h-8" : "h-8 md:h-10 md:mt-6 hover:bg-white hover:text-info"
                    }`}
                  >
                    Subscribe
                  </button>
}
const */
export const MainBtn = ({
  children ,
  className ,
  type ,   
}
 // type='button'
) => {
/*  return (
     <Motion.button
     initial='rest'
      whileHover='hover'
      initial ='rest'
      className='relative overflow-hidden rounded-lg border-0
            bg-gradient-to-br from-[#d9a520] via-[#a27d18] to-[#291e01]
            w-25 h-10 font-bold text-main-color'>
        <Motion.div 
            className ='bg-[rgba(255, 255, 255, 0.95)] absolute z-0 top-0'
            variants={{
                rest : { left:0} ,
                hover : { right:0 , bottom:0 } ,
                transition:{ duration:0.9 , ease:'easeInOut' }
              }}
        />
         <Motion.span 
          className={'absolute z-20 w-full left-0 top-2 text-sm'}
          variants={{
            rest : { color:'rgba(255, 255, 255, 0.95)'  } ,
            hover : {  color:'#d9a520', opacity:[
                0 , 1 
            ]} ,
          }}
          transition={{ duration:0.4 , ease:'easeIn'}}    
        >sign In</Motion.span>     
    
    </Motion.button>
  )

*/

return (
  <>
    <button className={`btn btn-primary btn-block text-xs${
        type === "economy" ? "h-8" : "h-8 md:h-10 md:mt-6 hover:bg-white hover:text-main-color duration-500 transition-all rounded-sm"
          } ${className}`}
        >
        { children }
    </button>
  </>                 
)
}

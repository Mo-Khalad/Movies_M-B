import React from "react";
//import { motion as Motion } from "@/src/Shared/Libs";
import { motion as Motion } from "@/Shared/Libs";
import { NavLink } from '@/Shared/Libs'

export const HoverLayerButton = ({
  children ,
  className ,
  textSize ,  
  type = "button",
}) => {
  
  return (
   <NavLink to={'/login'}>
       <Motion.button 
      type={type}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative h-10 overflow-hidden rounded-lg border border-main-color px-6 py-1 font-bold ${className}`}
    >
      <Motion.span
        variants={{
          rest: { width: 0, height: 0, opacity: 0 },
          hover: { width: 200, height: 96, opacity: 1 },
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`absolute inset-0 m-auto rounded-4xl bg-main-color`}
      />

      <Motion.span
        variants={{
          rest: { color: '#d9a520'},
          hover: { color:'#f4f4f4' },
        }}
        className={`relative z-10 font-medium ${textSize}`}
      >
        {children}
      </Motion.span>
    </Motion.button>
    
   </NavLink> 
  
  );
};








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
 // type='button'

*/
import React from 'react';
import { motion as Motion } from '@/Shared/Libs';

export const BounceInUp = ({children , className , duration , whileHover, ...props}) => {

const variants = {
    hidden:{ opacity: 0, y: 75 },
    visible:{
      opacity: 1, y: 0 , 
      transition:{ 
         duration ,
         ease: "linear" ,  
         type: "tween" ,
        }
    }, 
}
 
  return (
    <Motion.h2
      {...props}
      variants = {variants} 
      initial = {"hidden"}
      whileInView = {'visible'}
      viewport={{ once: true }}
      className= {className}
      whileHover={whileHover}
    >
     {children}
    </Motion.h2>
  )
}

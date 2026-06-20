import React from 'react'
import { motion } from '@/Shared/Libs'

export const ErrorField = ({
    message
}) => {

const variants = {
    initial:{ left:-100 , opacity:0 },
    animate:{ opacity: 1 , left:0 }, 
}

return (
    <motion.p
    variants = {variants} 
    initial={'initial'}
    animate={'animate'}
    transition={ {duration:0.7 , type:"spring" , stiffness:300 , mass:0.8}}
    className="text-red-600 font-bold text-sm absolute top-[88%] start-[2px] text-xs font-bold">
    { message }</motion.p>
  )
}

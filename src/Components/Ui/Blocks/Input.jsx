import React from 'react'

export const Input = ({
    className ,
    placeholder ,
    type , 
}) => {
  return (
  <>
    <input type={type} placeholder={placeholder} className={`${ className } text-sm focus:placeholder:text-xs w-full border border-1 border-gray-500 h-9 mb-3 px-2 rounded text-gray-300
     placeholder:transition-all placeholder:duration-500
    `}/>
  </>
  )
}

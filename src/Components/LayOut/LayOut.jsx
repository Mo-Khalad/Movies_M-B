import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Header/Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export const LayOut = () => {
  return (
    <>
       <Navbar/>
       <Outlet></Outlet>
       <Footer/>
    </>
 
  )
}

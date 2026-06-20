import React from 'react'
import { Navbar } from '../Header/Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { useLocation , Outlet} from '@/Shared/Libs';

export const LayOut = () => {
 const pathname = useLocation().pathname

  return (
    <>
       <Navbar/>
       <Outlet></Outlet>
       { ( pathname !== '/login' && pathname !== '/register' ) ? <Footer/> : '' }
    </>
 
  )
}

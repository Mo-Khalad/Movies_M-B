import React from 'react'
import { useLocation , Outlet} from '@/Shared/Libs';
import { Navbar , Footer } from '@/Shared/Components';

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

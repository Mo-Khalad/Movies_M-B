import React from 'react';
import { navItems } from '@/Logic/dataLocalStatic';
import { NavLink , Link } from '@/Shared/Libs';
import { Links  , HoverLayerButton } from '@/Shared/Components';

export const DropdownNav = ({setIsMenuOpen , isMenuOpen }) => {

const navLinkClassName = ({ isActive }) =>{
  return ( 
    `rounded-xl px-4 py-3 text-sm font-medium ${
        isActive
          ? "bg-main-color text-black"
          : "text-white/80 hover:bg-white/10 hover:text-white"
      }`
    )
}
   
return ( <>
 { isMenuOpen && (
    <div
        className="px-4 pb-4 pt-2 lg:hidden bg-transparent"
        id="mobile-nav-menu" >
            <ul className="menu gap-2 rounded-2xl border border-white/10 bg-black p-3 w-60 ">
              <Links navLinkClassName={navLinkClassName}/>  
              <li>
                <Link
                  to="/Login"
                  className="block"
                >
                    <HoverLayerButton className="w-full">Sign in</HoverLayerButton>
                </Link>

              </li>
            </ul>
    </div>
)}
</>
)
}

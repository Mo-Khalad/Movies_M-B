import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { navItems } from '../../../Logic/dataLocalStatic'

export const Links = ({navLinkClassName}) => {
  return (
    <>
     {      navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={ navLinkClassName } >
                    {item.label}
                  </NavLink>
                </li>
              ))}
    </>
  )
}

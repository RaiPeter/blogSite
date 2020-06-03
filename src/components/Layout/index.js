import React from 'react'
import './style.css'
import Sidebar from '../Sidebar'
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div className="container">
    {props.children}
        <Sidebar/>
    </div>
   )

 }

export default Layout
import React from 'react'
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
const Layout = ({children}) => {
  return (
    <>
   {/* <Topbar/>
   <Sidebar/> */}
   <div className='container'>

    {children}
   </div>
    </>
  )
}

export default Layout

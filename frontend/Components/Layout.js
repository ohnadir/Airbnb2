import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export const Layout = (props) => {
  return (
    <div className="">
        <Navbar/>
        {props.children}
        <Footer/>
    </div>
  )
}

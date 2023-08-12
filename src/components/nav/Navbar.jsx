import React from 'react'
import "./nav.css"
import img from "../../images/logo.png"
import icon from "../../images/searchicon.png";

const nav = () => {
  return (
    <div className='header'>
        <div className="leftnav">
             <img src={img} alt="logo" />
             <h3>Course</h3>
             <h3>Program</h3>
        </div>
        <div className="rightnav">
              <img src={icon} alt="search icon" />
              <h3>Login</h3>
             <button className='btn'>Join Now</button>
        </div>
    </div>
  )
}

export default nav

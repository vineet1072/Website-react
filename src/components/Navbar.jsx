import React, { useState } from 'react'
import{BsFillHouseDoorFill} from "react-icons/bs"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {HiOutlineMenuAlt4} from "react-icons/hi"
import "../index.css"
import "./Navbar.css"


function Navbar() {

  const [click, setClick] = useState(false)
  const handleClick = ()=> setClick(!click)


  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><BsFillHouseDoorFill />Real</span>Estate</h1>
            <button className='btn'>Sign In</button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">About</a></li>
                <li><a href ="#">Contact</a></li> 
            </ul>
            <div className='hamburger' onClick={handleClick}>
           
            {click ? (<AiOutlineCloseCircle className='icon' />): <HiOutlineMenuAlt4  className='icon'/>}
           
            </div>
        </div>
    </div>
  )
}

export default Navbar
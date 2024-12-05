import React from 'react'
import "./Navbar.css";
import { Link }  from "react-router-dom";


const Navbar = () => {
  return (
  <nav className='list'>
    <h2>
      React Router
    </h2>
    <ul className='page' >
        <Link className='nav' to="/">Home</Link>
        <Link className='nav' to="/about">About</Link>
        <Link className='nav'to="/contact">Contact</Link>
        <Link className='nav' to="/users">Users</Link>
        <Link  className='nav' to="/user/username">Profile</Link>
    </ul>
  </nav>
  )
}

export default Navbar;
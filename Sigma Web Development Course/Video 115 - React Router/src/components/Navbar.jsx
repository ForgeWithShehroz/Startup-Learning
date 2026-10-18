import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='container'>
      <NavLink  className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink >
      <NavLink  className={(e)=>{return e.isActive?"red":""}} to="/contact"><li>Contact</li></NavLink >
      <NavLink  className={(e)=>{return e.isActive?"red":""}} to="/login"><li>Login</li></NavLink >
    </div>
  )
}

export default Navbar

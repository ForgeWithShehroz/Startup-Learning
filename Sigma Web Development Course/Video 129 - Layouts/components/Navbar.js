import React from 'react'

const Navbar = () => {
    return (
<nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md font-sans">
  
  <div className="text-2xl font-bold text-gray-800">BrandName</div>
  
  <ul className="hidden md:flex gap-8 list-none m-0 p-0">
    <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 no-underline">Home</a></li>
    <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 no-underline">About</a></li>
    <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 no-underline">Services</a></li>
    <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 no-underline">Contact</a></li>
  </ul>
  
  <div className="flex gap-4">
    <a href="#" className="text-blue-600 px-4 py-2 rounded no-underline font-medium hover:text-blue-800">Login</a>
    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded no-underline font-medium hover:bg-blue-700 transition-colors">Sign Up</a>
  </div>
</nav>

    )
}

export default Navbar

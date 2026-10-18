import React from 'react'

const Footer = () => {
  return (
    <div>
      
<footer className="bg-gray-900 text-white pt-12 pb-4 px-8 font-sans">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between flex-wrap gap-8">
  
    <div className="flex-1 min-w-[250px]">
      <h3 className="text-xl font-bold mt-0 mb-4">BrandName</h3>
      <p className="text-gray-400">Building modern web experiences.</p>
    </div>
    
    <div className="min-w-[150px]">
      <h4 className="text-lg font-semibold mt-0 mb-4">Links</h4>
      <ul className="list-none p-0 m-0 space-y-2">
        <li><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors">Privacy Policy</a></li>
        <li><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors">Terms of Service</a></li>
        <li><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors">Support</a></li>
      </ul>
    </div>
  </div>
  
  <div className="text-center mt-12 pt-4 border-t border-gray-800 text-gray-500 text-sm">
    <p>&copy; 2026 BrandName. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer

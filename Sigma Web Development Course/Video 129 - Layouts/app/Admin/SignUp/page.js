import React from 'react'

const SignUp = () => {
  return (
    <div>
<div className="flex justify-center items-center min-h-[80vh] bg-gray-50 font-sans p-4">
  <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-2 m-0">Create Account</h2>
    <p className="text-gray-500 text-sm mb-8">Get started with your free account today.</p>
    
    <form className="space-y-5">
      <div>
        <label for="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" id="name" required placeholder="John Doe" 
               className="w-full p-3 border border-gray-300 rounded focus:border-blue-600 focus:outline-none text-base box-border" />
      </div>
      <div>
        <label for="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" id="email" required placeholder="name@example.com" 
               className="w-full p-3 border border-gray-300 rounded focus:border-blue-600 focus:outline-none text-base box-border" />
      </div>
      <div>
        <label for="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" required placeholder="Minimum 8 characters" 
               className="w-full p-3 border border-gray-300 rounded focus:border-blue-600 focus:outline-none text-base box-border" />
      </div>
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded font-medium text-base cursor-pointer hover:bg-blue-700 transition-colors mt-2">
        Sign Up
      </button>
    </form>
    
    <p className="text-center mt-6 text-sm text-gray-500">
      Already have an account? <a href="#" className="text-blue-600 no-underline font-medium hover:underline">Login</a>
    </p>
  </div>
</div>

    </div>
  )
}

export default SignUp

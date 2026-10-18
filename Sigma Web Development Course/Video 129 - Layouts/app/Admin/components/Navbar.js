import React from 'react'

const Navbar = () => {
  return (
    <div>
<nav className="flex justify-between items-center px-6 py-3 bg-slate-900 border-b border-slate-800 font-sans shadow-sm">

  <div className="flex items-center gap-8">
    <div className="text-xl font-black tracking-wider text-white">Admin<span className="text-blue-500">Suite</span></div>
    
    <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-slate-400">
      <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> System Live
      </span>
      <span className="text-slate-500">|</span>
      <span>v2.4.0</span>
    </div>
  </div>

  <div className="hidden md:block flex-1 max-w-md mx-8">
    <div className="relative flex items-center">
      <input type="text" placeholder="Quick search users, logs, or settings... (Press '/')" 
             className="w-full pl-4 pr-10 py-1.5 bg-slate-800 text-slate-200 text-sm rounded border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      <span className="absolute right-3 text-slate-500 text-xs border border-slate-600 px-1 rounded bg-slate-700">/</span>
    </div>
  </div>

  <div className="flex items-center gap-5">
    <button className="relative p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-full border border-slate-700 hover:border-slate-600 cursor-pointer transition-all">
      <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
     
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>

    <button className="hidden sm:block text-xs text-slate-400 hover:text-white font-medium border border-slate-700 hover:border-slate-600 bg-slate-800 px-3 py-1.5 rounded transition-colors cursor-pointer">
      Docs
    </button>

    <span className="h-6 w-px bg-slate-800"></span>

    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="text-right hidden sm:block">
        <p className="text-sm font-semibold text-slate-200 leading-none">Alex Mercer</p>
        <p className="text-xs text-blue-400 font-medium mt-1">Super Admin</p>
      </div>
      <div className="w-9 h-9 rounded-full bg-blue-600 border-2 border-slate-700 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:border-blue-500 transition-colors">
        AM
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar

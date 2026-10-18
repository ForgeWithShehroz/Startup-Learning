import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className="bg-slate-900 border-t border-slate-800 px-6 py-4 font-sans text-xs text-slate-500">
  <div className="flex flex-col sm:flex-row justify-between items-center gap-3">

    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
      <span>&copy; 2026 AdminSuite Core Team.</span>
      <span className="hidden sm:inline text-slate-700">|</span>
      <span>Rendered in <strong className="text-slate-400 font-mono">14ms</strong></span>
      <span className="hidden sm:inline text-slate-700">|</span>
      <span>Memory: <strong className="text-slate-400 font-mono">24.5 MB</strong></span>
    </div>

    <div className="flex gap-4 font-medium text-slate-400">
      <a href="#" className="hover:text-blue-400 transition-colors no-underline">API Status</a>
      <a href="#" className="hover:text-blue-400 transition-colors no-underline">Security Policy</a>
      <a href="#" className="hover:text-blue-400 transition-colors no-underline">System Logs</a>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer

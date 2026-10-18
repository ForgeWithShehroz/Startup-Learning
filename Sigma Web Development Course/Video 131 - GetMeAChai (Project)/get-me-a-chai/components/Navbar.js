"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";


const Navbar = () => {
  const { data: session } = useSession()
  // if (session) {
  //   return(
  //     <>
  //     Signed in as {session.user.email } <br />
  //     <button onClick={()=>{ signOut()}}>Sign out</button>
  //     </>
  //   )
  // }
  const [showdropdown, setShowdropdown] = useState(false)
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-8 py-4">
      <Link href={"/"} className="logo text-2xl font-bold flex justify-center items-center">
        <img className='invertImg' width={44} src="tea.gif" alt="" />
        <span>GetMeaChai!</span>
      </Link>

      {/* <ul className="flex items-center gap-6">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">About</li>
        <li className="cursor-pointer hover:text-gray-300">Projects</li>
        <li className="cursor-pointer hover:text-gray-300">Sign Up</li>
        <li className="cursor-pointer hover:text-gray-300">Login</li>
      </ul> */}

      <div>
        {session && (
          <div className="relative inline-block mx-2 rounded-lg">
            <button onClick={() => setShowdropdown(!showdropdown)}
            onBlur={() => {
                setTimeout(() => {
                  setShowdropdown(false)
                }, 100);
              }}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="inline-flex items-center justify-centertext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="button"
            >
              Welcome {session.user.email}
              <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </button>

            <div
              id="dropdown"
              
              className={`z-10 ${showdropdown ? "" : "hidden"} bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-44 absolute right-0 mt-2`}

            >
              <ul className="p-2 text-sm text-gray-200 font-medium hover:bg-gray-700 hover:text-white
" aria-labelledby="dropdownDefaultButton">

                <li><Link href={"/dashboard"} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link></li>
                <li><Link href={`${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Profile</Link></li>
                <li><Link href={""} onClick={() => { signOut() }} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link></li>
              </ul>
            </div>
          </div>
        )}


        {session && <Link href={"/"}> <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { signOut() }}>Logout</button>
        </Link>}
        {!session && <Link href={"/login"}>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>}
      </div>
    </nav >
  );
};

export default Navbar;
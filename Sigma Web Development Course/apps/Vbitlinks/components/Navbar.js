import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="logo p-2 bg-purple-700 flex justify-between items-center text-white">
            <div className='font-bold text-lg'>
                <Link href={"/"}>BitLinks</Link>
            </div>
            <ul className="logo flex justify-between items-center gap-4">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/about"}><li>About Us</li></Link>
                <Link href={"/shorten"}><li>Shorten</li></Link>
                <Link href={"/contact"}><li>Contact Us</li></Link>

                <li className='flex gap-3'>
                    <Link href={"/shorten"}><button className='bg-purple-500 shadow-lg p-3 py-1 rounded-lg font-bold cursor-pointer'>Try Now</button></Link>
                    <Link href={"/github"}><button className='bg-purple-500 shadow-lg p-3 py-1 rounded-lg font-bold cursor-pointer'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div>
            <p>Current pathname: {pathname}</p>
        </div>
    )
}

export default Navbar

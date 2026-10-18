import React, { useState, useEffect } from 'react'

const Navbar = ({ color }) => {

    
    
    useEffect(() => {
        alert("I'll run on every render")
    })

    useEffect(() => {
        alert("I'll run on only first render")
    }, [])

    useEffect(() => {
        alert("Color was changed")
        return ()=>{ 
            alert("Component was unmounted!")
        }
    }, [color])

    return (
        <div>
            I am a navbar having color {color}
        </div>
    )
}

export default Navbar

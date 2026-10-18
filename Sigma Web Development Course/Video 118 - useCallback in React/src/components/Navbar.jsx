import React from 'react'
import { memo } from 'react'
const Navbar = ({ adjective, getAdjective }) => {
    console.log("Navbar is rendered")
    return (
        <div>
            I am a {adjective} Navbar
            {/* <button onClick={() => { getAdjective() }}>Change me</button> */}
            <button style={{padding: "10px"}} onClick={() => { getAdjective() }}>{getAdjective()}</button>
        </div>
    )
}

export default memo(Navbar)

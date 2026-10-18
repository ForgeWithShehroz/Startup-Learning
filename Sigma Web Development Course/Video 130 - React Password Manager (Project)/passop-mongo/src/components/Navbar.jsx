import React from 'react'

const Navbar = () => {
    return (
        <nav className=" bg-slate-800 text-white">
            <div className="flex justify-around items-center w-full py-2 h-12 md:mycontainer">
                <div className="logo font-bold text-2xl" >
                    <span className="text-green-500">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-500">OP/&gt;</span>
                </div>
                {/* <ul className='flex gap-4 '>
                    <a href="#" className='hover:font-bold'>Home</a>
                    <a href="#" className='hover:font-bold'>Contact</a>
                    <a href="#" className='hover:font-bold'>About</a>
                </ul> */}
                <button className="text-white bg-green-500 rounded-full cursor-pointer flex items-center justify-between gap-2 ring-white ring-1">
                    <img src="/icons/github.svg" className='invert w-8 p-1' alt="github" />
                    <span className='font-bold p-1'>GitHub</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react'

const Footer = () => {
    return (
        <div className="bg-slate-800 text-white flex flex-col justify-center items-center">
            <div className="logo font-bold text-2xl" >
                <span className="text-green-500">&lt;</span>
                <span>Pass</span>
                <span className="text-green-500">OP/&gt;</span>
            </div>
            <div className='flex justify-center items-center'>
                Created with
                <lord-icon
                    src="https://cdn.lordicon.com/yucrjnnl.json"
                    trigger="hover"
                    colors="primary:#ff0000,secondary:#ff0000"
                    style={{ width: '25px', height: '25px', margin: '0 4px' }}>
                </lord-icon>
                by Shehroz
            </div>
        </div>
    )
}

export default Footer

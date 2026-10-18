import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className="cover bg-red-50 relative flex flex-col items-center">
        <img className='object-cover w-full h-[350px] ' src="coverImg.jpg" alt="" />
        <div className="profileImg absolute -bottom-14  border rounded-full ">

          <img className='rounded-full ' width={100} height={100} src="profileImg.jpg" alt="" />
        </div>
      </div>
      <div className="info flex flex-col justify-center items-center my-16 gap-2">
        <div className=' font-bold text-lg '>
          @{params.username}
        </div>
        <div className="text-slate-400">
          Creating Animated art for VTT's
        </div>
        <div className="text-slate-400">
          2222 memebers . 22 posts . $14,234/release
        </div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10 text-white">
            {/* Show list of all the supporters as a leaderboard */}
            <h2 className="text-2xl font-bold mb-4">Supporters</h2>
            <ul className='mx-4 text-lg'>
              <li className='my-2 flex items-center gap-2'>
                <img src="avatar.gif" width={33} alt="user avatar" />
                <span>Shehroz donated <span className='font-bold'>$30</span> with a message "I support you bro, lots of ❣️"</span>
                </li>
              <li className='my-2 flex items-center gap-2'>
                <img src="avatar.gif" width={33} alt="user avatar" />
                <span>Shehroz donated <span className='font-bold'>$30</span> with a message "I support you bro, lots of ❣️"</span>
                </li>
              <li className='my-2 flex items-center gap-2'>
                <img src="avatar.gif" width={33} alt="user avatar" />
                <span>Shehroz donated <span className='font-bold'>$30</span> with a message "I support you bro, lots of ❣️"</span>
                </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10 text-white">

            <div className='text-2xl font-bold mb-4'>Make a Payment</div>
            <div className="flex flex-col gap-2">
              {/* enter name and message */}
              <input type="text" placeholder='Enter Name' className='bg-slate-800 rounded-lg p-3 w-full' />
              <input type="text" placeholder='Enter Message' className='bg-slate-800 rounded-lg p-3 w-full' />
              <input type="text" placeholder='Enter Amount' className='bg-slate-800 rounded-lg p-3 w-full' />
               <button className="text-white w-24 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>

            {/* or choose from these amounts */}
            <div className="flex gap-1 mt-4">
              <button className='bg-slate-800 rounded-lg p-3'>Pay $10</button>
              <button className='bg-slate-800 rounded-lg p-3 mx-2'>Pay $20</button>
              <button className='bg-slate-800 rounded-lg p-3 '>Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username

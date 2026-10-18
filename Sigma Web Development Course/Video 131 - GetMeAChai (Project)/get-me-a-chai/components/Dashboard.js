import React from 'react'

const Dashboard = () => {
    return (
        <div className='w-[40%] mx-auto my-3 flex flex-col  justify-center'>
            <h1 className='font-bold text-3xl text-center'>Welcome to your Dashboard</h1>
            <div className="my-2">
                <label htmlFor="name" name='name' id='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                <input type="text" className='block w-full p-2 text-gray-900 border  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' />
            </div>
            <div className="my-2">
                <label htmlFor="name" name='name' id='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                <input type="text" className='block w-full p-2 text-gray-900 border  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' />
            </div>
            <div className="my-2">
                <label htmlFor="name" name='name' id='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
                <input type="text" className='block w-full p-2 text-gray-900 border  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' />
            </div>
            <div className="my-2">
                <label htmlFor="name" name='name' id='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Profile Picture</label>
                <input type="text" className='block w-full p-2 text-gray-900 border  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' />
            </div>
            <div className="my-2">
                <label htmlFor="name" name='name' id='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cover Picture</label>
                <input type="text" className='block w-full p-2 text-gray-900 border  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' />
            </div>
            <div className="my-2">
                <label htmlFor="name" name='name' id='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay Id</label>
                <input type="text" className='block w-full p-2 text-gray-900 border  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' />
            </div>
            <div className="my-2">
                <label htmlFor="name" name='name' id='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay Secret</label>
                <input type="text" className='block w-full p-2 text-gray-900 border  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' />
            </div>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none my-2 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Save</button>
        </div>
    )
}

export default Dashboard

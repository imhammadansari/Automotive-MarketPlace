import React from 'react'

const HeaderForAuth = () => {
  return (
    <>
    <div className='w-full flex justify-between text-[rgb(2,6,111)] h-auto py-4 px-8 md:px-12 lg:px-16 sticky top-0 z-50 bg-gradient-to-r from-gray-100 via-gray-200 to-white shadow-md shadow-[rgb(2,6,111)]' style={{
      background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
  }}>
        <div className=''>
            <h1 className='text-xl'>
                Logo
            </h1>
        </div>

        <div>
            <ul className='hidden md:flex gap-10 text-lg'>
                <li><a src="/home">Home</a></li>
                <li><a src="/home">About Us</a></li>
                <li><a src="/home">Vehicles</a></li>
                <li><a src="/home">Contact Us</a></li>
            </ul>
            
        </div>

    </div>
    </>
  )
}

export default HeaderForAuth
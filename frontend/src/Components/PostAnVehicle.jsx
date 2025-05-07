import React from 'react'
import { useNavigate } from 'react-router-dom'

const PostAnVehicle = () => {

    const navigate = useNavigate();
  return (
    <>
    <div className='w-full px-2 sm:px-3 md:px-6 lg:px-8  bg-gray-100 flex flex-col items-center justify-center'>
        <div className='flex flex-col bg-white w-full px-2 sm:px-3 md:px-6 lg:px-8 py-16 sm:py-10 md:py-8 lg:py-12 items-center justify-center'>
        <img className='w-[4.5rem] md:w-[6rem]' src='/car.png' />
        <h1 className='text-xl md:text-2xl'><span className='text-[rgb(2,6,111)]'>Post your Car </span> for <span className='text-green-600'>FREE</span></h1>
        <p>Show your car to the millions and sell it faster</p>
        <button onClick={() => {navigate('/sellYourCar')}} className='w-28 h-10 text-sm  text-white md:text-base md:w-32 md:h-12 rounded-md mt-2 md:mt-4 cursor-pointer bg-[rgb(2,6,111)]'>Sell your Car</button>
        </div>        
    </div>
    </>
  )
}

export default PostAnVehicle
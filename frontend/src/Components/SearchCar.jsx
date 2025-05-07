import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SearchVehContext } from '../context/SearchVehContext';

const SearchCar = () => {

    const navigate = useNavigate();
    const { getFilteredVehicles } = useContext(SearchVehContext);

    const [searchValue, setsearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getFilteredVehicles(searchValue);
        if(searchValue === '') return alert("Search a Car!");
        navigate('/vehiclesBySearch');
    }

  return (
    <>
    <div className='w-full flex flex-col px-2 sm:px-3 md:px-6 lg:px-8 py-2 sm:py-3 md:py-10' style={{
                background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
            }}>
        <div className='bg-white rounded-md pt-6 flex flex-col md:flex-row px-4 gap-4 md:gap-8 sm:px-3 md:px-6 py-2 sm:py-3 md:py-6 items-center justify-between shadow-[0_0_10px_10px_rgba(28,38,39,0.08)]'>

            <div className='w-full sm:w-4/5 md:w-2/3 relative'>
                <div>
                <img className='rounded-xl' src='search-car.jpg' alt='search-car' />
                </div>
                <div className='w-full absolute bg-[rgb(2,6,111)]/30 inset-0 z-40'></div>
            </div>
            

            <div className='w-full py-4 md:py-0 flex flex-col gap-4 md:gap-6 lg:gap-10'>

            <div>
            <form onSubmit={handleSubmit} className='w-full flex gap-2'>
                <input value={searchValue} onChange={(e) => setsearchValue(e.target.value)} className='w-6/7 :h-10 px-2 rounded-md border border-black' type='text' placeholder='Enter Vehicle Name' />
                <button type='submit' className='w-20 md:w-24 h-10 text-white text-base sm:text-sm md:text-base rounded-md cursor-pointer bg-[rgb(2,6,111)]'>Search</button>
            </form>
            </div>

            
            <div className='flex flex-col gap-4'>

                <div className='flex gap-3 sm:gap-6'>

                <div className='flex gap-4 bg-gray-100 items-center text-[rgb(2,6,111)] hover:text-white hover:bg-[rgb(2,6,111)] px-3 py-1 w-1/2 rounded-xl shadow-lg'>
                    <img className='bg-white p-2 rounded-full w-12 h-12' src='/icons8-home-50.png' />

                    <div className='flex flex-col justify-center'>
                        <p className='text-base md:text-sm lg:text-base font-medium'>10+</p>
                        <p className='text-black hover:text-white text-xs sm:text-base'>Branches</p>

                    </div>

                </div>
                
                <div className='flex gap-4 bg-gray-100 text-[rgb(2,6,111)] hover:text-white hover:bg-[rgb(2,6,111)] p-3 w-1/2 rounded-xl shadow-lg'>
                    <img className='bg-white p-2 rounded-full w-12 h-12' src='/icons8-car-50 (1).png' />

                    <div className='flex flex-col justify-center'>
                        <p className='font-medium'>2700+</p>
                        <p className='text-black hover:text-white text-xs sm:text-base '>Cars Sold</p>

                    </div>

                </div>
                
                </div>


                <div className='flex gap-3 sm:gap-6'>

                <div className='flex gap-4 bg-gray-100 text-[rgb(2,6,111)] hover:text-white hover:bg-[rgb(2,6,111)] p-3 w-1/2 rounded-xl shadow-lg'>
                    <img className='bg-white p-2 rounded-full w-12 h-12' src='/icons8-group-50 (1).png' />

                    <div className='flex flex-col justify-center'>
                        <p className='font-medium'>300+</p>
                        <p className='text-black hover:text-white text-xs sm:text-base '>Happy Clients</p>

                    </div>

                </div>

                <div className='flex gap-4 bg-gray-100 text-[rgb(2,6,111)] hover:text-white hover:bg-[rgb(2,6,111)] p-3 w-1/2 rounded-xl shadow-lg'>
                    <img className='bg-white p-2 rounded-full w-12 h-12' src='/icons8-online-support-50.png' />

                    <div className='flex flex-col justify-center'>
                        <p className='font-medium'>300+</p>
                        <p className='text-black hover:text-white text-xs sm:text-base '>24/7 Support</p>

                    </div>

                </div>

                </div>

            </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default SearchCar
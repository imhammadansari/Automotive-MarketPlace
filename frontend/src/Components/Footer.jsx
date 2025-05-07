import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='w-full border-t border-black border-opacity-30 px-8 lg:px-20 py-4' style={{
                background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
            }}>
                <div className='hidden lg:flex lg:flex-row gap-4 justify-between'>

                    <div className='flex flex-col lg:w-[20rem]'>
                        {/* <Link to='/'><img className="w-20 lg:w-24" src='/logo1.png' /></Link> */}
                        <Link to='/'>Logo</Link>

                    </div>

                    <div className='flex flex-col items-start'>

                        <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start lg:pb-2'>Discover Links </h1>

                        <div className='flex lg:flex-col text-xs lg:text-base text-gray-600 text-start gap-2'>
                        <Link to='/login' >Login</Link>
                                <Link to='/sellYourCar' >Sell Your Car</Link>
                                <Link to='/viewVehicles' >Buy Cars</Link>
                        </div>

                    </div>


                    <div className='flex flex-col items-start'>

                        <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start lg:pb-2'>Important Links </h1>

                        <div className='flex  lg:flex-col text-xs lg:text-base text-gray-600 text-start gap-2'>
                        <Link to='/'>Home</Link>
                                <Link to='/about-us'>About Us</Link>
                                <Link to='/contact-us'>Contact Us</Link>
                        </div>

                    </div>




                    <div className='flex flex-col items-start'>

                        <h1 className='font-bold text-sm md:text-base lg:text-base text-gray-600 text-start lg:pb-2'>Social Media</h1>

                        <div className='flex flex-col cursor-pointer text-xs text-start gap-2 text-gray-600 lg:text-base'>
                            <img className='w-8 h-8' src='/icons8-facebook-50.png' />
                                <img className='w-8 h-8' src='/icons8-instagram-50.png' />
                                <img className='w-8 h-8' src='/icons8-linkedin-49.png' />
                        </div>
                    </div>


                </div>

                <div className='lg:hidden flex flex-col gap-4'>

                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-center lg:w-[20rem] w-2/3'>
                            {/* <Link to='/'><img className="w-20 lg:w-24" src='/logo1.png' /></Link> */}
                            <Link to='/'>Logo</Link>

                        </div>

                        <div className='flex flex-col items-start w-1/3'>

                            <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start pb-1 lg:pb-2'>Discover Links</h1>

                            <div className='flex flex-col text-xs lg:text-base text-gray-600 text-start gap-1'>
                                <Link to='/login' >Login</Link>
                                <Link to='/sellYourCar' >Sell Your Car</Link>
                                <Link to='/viewVehicles' >Buy Cars</Link>
                            </div>

                        </div>

                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col items-start w-2/3'>

                            <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start pb-1'>Important Links </h1>

                            <div className='flex flex-col cursor-pointer text-xs lg:text-base text-gray-600 text-start gap-1'>
                                <Link to='/'>Home</Link>
                                <Link to='/about-us'>About Us</Link>
                                <Link to='/contact-us'>Contact Us</Link>
                            </div>

                        </div>

                        <div className='flex flex-col items-start w-1/3'>

                            <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start pb-1 lg:pb-2'>Social Links</h1>

                            <div className='flex flex-col cursor-pointer text-xs lg:text-base text-gray-600 text-start gap-2'>
                                <img className='w-5 h-5' src='/icons8-facebook-50.png' />
                                <img className='w-5 h-5' src='/icons8-instagram-50.png' />
                                <img className='w-5 h-5' src='/icons8-linkedin-49.png' />
                            </div>


                        </div>

                    </div>

                </div>
                <p className='text-center pt-4 text-xs md:text-sm lg:text-base text-gray-600'>©Copyright-2024 - Created by Hammad Ansari</p>

            </div>
        </>
    )
}

export default Footer
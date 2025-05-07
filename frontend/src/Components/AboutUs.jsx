import React from 'react'

const AboutUs = () => {
  return (
    <>
    <div className='w-full py-4 px-2 sm:px-6 md:px-8' style={{
                background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
            }}>
        <div className='flex flex-col md:flex-row md:justify-between py-4 px-4 md:pb-12 md:gap-6 lg:gap-8 lg:px-14'>
        <div className='flex flex-col justify-center pb-4 md:pb-0'>
            <h1 className='font-bold text-2xl md:text-3xl pb-2 text-center md:text-start'>About Us</h1>
            <h1 className='text-sm sm:text-md md:text-lg lg:text-xl lg:w-5/6'>We make buying and selling cars easy, transparent, and stress-free. Whether you're looking 
                for a brand-new ride or a reliable used car, we offer verified listings, expert inspections, and fair pricing to 
                ensure a smooth experience. Our mission is to simplify the car-buying process with trust, convenience, and great deals. 
                With competitive financing options and hassle-free selling, we’re here to help you every step of the way. Drive with 
                confidence—choose.</h1>
        </div>

            <img className='md:w-[18rem] lg:w-[23rem] rounded-lg shadow-[0_0_20px_10px_rgba(28,38,39,0.3)]' src='./aboutImage.png' alt='about-us' />

        </div>

    </div>
    </>
  )
}

export default AboutUs
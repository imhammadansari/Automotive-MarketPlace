import React from 'react'

const DreamCarBanner = () => {
  return (
    <>

    {/* For Mobile */}
    <div className='w-full relative h-[40vh] sm:h-[45vh] md:hidden mt-4'>
        <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: "url('/DreamCarBannerImage.jpg')"}}>
        <div className='absolute inset-0 bg-black/70 flex flex-col justify-center items-center'>

            <div className='relative z-10 text-white text-center px-2'>
            <h1 className='text-lg sm:text-xl'>Ready to Find Your Dream Car?</h1>
            <p className='text-xs sm:text-lg font-light'>Join Thousands of satisfied customers who found their perfect vehicle through our platform</p>
            <button className='px-2 sm:px-3 cursor-pointer text-xs sm:text-sm h-7 bg-white text-black rounded-md mt-3'>Explore Cars</button>

            </div>
        </div>

        </div>

    </div>

    {/* For Desktop  */}
    
    <div className='w-full relative hidden md:block h-[65vh] mt-8'>
        <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: "url('/DreamCarBannerImage.jpg')"}}>
        <div className='absolute inset-0 bg-black/70 md:bg-black/60 flex flex-col justify-center items-center'>

            <div className='relative z-10 text-white text-center md:w-[41rem] lg:w-[45rem] px-2'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl'>Ready to Find Your Dream Car?</h1>
            <p className='text-xs sm:text-lg md:text-2xl font-light'>Join Thousands of satisfied customers who found their perfect vehicle through our platform</p>
            <button className='text-md px-5 cursor-pointer font-medium py-2 bg-white text-black rounded-md mt-6'>Explore Cars</button>

            </div>
        </div>

        </div>

    </div>
    </>
  )
}

export default DreamCarBanner
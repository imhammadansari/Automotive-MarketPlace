import React, { useState } from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import sellCar from '../assets/images/sell-car-banner.jpg';
import { ShimmerPostItem } from 'react-shimmer-effects';


const Banner = () => {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);
  const [img3Loaded, setImg3Loaded] = useState(false);
  return (
    // <div className='w-full h-[90vh] bg-cover relative overflow-hidden' 
    //      style={{backgroundImage: "url('/banner.jpg')"}}>
    <div className='w-full min-h-screen flex flex-col md:flex-row py-4 md:py-6 lg:py-8 px-2 md:px-6 lg:px-8' style={{
      background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
  }}>
      <div className='w-full text-black h-full items-center flex flex-col gap-4 md:flex-row px-2 md:px-6 lg:px-8 xl:px-10'>
        <div className='w-full md:w-1/2 h-full flex flex-col justify-center'>
          <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl pb-1'>Best Online platform</h1>
          <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pb-1'>to buy and sell</h1>
          <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pb-1'>new and used cars</h1>

          <p className=' pt-2'>Sell and Buy your car for what it's really worth quicker than ever.</p>

          <div className='flex gap-4 mt-4'>
          <button className='py-2 text-xs sm:text-base md:text-sm lg:text-base px-3 bg-[rgb(2,6,111)] hover:text-[rgb(2,6,111)] cursor-pointer hover:bg-[rgb(234,234,236)] text-white rounded-md'>Explore Cars</button>
          <button className='py-2 text-xs sm:text-base md:text-sm lg:text-base px-3 border-2 text-[rgb(2,6,111)] cursor-pointer border-[rgb(2,6,111)] hover:bg-[rgb(2,6,111)] hover:text-white rounded-md'>Sell Your Car</button>
          </div>
        </div>

        <div className='w-full md:w-1/2 h-full flex gap-6 items-center' loading='lazy'>

        <div className='flex flex-col gap-4'>
            {!img1Loaded && (
  <div className="w-[21rem] h-[14rem] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl shadow-[8px_0_4px_0_rgb(2,6,111)]" />
)}
            <LazyLoadImage
              className={`w-[21rem] rounded-xl shadow-[8px_0_4px_0_rgb(2,6,111)] ${img1Loaded ? 'block' : 'hidden'}`}
              src='/inspect-car-banner.jpg'
              effect='blur'
              afterLoad={() => setImg1Loaded(true)}
            />

            {!img2Loaded && (
  <div className="w-[21rem] h-[14rem] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl shadow-[8px_0_4px_0_rgb(2,6,111)]" />
)}
            <LazyLoadImage
              className={`w-[21rem] rounded-xl shadow-[8px_0_4px_0_rgb(2,6,111)] ${img2Loaded ? 'block' : 'hidden'}`}
              src={sellCar}
              effect='blur'
              afterLoad={() => setImg2Loaded(true)}
            />
          </div>

          <div>
           {!img3Loaded && (
  <div className="w-[22rem] h-[14rem] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl shadow-[8px_0_4px_0_rgb(2,6,111)]" />
)}
            <LazyLoadImage
              className={`w-[22rem] md:w-[22rem] lg:w-[20rem] rounded-xl shadow-[8px_0_4px_0_rgb(2,6,111)] ${img3Loaded ? 'block' : 'hidden'}`}
              src='/third-banner.jpg'
              effect='blur'
              afterLoad={() => setImg3Loaded(true)}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
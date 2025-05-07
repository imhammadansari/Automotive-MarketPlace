import React from 'react'
import { useLottie } from 'lottie-react';
import ExploreCar from '../assets/Animation - SearchCars.json';
import InspectCar from '../assets/Animation - InspectionCar.json';
import SecurePayments from '../assets/Animation - Safety.json';

const HowWorks = () => {

  const ExploreCars = {
    animationData: ExploreCar,
    loop: true,
  };

  const InspectCars = {
    animationData: InspectCar,
    loop: true,
  };

  const SecurePayment = {
    animationData: SecurePayments,
    loop: true,
  };

  const { View: ExploreView } = useLottie(ExploreCars);
  const { View: InspectCarView } = useLottie(InspectCars);
  const { View: SecurePaymentView } = useLottie(SecurePayment);

  return (
    <>
    <div className='w-full my-4 md:my-8 px-2 sm:px-6 md:px-12 lg:px-16'>
    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-center'>How It Works</h1>
    <div className='flex flex-col md:flex-row md:gap-7 lg:gap-14 md:py-4 justify-center'>

        <div className='flex flex-col w-full md:w-1/2 lg:w-2/5 text-center items-center px-4 py-2 md:p-4'>
            <div className='w-[12rem] sm:w-[15rem] md:w-[10rem] lg:w-[15rem]'>{ExploreView}</div>
            <h1 className='md:pt-4 lg:pt-5 text-md sm:text-xl md:text-md lg:text-lg font-bold'>Explore Cars</h1>
            <p className='text-sm sm:text-lg text-md md:text-md'>Browse thousands of verified cars. Find your perfect match with ease</p>
        </div>


        <div className='flex flex-col w-full md:w-1/2 lg:w-2/5 text-center items-center px-4 py-2 md:p-4'>
        <div className='w-[12rem] sm:w-[15rem] md:w-[10rem] lg:w-[15rem]'>{InspectCarView}</div>
            <h1 className='pt-2 text-md sm:text-xl md:text-md lg:text-lg font-bold'>Inspected Report</h1>
            <p className='text-sm sm:text-lg text-md md:text-md'>Get a detailed inspection report. No hidden issues, just honest insights.</p>
        </div>
        
        <div className='flex flex-col w-full md:w-1/2 lg:w-2/5 text-center items-center px-4 py-2 md:p-4'>
        <div className='w-[12rem] sm:w-[15rem] md:w-[10rem] lg:w-[15rem]'>{SecurePaymentView}</div>
            <h1 className='pt-2 text-md sm:text-xl md:text-md lg:text-lg font-bold'>Secure Payments</h1>
            <p className='text-sm sm:text-lg text-md md:text-md'>Safe and hassle-free transactions. Drive away in your dream car with confidence.</p>
        </div>

    </div>

    </div>
    </>
  )
}

export default HowWorks
import React from 'react'

const ChooseUs = () => {
  return (
    <>
    <div className='w-full flex flex-col my-4 md:my-6 px-4 sm:px-3 md:px-8 items-center'>
        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-center'>Why Choose Us</h1>

        <div className='flex flex-col md:hidden xl:flex xl:flex-row gap-4 md:gap-4 lg:gap-8 pt-4 md:pt-8 pb-4'>

          <div className='flex flex-col w-full xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <img className='w-[4.5rem] md:w-14 xl:w-16' src='./icons8-id-verified-70.png' alt='verified' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium '>Verified Sellers</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Verified Seller</h1>
            <p className='text-center md:text-xs lg:hidden'>Buy with confidence from trusted and verified sellers.</p>
            <p className='hidden lg:block text-center text-md'>Buy with confidence from trusted and verified sellers.</p>
          </div>

          <div className='flex flex-col w-full md:w-[13rem] lg:w-[15rem] xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <img className='w-[4.5rem] sm:w-[5rem] md:w-14 xl:w-16' src='./icons8-best-price-70.png' alt='best-price' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium'>Best Price</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Best Price</h1>
            <p className='text-center md:text-xs lg:hidden'>Get top-quality cars at unbeatable prices.</p>
            <p className='hidden lg:block text-center text-md'>Get top-quality cars at unbeatable prices.</p>

          </div>
          
          <div className='flex flex-col w-full md:w-[13rem] lg:w-[15rem] xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <img className='w-[4.5rem] sm:w-[5rem] md:w-14 xl:w-16' src='./icons8-car-inspection-70.png' alt='inspection-report' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium'>Free Inspection</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Free Inspection</h1>
            <p className='text-center md:text-xs lg:hidden'>Enjoy a complete car inspection at no extra cost.</p>
            <p className='hidden lg:block text-center text-md'>Enjoy a complete car inspection at no extra cost.</p>

          </div>
          
          <div className='flex flex-col w-full md:w-[13rem] lg:w-[15rem] xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <img className='w-[4.5rem] sm:w-[5rem] md:w-14 xl:w-16' src='./icons8-easy-to-find-70.png' alt='easy-to-use' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium'>Easy Financing</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Easy Financing</h1>
            <p className='text-center md:text-xs lg:hidden'>Quickly discover the right car with our smart search tools.</p>
            <p className='hidden lg:block text-center text-md'>Quickly discover the right car with our smart search tools.</p>
          </div>
          
        </div>
        
        {/* For lg devices */}
        <div className='hidden md:flex flex-col xl:hidden gap-4 md:gap-4 lg:gap-8 pt-4 md:pt-8 pb-4'>

          <div className='flex gap-8'>

          <div className='flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <img className='w-[4.5rem] md:w-16 xl:w-16' src='./verified-sellers.png' alt='verified' />
            <h1 className='hidden md:flex sm:text-xs md:text-lg lg:text-lg font-medium '>Verified Sellers</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Verified Seller</h1>
            <p className='text-center md:text-sm lg:hidden'>Buy with confidence from trusted and verified sellers.</p>
            <p className='hidden lg:block text-center text-md'>Buy with confidence from trusted and verified sellers.</p>
          </div>

          <div className='flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <img className='w-[4.5rem] sm:w-[5rem] md:w-16 xl:w-16' src='./best-price.png' alt='best-price' />
            <h1 className='hidden md:flex sm:text-xs md:text-lg lg:text-lg font-medium'>Best Price</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Best Price</h1>
            <p className='text-center md:text-sm lg:hidden'>Get top-quality cars at unbeatable prices.</p>
            <p className='hidden lg:block text-center text-md'>Get top-quality cars at unbeatable prices.</p>

          </div>

          </div>
          
          <div className='flex gap-8'>

          <div className='flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <img className='w-[4.5rem] sm:w-[5rem] md:w-16 xl:w-16' src='./car-inspection.png' alt='inspection-report' />
            <h1 className='hidden md:flex sm:text-xs md:text-lg lg:text-lg font-medium'>Free Inspection</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Free Inspection</h1>
            <p className='text-center md:text-sm lg:hidden'>Enjoy a complete car inspection at no extra cost.</p>
            <p className='hidden lg:block text-center text-md'>Enjoy a complete car inspection at no extra cost.</p>

          </div>
          
          <div className='flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <img className='w-[4.5rem] sm:w-[5rem] md:w-16 xl:w-16' src='./easy-to-find.png' alt='easy-to-use' />
            <h1 className='hidden md:flex sm:text-xs md:text-lg lg:text-lg font-medium'>Easy Financing</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Easy Financing</h1>
            <p className='text-center md:text-sm lg:hidden'>Quickly discover the right car with our smart search tools.</p>
            <p className='hidden lg:block text-center text-md'>Quickly discover the right car with our smart search tools.</p>
          </div>

          </div>
          
        </div>

    </div>
    </>
  )
}

export default ChooseUs
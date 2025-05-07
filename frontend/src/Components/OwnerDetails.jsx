import React from 'react'

const OwnerDetails = ({ownerName, ownerAddress, ownerPhoneNumber, hideOwnerDetails}) => {
  return (
    <>
    <div className='w-full h-1/3 px-2 md:px-6 flex flex-col items-center justify-center'>

    <div className='flex bg-white w-1/3 justify-end'>
    <img onClick={hideOwnerDetails} className='w-[1.5rem] cursor-pointer' src='/icons8-cross-50.png' />
    </div>

    <div className='w-1/3 bg-white h-full flex flex-col items-center justify-center'>


    <h1 className='font-medium'>Owner Name: <span className='font-normal'>{ownerName}</span></h1>
    <h1 className='font-medium'>Owner Phone Number: <span className='font-normal'>0{ownerPhoneNumber}</span></h1>
    <h1 className='font-medium'>Owner Address: <span className='font-normal'>{ownerAddress}</span></h1>
    </div>


    </div>
    </>
  )
}

export default OwnerDetails
import React from 'react'

const MenuBar = ({ hideMenu }) => {
  return (
    <div className='fixed inset-0 z-50 overflow-hidden'>

      <div className='absolute inset-0 bg-black/20' onClick={hideMenu}></div>
      
      <div className='relative flex justify-end h-full w-full'>

        <div className='bg-white w-1/3 h-full flex flex-col '>
          <div className='p-4'>
            <button onClick={hideMenu} className='mb-6'>Close</button>
            <ul className='flex flex-col gap-4'>
              <li><a href="/home">Home</a></li>
              <li><a href="/home">About Us</a></li>
              <li><a href="/home">Vehicles</a></li>
              <li><a href="/home">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
import React, { useState } from 'react'
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menu, setMenu] = useState(false);

    const hideMenu = () => {
        setMenu(false);
    }

    const showMenu = () => {
        setMenu(!menu)
    }

  return (
    <>
    <div className='w-full flex justify-between text-[rgb(2,6,111)] h-auto py-4 px-8 md:px-12 lg:px-16 sticky top-0 z-50 bg-gradient-to-r from-gray-100 via-gray-200 to-white shadow-md shadow-[rgb(2,6,111)]' style={{
      background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
  }}>
        <div className=''>
                <Link to='/'>Logo</Link>
        </div>

        <div className='flex items-center'>
            <ul className='hidden md:flex cursor-pointer gap-10 text-lg'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to='/sellYourCar'>Sell Your Car</Link></li>
                <li><Link to='/viewVehicles'>Buy Car</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>

            <ul className='flex md:hidden'>
                <img onClick={showMenu} className='w-5 h-5' src='/icons8-menu-50.png' />
            </ul>
            
        </div>

    </div>
    
    {menu && (
        <MenuBar hideMenu = {hideMenu} />
    )}
    </>
  )
}

export default Header
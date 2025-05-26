import React from 'react'
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const MenuBar = ({ hideMenu }) => {

  const [user, setUser] = useState('');
  const [admin, setAdmin] = useState('');
  


  const logoutUser = async () => {
    try {
      const response = await axios.post('https://automotive-marketplace.up.railway.app/users/userLogout');
      if (response.status === 200) {
        toast.success("User Loggedout successfully!")
        setTimeout(() => window.location.reload(), 2000);
        setTimeout(() => navigate('/home'), 500);
      }
    } catch (error) {

    }
  }

  const logoutAdmin = async () => {
    try {
      const response = await axios.post('https://automotive-marketplace.up.railway.app/admin/adminLogout');
      if (response.status === 200) {
        toast.success("Admin Loggedout successfully!");
        setTimeout(() => window.location.reload(), 2000);
        setTimeout(() => navigate('/home'), 500);
      }
    } catch (error) {

    }
  }

  const handleAccountNavigation = async (e) => {
    const value = e.target.value;

    if (value === "userLogout") {
      await logoutUser();
      setTimeout(() => navigate('/home'), 2000);
      return;
    }

    if (value === "adminLogout") {
      await logoutAdmin();
      setTimeout(() => navigate('/home'), 2000);
      return;
    }



    if (value) {
      navigate(value);
    }
  }

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const adminRes = await axios.get(`https://automotive-marketplace.up.railway.app/admin/viewAdmin`);
        if (adminRes?.data?._id) {
          setAdmin(adminRes.data);
          return;
        }
      } catch (error) { }

      try {
        const userRes = await axios.get(`https://automotive-marketplace.up.railway.app/users/viewUser`);
        if (userRes?.data?._id) {
          setUser(userRes.data);
          return;
        }
      } catch (error) { }

    };

    fetchLoggedInUser();
  }, []);

  return (
    <div className='fixed inset-0 z-50 overflow-hidden'>

      <div className='absolute inset-0 bg-black/20' onClick={hideMenu}></div>

      <div className='relative flex justify-end h-full w-full'>

        <div className='bg-white w-1/3 h-full flex flex-col '>
          <div className='p-4'>
            <button onClick={hideMenu} className='mb-6'>Close</button>
            <ul className='flex flex-col gap-4'>
              <li><Link to="/home">Home</Link></li>
              <li><Link to='/sellYourCar'>Sell Your Car</Link></li>
              <li><Link to='/viewVehicles'>Buy Car</Link></li>
              <li>
                {(user?._id || admin?._id) ? (
                  <select className='w-24' onChange={handleAccountNavigation} defaultValue="">
                    <option value="" disabled>Account</option>

                    {user?._id && (
                      <>
                        <option className='text-sm' value="/sellYourCar">Sell Your Car</option>
                        <option className='text-sm' value="/vehiclesList">Your Vehicles</option>
                        <option className='text-sm' value="userLogout">Logout</option>
                      </>
                    )}

                    {admin?._id && (
                      <>
                        <option className='text-sm' value="/adminDashboard">Dashboard</option>
                        <option className='text-sm' value="adminLogout">Logout</option>
                      </>

                    )}
                  </select>
                ) : (
                  <Link to='/login'>Login</Link>

                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
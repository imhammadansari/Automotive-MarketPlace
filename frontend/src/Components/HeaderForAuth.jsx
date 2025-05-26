import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HeaderForAuth = () => {

  

  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState('');
      const [admin, setAdmin] = useState('');
  
      const hideMenu = () => {
          setMenu(false);
      }
  
      const showMenu = () => {
          setMenu(!menu)
      }
  
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
              } catch (error) {}
  
              try {
                  const userRes = await axios.get(`https://automotive-marketplace.up.railway.app/users/viewUser`);
                  if (userRes?.data?._id) {
                      setUser(userRes.data);
                      return;
                  }
              } catch (error) {}
              
          };
  
          fetchLoggedInUser();
      }, []);

  return (
    <>
    <div className='w-full flex justify-between text-[rgb(2,6,111)] h-auto py-4 px-8 md:px-12 lg:px-16 sticky top-0 z-50 bg-gradient-to-r from-gray-100 via-gray-200 to-white shadow-md shadow-[rgb(2,6,111)]' style={{
      background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
  }}>
        <div className=''>
            <h1 className='text-xl'>
                Logo
            </h1>
        </div>

        <div>
            <ul className='hidden md:flex gap-10 text-lg'>
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

export default HeaderForAuth
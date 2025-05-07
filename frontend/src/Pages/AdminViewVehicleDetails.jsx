import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../Components/Header';

const AdminViewVehicleDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicles, setvehicles] = useState('');
    const [loading, setLoading] = useState(false);
  

  axios.defaults.withCredentials = true;

  const getVehDetails = async() => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/vehicles/viewVehicle/${id}`);
      console.log(response.data);
      setvehicles(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  const buttonBack = () => {
    navigate('/adminDashboard');
  }

  useEffect (() => {
  getVehDetails();
  }, [id]);

  if(loading) return <div>Loading...</div>

  return (
    <>
    <Header />
    <div className='w-full bg-gray-200 px-3 sm:px-4 md:px-8 lg:px-12 py-3 sm:py-4 md:py-7 flex flex-col items-center justify-center'>
      <div className='flex flex-col bg-white gap-4 w-full px-2 sm:px-3 md:px-4 py-2 md:py-4 items-center justify-center'>
      <h1 className='text-xl md:text-2xl font-medium pb-2'>Your Vehicles Details</h1>


        <div className='flex w-full text-md sm:text-md md:text-lg lg:text-xl justify-between flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>Vehicle ID: <strong>{vehicles._id}</strong></h1>
          <h1>Vehicle Name: <strong>{vehicles.name}</strong></h1>
        </div>

        <div className='flex w-full text-md sm:text-md md:text-lg lg:text-xl justify-between flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>Vehicle Model: <strong>{vehicles.model}</strong></h1>
          <h1>Vehicle Make: <strong>{vehicles.make}</strong></h1>
        </div>

        <div className='flex w-full text-md sm:text-md md:text-lg lg:text-xl justify-between flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>Vehicle Fuel Type: <strong>{vehicles.fuelType}</strong></h1>
          <h1>Vehicle Seats: <strong>{vehicles.seats}</strong></h1>
        </div>

        <div className='flex w-full text-md sm:text-md md:text-lg lg:text-xl justify-between flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>Vehicle Hybrid: <strong>{vehicles.hybrid}</strong></h1>
          <h1>Vehicle Color: <strong>{vehicles.color}</strong></h1>
        </div>

        <div className='flex w-full text-md sm:text-md md:text-lg lg:text-xl sm:justify-between flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>KM's Driven: <strong>{vehicles.odometer} Km</strong></h1>
          <h1>Vehicle Mileage: <strong>{vehicles.mileage}</strong></h1>
        </div>

        <div className='flex w-full text-md sm:text-md md:text-lg lg:text-xl justify-between flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>Vehicle Engine: <strong>{vehicles.engine}</strong></h1>
          <h1>Vehicle Condition: <strong>{vehicles.condition}</strong></h1>
        </div>
        
        <div className='flex w-full text-md sm:text-md md:text-lg lg:text-xl justify-between flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>Fuel Tank Capacity: <strong>{vehicles.fuelTankCapacity}</strong></h1>
          <h1>Vehicle Transmission: <strong>{vehicles.transmission}</strong></h1>
        </div>
        
        <div className='flex w-full text-md sm:text-md md:text-lg lg:text-xl justify-between flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>Vehicle Price: <strong>{vehicles.price}</strong></h1>
          <h1>Registration City: <strong>{vehicles.city}</strong></h1>
        </div>
        
        <div className='flex w-full text-md sm:text-md md:text-lg lg:text-xl flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>Description: <strong>{vehicles.description}</strong></h1>
        </div>

        <div className='flex w-full text-md sm:text-md mt-2 md:mt-4 md:text-lg lg:text-xl justify-between flex-col sm:flex-row px-2 sm:px-3 md:px-6 lg:px-10'>
          <h1>Owner Name: <strong>{vehicles.ownerName}</strong></h1>
          <h1>Phone Number: <strong>{vehicles.phoneNumber}</strong></h1>
        </div>

        <div className='flex gap-4 items-center justify-center'>
        {/* <Link to={`/updateVehicle/${veh._id}`} className='cursor-pointer rounded-md p-1 w-24 h-8 bg-[rgb(2,6,111)]'>Update</Link> */}
          <button onClick={() => {navigate(`/adminUpdateVehicle/${vehicles._id}`)}} className='w-24 h-10 bg-[rgb(2,6,111)] text-white cursor-pointer rounded-md'> Update </button>
          <button onClick={buttonBack} className='w-24 h-10 border border-[rgb(2,6,111)] text-[rgb(2,6,111)] cursor-pointer rounded-md '> Back </button>

        </div>

      </div>

    </div>
    </>
  )
}

export default AdminViewVehicleDetails
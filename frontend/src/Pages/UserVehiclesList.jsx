import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';

const UserVehiclesList = () => {

    const navigate = useNavigate();

    const [vehicles, setvehicles] = useState([]);

    axios.defaults.withCredentials = true;
    const getVehDetails = async () => {
        try {
            const response = await axios.get('https://automotive-marketplace.up.railway.app/vehicles/viewUserVehicles');
            console.log(response.data);
            setvehicles(response.data);
        } catch (error) {
            alert(error.data.message);
        }
    }

    const updateStatus = async (vehID, vehStatus) => {
        try {
            const newStatus = vehStatus === 'Sold' ? 'Active' : 'Sold';
            const response = await axios.post(`https://automotive-marketplace.up.railway.app/vehicles/updateStatus/${vehID}`, {
                id: vehID,
                status: newStatus
            })
            if(response.status === 200){
                getVehDetails();
            }

        } catch (error) {
            console.log(error.message);
        }

    }

    const navigatebutton = (vehID) => {
        navigate(`/updateVehicle/${vehID}`)
    }

    useEffect(() => {
        getVehDetails();
    }, []);

    return (
        <>
            <Header />

            <div className='w-full px-2 sm:px-4 md:px-6 lg:px-8 py-2 md:py-4 bg-gray-200 flex flex-col items-center justify-center'>
                {vehicles.length > 0 ? (
                    <div className='w-full px-2 sm:px-3 md:px-4 lg:px-4 py-2 md:py-4 overflow-x-auto bg-white'>
                        <div className='min-w-[600px]'>
                        <div className='grid grid-cols-5 text-center'>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Veh Name</h1>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Veh Model</h1>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Veh Fuel Type</h1>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Veh Price</h1>
                            <h1 className='border-b border-l font-medium border-black p-2'>Actions</h1>
                        </div>

                        {vehicles?.map((veh, index) => {
                            return (
                                    <div key={index} className='grid grid-cols-5 text-center'>
                                    <h1 className='border-l border-b p-2 border-black'>{veh.name}</h1>
                                    <h1 className='border-l border-b p-2 border-black'>{veh.model}</h1>
                                    <h1 className='border-l border-b p-2 border-black'>{veh.fuelType}</h1>
                                    <h1 className='border-b border-l border-black p-2'>{veh.price}</h1>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-4 p-2 items-center justify-center border-b border-l'>
                                    <Link to={`/vehicleDetail/${veh._id}`} className='p-1 w-24 md:w-20 h-8 rounded-md text-white bg-[rgb(2,6,111)]'>View</Link>

                                    {veh.status === 'Active' ? (
                                        <button onClick={() => updateStatus(veh._id, veh.status)} className='w-24 md:w-28 h-8 bg-red-600 rounded-md cursor-pointer'>Mark Sold</button>
                                    ) : (
                                        <button onClick={() => updateStatus(veh._id, veh.status)} className='w-24 md:w-28 h-8 bg-green-600 rounded-md cursor-pointer'>Mark Active</button>

                                    )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    </div>

                ) : (
                    <p>No Vehicles Found</p>
                )}

            </div>
        </>
    )
}

export default UserVehiclesList


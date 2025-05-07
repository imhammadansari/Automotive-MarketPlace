import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const navigate = useNavigate();

    const [vehicles, setvehicles] = useState([]);
    const [loading, setLoading] = useState(false);

    axios.defaults.withCredentials = true;
    const getVehDetails = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8000/vehicles/viewvehicles');
            console.log(response.data);
            setvehicles(response.data);
        } catch (error) {
            alert(error.data.message);
        } finally {
            setLoading(false);
        }
    }


    const updateStatus = async(vehID, vehStatus) => {
        try {
            const newStatus = vehStatus === 'Sold' ? 'Active' : 'Sold';
            const response = await axios.post(`http://localhost:8000/vehicles/adminUpdateStatus/${vehID}`, {
                id: vehID,
                status: newStatus
            })
            if(response.status === 200){
                alert("Status Updated Successfully");
                getVehDetails();
            }
        } catch (error) {
            console.log(error.message);
            
        }
    }


    useEffect(() => {
        getVehDetails();
    }, []);

    if(loading) return <div>Loading...</div>

    return (
        <>
            <Header />

            <div className='w-full px-2 sm:px-4 md:px-6 lg:px-8 py-2 md:py-4 bg-gray-200 flex flex-col items-center justify-center'>
                {vehicles.length > 0 ? (
                    <div className='w-full px-2 sm:px-3 md:px-4 lg:px-4 py-2 md:py-4 bg-white'>
                        <div className='grid grid-cols-7 text-center'>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Veh Name</h1>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Owner Name</h1>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Owner Number</h1>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Veh Model</h1>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Veh Fuel Type</h1>
                            <h1 className='border-l font-medium border-b p-2 border-black'>Veh Price</h1>
                            <h1 className='border-b border-l font-medium border-black p-2'>Actions</h1>
                        </div>

                        {vehicles?.map((veh, index) => {
                            return (
                                    <div key={index} className='grid grid-cols-7 text-center'>
                                    <h1 className='border-l border-b p-2 border-black'>{veh.name}</h1>
                                    <h1 className='border-l border-b p-2 border-black'>{veh.ownerName}</h1>
                                    <h1 className='border-l border-b p-2 border-black'>{veh.phoneNumber}</h1>
                                    <h1 className='border-l border-b p-2 border-black'>{veh.model}</h1>
                                    <h1 className='border-l border-b p-2 border-black'>{veh.fuelType}</h1>
                                    <h1 className='border-b border-l border-black p-2'>{veh.price}</h1>
                                    <div className='flex gap-4 p-2 items-center justify-center border-b border-l'>
                                    <button onClick={() => {navigate(`/adminViewDetails/${veh._id}`)}} className='p-1 w-20 h-8 rounded-md text-sm text-white cursor-pointer bg-[rgb(2,6,111)]'>View</button>
                                    {veh.status === 'Active' ? (
                                        <button onClick={() => updateStatus(veh._id, veh.status)} className='w-28 h-8 bg-red-600 rounded-md text-sm cursor-pointer'>Mark Sold</button>
                                    ) : (
                                        <button onClick={() => updateStatus(veh._id, veh.status)} className='w-28 h-8 bg-green-600 text-sm rounded-md cursor-pointer'>Mark Active</button>

                                    )}
                                    
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                ) : (
                    <p>No Vehicles Found</p>
                )}

            </div>
        </>
    )
}

export default AdminDashboard


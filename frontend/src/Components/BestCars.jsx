import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const BestCars = () => {

    const [allVehicles, setAllVehicles] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchVehicles = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://automotive-marketplace.up.railway.app/vehicles/viewvehicles');
            setAllVehicles(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchVehicles();
    }, []);

    if (loading) return <div>Loading...</div>

    return (
        <>
            <div className='flex flex-col w-full gap-4 bg-gray-100 px-2 sm:px-3 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-6 items-center justify-center'>

                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-center pt-4'>Featured Cars</h1>
                <div className='flex flex-col w-full px-2 items-center justify-center'>

                <div className='sm:px-4 xl:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 xl:gap-20 justify-center items-center w-full'>
                    {allVehicles?.map((item, index) => {
                        const isThumbnail = item.thumbnail && item.thumbnail.data;
                        return (
                            <Link className='flex flex-col justify-center items-center' to={`/vehicleDetails/${item._id}`}>
                                <div key={index} className='flex w-full md:w-[23rem] xl:w-[20rem] h-auto lg:h-[30rem] xl:h-[25rem] items-center flex-col gap-4 px-4 sm:px-5 md:px-4 lg:px-6 py-4 sm:py-3 md:py-4 lg:py-6 border-4 shadow-lg mb-6 rounded-xl bg-white border-gray-100'>
                                    {isThumbnail ? (
                                        <img className='w-[100%] rounded-xl md:w-[80%]' src={`data:image/jpeg;base64,${Buffer.from(item.thumbnail.data).toString('base64')}`} />
                                    ) : (
                                        <div>No Thumbnail</div>
                                    )}

                                    <div className='flex flex-col w-full'>

                                        <div className='flex flex-col justify-center w-full'>
                                            <h1 className='font-medium text-2xl md:text-xl text-center md:text-start'>{item.name}</h1>
                                            <div className='flex flex-col w-full gap-3 pt-5 text-[rgb(133,115,138)]'>

                                                <div className='flex justify-between'>

                                                <div className='flex gap-2 justify-center items-center'>
                                                    <img className='w-5' src='./icons8-calendar-50.png' alt='car-model' />
                                                    <p>{item.model}</p>
                                                </div>

                                                <div className='flex gap-2 justify-center items-center'>
                                                    <img className='w-5' src='./icons8-road-50.png' alt='car-driven' />
                                                    <p>{item.odometer} Km</p>
                                                </div>

                                                </div>


                                                <div className='flex justify-between'>

                                                <div className='flex gap-2 justify-center items-center'>
                                                    <img className='w-5' src='./icons8-fuel-50.png' alt='fuel-type' />
                                                    <p>{item.fuelType}</p>
                                                </div>

                                                <div className='flex gap-2 justify-center items-center'>
                                                    <img className='w-5' src='./icons8-gear-stick-50.png' alt='car-transimission' />
                                                    <p>{item.transmission}</p>
                                                </div>

                                                </div>

                                            </div>


                                            <p className='text-[rgb(133,115,138)] pt-3 md:pt-1'>{item.city}</p>
                                            <h1 className='hidden md:flex xl:hidden text-lg md:text-xl xl:text-2xl font-medium'>Rs. {item.price}</h1>

                                        </div>

                                        <div className='flex items-center md:hidden xl:flex pt-2'>
                                            <h1 className='text-lg md:text-xl font-medium'>Rs. {item.price}</h1>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        )
                    })}

                </div>


                </div>
            </div>
        </>
    )
}

export default BestCars      
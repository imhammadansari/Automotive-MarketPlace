import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';


const SimilarVehicles = ({ vehName, vehMake }) => {

    const [vehicles, setVehicles] = useState([]);
    const [similarVeh, setSimilarVeh] = useState([]);

    const fetchVehicles = async () => {
        try {
            const response = await axios.get('http://localhost:8000/vehicles/viewvehicles');
            setVehicles(response.data);

        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        fetchVehicles();
    }, []);

    useEffect(() => {
        if (vehicles.length > 0 && (vehMake || vehName)) {
            const filteredVehicles = vehicles.filter(vehicle => {
                return (
                    (vehMake && vehicle.make?.toLowerCase().includes(vehMake.toLowerCase())) ||
                    (vehName && vehicle.make?.toLowerCase().includes(vehMake.toLowerCase))
                )
            });
            setSimilarVeh(filteredVehicles);
            console.log("Filtered", filteredVehicles);
        }
    }, [vehicles, vehMake, vehName])

    return (
        <>
            <div className='bg-gray-100 px-2 sm:px-3 md:px-6 lg:px-8 pb-2 sm:pb-3 md:pb-4 lg:pb-6'>
                <div className='px-2 sm:px-3 md:px-4 lg:px-6 py-4 sm:py-5 md:py-8 lg:py-12 bg-white'>

                    <h1 className='text-center text-lg md:text-xl lg:text-2xl fonte-medium pb-3 md:pb-6'>You May also like</h1>
                    <Swiper
    slidesPerView={1} // Default for mobile
    spaceBetween={40}
    pagination={{
        clickable: true,
    }}
    breakpoints={{
        // When window width is >= 640px (sm breakpoint)
        640: {
            slidesPerView: 2,
        },
        // When window width is >= 768px (md breakpoint)
        768: {
            slidesPerView: 3,
        },
    }}
    modules={[Pagination]}
    className="mySwiper h-auto"
>
                        {similarVeh?.map(vehicle => {
                            const base64Image = Buffer.from(vehicle.thumbnail.data).toString('base64');
                            return (
                                <SwiperSlide key={vehicle._id}>
                                    <div className='flex flex-col h-auto gap-2 px-2 md:px-4 py-2 md:py-4 rounded-md border border-black/10'>
                                        <div className='flex items-center h-auto justify-center'>
                                            <img className='w-[16rem] md:w-[16rem]' src={`data:image/jpeg;base64,${base64Image}`} />
                                        </div>

                                        <div className=''>
                                            <Link to={`/vehicleDetails/${vehicle._id}`} >
                                            <h1 className='text-md md:text-lg lg:text-xl'>{vehicle.name}</h1>
                                            <h1 className='text-[rgb(133,115,138)]'>Rs. {vehicle.price}</h1>

                                            <div className='flex justify-between w-full py-2'>

                                            <div className='flex gap-2'>
                                                <img className='w-5' src='/icons8-calendar-50.png' alt='car-year' />
                                                <p className='text-[rgb(133,115,138)]'> {vehicle.model}</p>
                                            </div>

                                            <div className='flex gap-2'>
                                                    <img className='w-5' src='/icons8-road-50.png' alt='car-driven' />
                                                    <p className='text-[rgb(133,115,138)]'>{vehicle.odometer} Km</p>
                                            </div>

                                            </div>

                                            <div className='flex justify-between w-full'>

                                            <div className='flex gap-2'>
                                                <img className='w-5' src='/icons8-fuel-50.png' alt='car-year' />
                                                <p className='text-[rgb(133,115,138)]'> {vehicle.fuelType}</p>
                                            </div>

                                            <div className='flex gap-2'>
                                                    <img className='w-5' src='/icons8-car-engine-50 (2).png' alt='car-driven' />
                                                    <p className='text-[rgb(133,115,138)]'>{vehicle.engine}</p>
                                            </div>

                                            </div>
                                            
                                            <div className='flex justify-between w-full py-2'>

                                            <div className='flex gap-2'>
                                                <img className='w-5' src='/icons8-speedometer-50 (1).png' alt='car-year' />
                                                <p className='text-[rgb(133,115,138)]'> {vehicle.mileage}</p>
                                            </div>

                                            <div className='flex gap-2'>
                                                    <img className='w-5' src='/icons8-car-50.png' alt='car-driven' />
                                                    <p className='text-[rgb(133,115,138)]'>{vehicle.condition}</p>
                                            </div>

                                            </div>
                                            </Link>

                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })}


                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default SimilarVehicles
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Buffer } from 'buffer';
import Header from '../Components/Header';
import SimilarVehicles from '../Components/SimilarVehicles';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import OwnerDetails from '../Components/OwnerDetails';
import PostAnVehicle from '../Components/PostAnVehicle';
import Footer from '../Components/Footer';

const VehicleDetails = () => {

    const { id } = useParams();
    const [vehicles, setVehicles] = useState('');
    const [currentThumbnail, setCurrentThumbnail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ownerDetails, setOwnerDetails] = useState(false);

    const fetchVehicles = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://automotive-marketplace.up.railway.app/vehicles/viewVehicle/${id}`);
            setVehicles(response.data);
            setCurrentThumbnail(response.data.thumbnail);
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleThumbnail = (image) => {
        setCurrentThumbnail(image);
    }

    const isCurrentThumbnail = (image) => {
        if (!currentThumbnail || !image) return false;
        return Buffer.from(currentThumbnail.data).toString('base64') === Buffer.from(image.data).toString('base64');
    }

    const hideOwnerDetails = () => {
        setOwnerDetails(false);
    }

    useEffect(() => {
        fetchVehicles();
    }, [id]);

    if (loading) return <div>Loading...</div>

    return (
        <>
            <Header />
            <div className='w-full px-2 sm:px-3 md:px-6 lg:px-8 pt-2 sm:pt-3 md:pt-4 lg:pt-6 flex flex-col bg-gray-100'>
                <div className='flex flex-col w-full md:flex-row items-center md:item-start py-2 sm:py-3 md:py-4 lg:py-6 bg-white px-2 sm:px-3 md:px-6 lg:px-8'>

                    <div className='flex flex-col items-center justify-center w-full md:w-1/2'>

                        <div className='pb-6'>
                            {currentThumbnail && currentThumbnail.data ? (
                                <img className='w-[12rem] rounded-xl md:w-[12rem] lg:w-[17rem]' src={`data:image/jpeg;base64,${Buffer.from(currentThumbnail.data).toString('base64')}`} />

                            ) : (
                                <div>No thumbnail</div>
                            )}
                        </div>


                        {vehicles.images && vehicles.images.length > 0 ? (
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper w-full h-24 sm:h-32 md:h-36"
                            >

                                {vehicles.thumbnail && vehicles.thumbnail.data && (
                                    <SwiperSlide>
                                        <img onClick={() => handleThumbnail(vehicles.thumbnail)} className={`w-[4rem] rounded-md sm:w-[6rem] md:w-[5rem] lg:w-[5rem] transition-opacity ${isCurrentThumbnail(vehicles.thumbnail) ? 'opacity-100 border border-black/10 rounded-md' : 'opacity-60'}`} src={`data:image/jpeg;base64,${Buffer.from(vehicles.thumbnail.data).toString('base64')}`} />
                                    </SwiperSlide>
                                )}
                                {vehicles.images.map((image, index) => {
                                    return (
                                        <SwiperSlide className='w-full' key={index}>

                                            <img onClick={() => handleThumbnail(image)} className={`w-[4rem] sm:w-[6rem] rounded-md md:w-[5rem] lg:w-[5rem] transition-opacity ${isCurrentThumbnail(image) ? 'opacity-100 border border-black/10 rounded-md' : 'opacity-60'}`} src={`data:image/jpeg;base64,${Buffer.from(image.data).toString('base64')}`} alt={`veh-image ${index}`} />
                                        </SwiperSlide>
                                    )

                                })}
                            </Swiper>
                        ) : (
                            <div>No Images</div>
                        )
                        }




                    </div>

                    <div className='flex flex-col w-full md:w-1/2 justify-center gap-2 md:border-l lg:px-10 border-black/20'>
                        <h1 className='sm:px-4 lg:px-0 font-medium text-2xl md:text-3xl'>{vehicles.name}</h1>
                        <h1 className='sm:px-4 lg:px-0 font-medium text-xl md:text-2xl text-[rgb(133,115,138)]'>Rs. {vehicles.price}</h1>

                        <div className='flex flex-row w-full justify-between lg:justify-normal sm:px-4 lg:px-0 xl:w-5/6 pt-2'>
                            <p className='text-[rgb(133,115,138)] w-2/3'><span className='font-medium'>Registered City:</span> {vehicles.city}</p>
                            <p className='hidden xl:flex text-[rgb(133,115,138)]'><span className='font-medium'>Hybrid Engine: </span> {vehicles.hybrid}</p>
                            <p className='xl:hidden text-[rgb(133,115,138)]'><span className='font-medium'>Hybrid:</span> {vehicles.hybrid}</p>
                        </div>

                        <div className='flex flex-row w-full xl:w-5/6 pt-2 justify-between lg:justify-normal sm:px-4 lg:px-0'>

                            <div className='flex gap-2 w-2/3'>
                                <img className='w-5' src='/icons8-calendar-50.png' alt='car-year' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.model}</p>
                            </div>

                            <div className='flex gap-2'>
                                <img className='w-5' src='/icons8-road-50.png' alt='car-model' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.odometer} Km</p>
                            </div>

                        </div>

                        <div className='flex flex-row w-full xl:w-5/6 pt-2 justify-between lg:justify-normal sm:px-4 lg:px-0'>

                            <div className='flex gap-2 w-2/3'>
                                <img className='w-5' src='/icons8-fuel-50.png' alt='car-year' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.fuelType}</p>
                            </div>

                            <div className='flex gap-2'>
                                <img className='w-5' src='/icons8-car-engine-50 (2).png' alt='car-engine' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.engine}</p>
                            </div>

                        </div>

                        <div className='flex flex-row w-full xl:w-5/6 pt-2 justify-between lg:justify-normal sm:px-4 lg:px-0'>

                            <div className='flex gap-2 w-2/3'>
                                <img className='w-5' src='/icons8-speedometer-50 (1).png' alt='car-year' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.mileage}</p>
                            </div>

                            <div className='flex gap-2'>
                                <img className='w-5' src='/icons8-car-50.png' alt='car-engine' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.condition}</p>
                            </div>

                        </div>

                        <div className='flex flex-row w-full xl:w-5/6 pt-2 justify-between lg:justify-normal sm:px-4 lg:px-0'>

                            <div className='flex gap-2 w-2/3'>
                                <img className='w-5' src='/icons8-oil-storage-tank-50.png' alt='car-year' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.fuelTankCapacity}</p>
                            </div>

                            <div className='flex gap-2'>
                                <img className='w-5' src='/icons8-gear-stick-50.png' alt='car-engine' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.transmission}</p>
                            </div>

                        </div>

                        <div className='flex flex-row w-full xl:w-5/6 pt-2 justify-between lg:justify-normal sm:px-4 lg:px-0'>

                            <div className='flex gap-2 w-2/3'>
                                <img className='w-5' src='/icons8-car-seat-50.png' alt='car-year' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.seats} Seats</p>
                            </div>

                            <div className='flex gap-2'>
                                <img className='w-5' src='/icons8-color-mode-50.png' alt='car-engine' />
                                <p className='text-[rgb(133,115,138)]'> {vehicles.color}</p>
                            </div>

                        </div>

                        <div className='flex flex-row w-full xl:w-5/6 pt-6 sm:px-4 lg:px-0'>

                            <div className='flex gap-2 w-2/3'>
                                <button onClick={() => setOwnerDetails(true)} className='w-28 h-10 text-sm md:text-base md:w-32 md:h-13 rounded-md text-white cursor-pointer bg-[rgb(2,6,111)]'>Owner Details</button>
                            </div>

                            <div className='flex gap-2'>
                                {/* <img className='w-5' src='/icons8-color-mode-50.png' alt='car-engine' />
                <p className='text-[rgb(133,115,138)]'> {vehicles.color}</p> */}
                            </div>

                        </div>

                    </div>

                </div>

                <div className='relative'>
                    {ownerDetails && (
                        <div className='fixed inset-0 bg-black/60 w-full h-screen z-40 '> </div>
                    )}

                    {ownerDetails && (
                        <div className='fixed inset-0 flex bg-black/10 w-full h-screen z-50 items-center justify-center'>
                            <OwnerDetails ownerName={vehicles.ownerName} ownerAddress={vehicles.city} 
                            ownerPhoneNumber={vehicles.phoneNumber} hideOwnerDetails = {hideOwnerDetails} />
                        </div>
                    )}

                <div className='py-4 px-2 sm:px-3 md:px-4 lg:px-6 gap-2 flex flex-col bg-white'>
                    <h1 className='font-medium text-md md:text-lg lg:text-xl'>Description</h1>
                    <p>{vehicles.description}</p>
                </div>
                </div>

            </div>
            <PostAnVehicle />

            <SimilarVehicles vehName={vehicles.name} vehMake={vehicles.make} />

            <Footer />
        </>
    )
}

export default VehicleDetails
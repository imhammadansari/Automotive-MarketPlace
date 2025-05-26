import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FIlterMenu = ({ allVehicles, setAllVehicles, vehicles, setVehicles, hideFilterMenu }) => {

    const [miniPrice, setMiniPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(99999999);
    const [condition, setCondition] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [transmission, setTransmission] = useState('');

    const fetchVehicles = async () => {
            try {
                const response = await axios.get('https://automotive-marketplace.up.railway.app/vehicles/viewvehicles');
                setVehicles(response.data);
                setAllVehicles(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error.message);
            }
        }

    const filtersVeh = (e) => {
        e.preventDefault();

        const filteredVeh = allVehicles.filter(vehicle => {
            const priceMatch = vehicle.price >= miniPrice && vehicle.price <= maxPrice;
            const fuelTypeMatch = !fuelType || vehicle.fuelType.toLowerCase() === fuelType.toLowerCase();
            const conditionMatch = !condition || vehicle.condition.toLowerCase() === condition.toLowerCase();
            const transmissionMatch = !transmission || vehicle.transmission.toLowerCase() === transmission.toLowerCase();

            return priceMatch && fuelTypeMatch && conditionMatch && transmissionMatch
        });

        setVehicles(filteredVeh);
    }

    useEffect(() => {
        fetchVehicles();
    }, []);

    return (
        <>
            <div className='inset-0 fixed z-50 overflow-hidden'>
                <div className='inset-0 bg-black/20 absolute'></div>

                <div className='flex flex-col w-2/3 h-full relative bg-white'>
                    <h1 onClick={hideFilterMenu} className='px-4'>Close</h1>
                    <form onSubmit={filtersVeh} className='px-4 py-4 w-full'>

                        <div className='w-full'>
                            <h1 className='font-medium'>Price Range</h1>
                            <div className='flex gap-2'>
                                <input className='border border-black/20 w-1/2 p-1' type='number' name='miniPrice'
                                    onChange={(e) => setMiniPrice(e.target.value)} placeholder='min price' />
                                <input className='border border-black/20 w-1/2 p-1' type='number' name='maxPrice'
                                    onChange={(e) => setMaxPrice(e.target.value)} placeholder='max price' />
                            </div>
                        </div>

                        <div className='w-full'>
                            <h1 className='pt-4 font-medium'>Condition</h1>

                            <div className='flex gap-2'>

                                <div className='flex gap-1'>
                                    <input type='checkbox' checked={condition === "New"} value='New' name='condition' onChange={(e) => setCondition(e.target.checked ? e.target.value : '')} />
                                    <p className='text-sm lg:text-base'>New</p>
                                </div>

                                <div className='flex gap-1'>
                                    <input type='checkbox' checked={condition === "Old"} value='Old' name='condition' onChange={(e) => setCondition(e.target.checked ? e.target.value : '')} />
                                    <p className='text-sm lg:text-base'>Old</p>
                                </div>

                            </div>

                        </div>

                        <h1 className='pt-4 font-medium'>Fuel Type</h1>
                        <div className='flex gap-3'>

                            <div className='flex gap-1'>
                                <input type='checkbox' checked={fuelType === "Petrol"} value='Petrol' name='fuelType' onChange={(e) => setFuelType(e.target.checked ? e.target.value : '')} />
                                <p className='text-sm lg:text-base'>Petrol</p>
                            </div>

                            <div className='flex gap-1'>
                                <input type='checkbox' checked={fuelType === "Diesel"} value='Diesel' name='fuelType' onChange={(e) => setFuelType(e.target.checked ? e.target.value : '')} />
                                <p className='text-sm lg:text-base'>Diesel</p>
                            </div>

                            <div className='flex gap-1'>
                                <input type='checkbox' checked={fuelType === "CNG"} value='CNG' name='fuelType' onChange={(e) => setFuelType(e.target.checked ? e.target.value : '')} />
                                <p className='text-sm lg:text-base'>CNG</p>
                            </div>

                        </div>

                        <div className='flex flex-col w-full'>

                            <h1 className='font-medium pt-4'>Transmisson</h1>

                            <div className='flex gap-3'>

                                <div className='flex gap-1'>
                                    <input type='checkbox' checked={transmission === "Manual"} value='Manual' name='transmission' onChange={(e) => setTransmission(e.target.checked ? e.target.value : '')} />
                                    <p className='text-sm lg:text-base'>Manual</p>
                                </div>

                                <div className='flex gap-1'>
                                    <input type='checkbox' checked={transmission === "Automatic"} value='Automatic' name='transmission' onChange={(e) => setTransmission(e.target.checked ? e.target.value : '')} />
                                    <p className='text-sm lg:text-base'>Automatic</p>
                                </div>

                            </div>

                        </div>
                        <button type='submit' className='w-20 h-10 text-[rgb(2,6,111)] border rounded-md mt-2 cursor-pointer'>Search</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default FIlterMenu
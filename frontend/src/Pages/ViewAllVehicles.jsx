import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import FIlterMenu from '../Components/FIlterMenu';
import Footer from '../Components/Footer';
import SearchBar from '../Components/SearchBar';
import { SearchVehContext } from '../context/SearchVehContext';

const ViewAllVehicles = () => {
    

    const [allVehicles, setAllVehicles] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [miniPrice, setMiniPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(99999999);
    const [condition, setCondition] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [transmission, setTransmission] = useState('');
    const [filter, setFilter] = useState(false);
    const [searchValue, setsearchValue] = useState('')

    console.log("From Page", searchValue)


    const fetchVehicles = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8000/vehicles/viewvehicles');
            setVehicles(response.data);
            setAllVehicles(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    const fetchFilteredVeh = () => {

        const searchTerm = searchValue.toLowerCase().trim();

        if (!searchTerm) {
            setVehicles(allVehicles);
            return;
          }
    
        const filteredVeh = allVehicles.filter(vehicle => {
          const fieldItems = [
            vehicle.name,
            vehicle.model,
            vehicle.make,
            vehicle.fuelType,
            vehicle.transmission,
            vehicle.engine
          ].filter(field => field != null).map(field => field.toString().toLowerCase());
          return fieldItems.some(field => field.includes(searchTerm));
        })
    
        setVehicles(filteredVeh);
      }

    const showFilterMenu = () => {
        setFilter(!filter);
    }

    const hideFilterMenu = () => {
        setFilter(false);
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


    if (loading) return <div>Loading...</div>

    return (
        <>
            <Header />
            <div className='flex w-full gap-4 bg-gray-100 px-2 sm:px-3 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-6 items-center justify-center'>

                <div className=' flex flex-col md:flex-row w-full'>

                <div className='hidden md:flex flex-col md:w-1/4 xl:w-1/5 mt-1 mr-1 bg-white rounded-xl'>
                
                <form onSubmit={filtersVeh} className='px-4 py-4'>

                    <div>
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
                    <input type='checkbox' checked={condition === "New"} value='New' name='condition' onChange={(e) => setCondition(e.target.checked ? e.target.value : '')}/>
                    <p className='text-sm lg:text-base'>New</p>
                    </div>

                    <div className='flex gap-1'>
                    <input type='checkbox' checked={condition === "Old"} value='Old' name='condition' onChange={(e) => setCondition(e.target.checked ? e.target.value : '')}/>
                    <p className='text-sm lg:text-base'>Old</p>
                    </div>

                    </div>

                    </div>
                    
                    <h1 className='pt-4 font-medium'>Fuel Type</h1>
                    <div className='flex gap-3'>

                    <div className='flex gap-1'>
                    <input type='checkbox' checked={fuelType === "Petrol"} value='Petrol' name='fuelType' onChange={(e) => setFuelType(e.target.checked ? e.target.value : '')}/>
                    <p className='text-sm lg:text-base'>Petrol</p>
                    </div>

                    <div className='flex gap-1'>
                    <input type='checkbox' checked={fuelType === "Diesel"} value='Diesel' name='fuelType' onChange={(e) => setFuelType(e.target.checked ? e.target.value : '')}/>
                    <p className='text-sm lg:text-base'>Diesel</p>
                    </div>

                    <div className='flex gap-1'>
                    <input type='checkbox' checked={fuelType === "CNG"} value='CNG' name='fuelType' onChange={(e) => setFuelType(e.target.checked ? e.target.value : '')}/>
                    <p className='text-sm lg:text-base'>CNG</p>
                    </div>

                    </div>

                    <div className='flex flex-col w-full'>

                        <h1 className='font-medium pt-4'>Transmisson</h1>

                        <div className='flex gap-3'>
                            
                        <div className='flex gap-1'>
                        <input type='checkbox' checked={transmission === "Manual"} value='Manual' name='transmission' onChange={(e) => setTransmission(e.target.checked ? e.target.value : '')}/>
                        <p className='text-sm lg:text-base'>Manual</p>
                        </div>

                        <div className='flex gap-1'>
                        <input type='checkbox' checked={transmission === "Automatic"} value='Automatic' name='transmission' onChange={(e) => setTransmission(e.target.checked ? e.target.value : '')}/>
                        <p className='text-sm lg:text-base'>Automatic</p>
                        </div>

                        </div>

                    </div>
                    <button type='submit' className='w-20 h-10 text-[rgb(2,6,111)] border rounded-md mt-2 cursor-pointer'>Search</button>
                </form>


                </div>

                {filter && (
                        <FIlterMenu hideFilterMenu={hideFilterMenu} allVehicles={allVehicles} setAllVehicles={setAllVehicles} vehicles={vehicles} setVehicles={setVehicles}/>

                )}

                <div className='flex flex-col w-full'>
                <h1 className='px-2 flex md:hidden' onClick={showFilterMenu}>Filter</h1>
                <SearchBar searchValue={searchValue} setsearchValue={setsearchValue} onSearch={fetchFilteredVeh} />
                    {vehicles.length > 0 ? (
                        vehicles?.map((item, index) => {
                            const isThumbnail = item.thumbnail && item.thumbnail.data;
                            return (
                                <Link to={`/vehicleDetails/${item._id}`} key={index}>
                                    <div className='flex w-full items-center md:items-start flex-col md:flex-row gap-5 md:gap-10 px-2 sm:px-3 md:px-4 lg:px-6 py-4 sm:py-3 md:py-4 lg:py-6 border-4 shadow-lg mb-6 rounded-xl bg-white border-gray-100'>
                                        {isThumbnail ? (
                                            <img className='w-[12rem] rounded-xl md:w-[8rem]' src={`data:image/jpeg;base64,${Buffer.from(item.thumbnail.data).toString('base64')}`} />
                                        ) : (
                                            <div>No Thumbnail</div>
                                        )}
    
                                        <div className='flex flex-col md:flex-row w-full justify-between'>
    
                                            <div className='flex flex-col justify-center w-full'>
                                                <h1 className='font-medium text-2xl md:text-xl text-center md:text-start'>{item.name}</h1>
                                                <div className='hidden md:flex flex-col w-full md:flex-row gap-3 md:gap-8 pt-2 md:pt-3 text-[rgb(133,115,138)]'>
    
                                                    <div className='flex gap-2 justify-center items-center'>
                                                        <img className='w-5' src='./icons8-calendar-50.png' alt='car-model' />
                                                        <p className='text-sm lg:text-base'>{item.model}</p>
                                                    </div>
    
                                                    <div className='flex gap-2 justify-center items-center'>
                                                        <img className='w-5' src='./icons8-road-50.png' alt='car-driven' />
                                                        <p className='text-sm lg:text-base'>{item.odometer} Km</p>
                                                    </div>
    
                                                    <div className='flex gap-2 justify-center items-center'>
                                                        <img className='w-5' src='./icons8-fuel-50.png' alt='fuel-type' />
                                                        <p className='text-sm lg:text-base'>{item.fuelType}</p>
                                                    </div>
    
                                                    <div className='flex gap-2 justify-center items-center'>
                                                        <img className='w-5' src='./icons8-gear-stick-50.png' alt='car-transimission' />
                                                        <p className='text-sm lg:text-base'>{item.transmission}</p>
                                                    </div>
    
                                                    <div className='flex gap-2 justify-center items-center'>
                                                        <img className='w-5' src='./icons8-car-50.png' alt='car-condition' />
                                                        <p className='text-sm lg:text-base'>{item.condition}</p>
                                                    </div>
    
                                                </div>
    
                                                {/* for mobile */}
    
                                                <div className='flex md:hidden flex-col w-full gap-3 pt-5 text-[rgb(133,115,138)]'>
    
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
                                                <h1 className='text-lg md:text-x lg:text-2xl font-medium'>Rs. {item.price}</h1>
                                            </div>
                                        </div>
    
                                    </div>
                                </Link>
                            )
                        })
                    ) : (
                        <div className='px-2'>No Vehicles Found</div>
                    )}

                </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default ViewAllVehicles      
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AdminUpdateVehDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setvehName] = useState('');
    const [model, setvehModel] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [make, setMake] = useState('');
    const [fuelType, setfuelType] = useState('');
    const [seats, setvehSeats] = useState('');
    const [color, setColor] = useState('');
    const [hybrid, sethybrid] = useState('');
    const [engine, setengine] = useState('');
    const [mileage, setmileage] = useState('');
    const [condition, setcondition] = useState('');
    const [city, setCity] = useState('');
    const [odometer, setOdometer] = useState('');
    const [fuelTankCapacity, setFuelTankCapacity] = useState('');
    const [transmission, setTransmission] = useState('');
    const [description, setDescription] = useState('');
    const [price, setprice] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState('');


    axios.defaults.withCredentials = true;
    const getVehDetails = async () => {

        try {
            setLoading(true);
            const response = await axios.get(`https://automotive-marketplace.up.railway.app/vehicles/viewVehicle/${id}`);
            const responseData = response.data;
            console.log(responseData);
            if (responseData) {
                setvehName(responseData.name);
                setvehModel(responseData.model);
                setMake(responseData.make);
                setOwnerName(responseData.ownerName);
                setPhoneNumber(responseData.phoneNumber);
                setfuelType(responseData.fuelType);
                setvehSeats(responseData.seats);
                sethybrid(responseData.hybrid);
                setengine(responseData.engine);
                setmileage(responseData.mileage);
                setcondition(responseData.condition);
                setCity(responseData.city);
                setColor(responseData.color);
                setOdometer(responseData.odometer);
                setTransmission(responseData.transmission);
                setFuelTankCapacity(responseData.fuelTankCapacity);
                setDescription(responseData.description);
                setprice(responseData.price);
            } else {
                alert("Details not found");
            }
        } catch (error) {
            console.log(error.message);
            seterror(error.response.data.message || "Updates Failed");

        } finally {
            setLoading(false);
        }
    }

    const updateDetails = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`https://automotive-marketplace.up.railway.app/vehicles/adminUpdateVehicle/${id}`, {
                name: name,
                model: model,
                make: make,
                ownerName: ownerName,
                phoneNumber: phoneNumber,
                fuelType: fuelType,
                seats: seats,
                color: color,
                hybrid: hybrid,
                engine: engine,
                mileage: mileage,
                condition: condition,
                city: city,
                odometer: odometer,
                fuelTankCapacity: fuelTankCapacity,
                transmission: transmission,
                description: description,
                price: price

            });

            if (response.status === 200) {
                alert("Info Updated Successfully");
                getVehDetails();

            }
            else if (response.status === 503) {
                alert("User must be loggedIn!");
            }
            else if (response.status === 500) {
                alert("Failed to register vehicle");
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            console.log(error.message);
            seterror(error.response.data.message || "Updates Failed");

        }
    }

    const deleteVehicle = async() => {
        try {
            const response = await axios.post(`https://automotive-marketplace.up.railway.app/vehicles/adminDeleteVehicle/${id}`);
            if(response.status === 200){
                alert(`Vehicle which was posted by ${ownerName} against the ${response.data._id} has been deleted`);
                navigate('adminDashboard');
            }
        } catch (error) {
            
        }
    }

    const backButton = () => {
        navigate('/adminDashboard');
    }

    useEffect(() => {
        getVehDetails();
    }, []);

    if(loading) return <div>Loading...</div>


    return (
        <>
            <Header />
            <div className='w-full bg-gray-200 px-2 md:px-4 lg:px-16 py-4 md:py-2 items-center justify-center'>

                {/* For Desktop */}
                <form onSubmit={updateDetails} className='hidden sm:flex flex-col px-4 gap-4 py-2 rounded-lg bg-white items-center justify-center'>
                    <h1 className='text-center text-2xl text-[rgb(2,6,111)] pb-2'>Update Your Vehicle</h1>

                    {/* First Row */}
                    <div className='flex gap-14 w-full items-center justify-center'>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Vehicle Name:</h1>
                            <input name='name' className='w-full rounded-md h-8 p-2 border border-black' value={name} onChange={(e) => setvehName(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Vehicle Model:</h1>
                            <input name='model' className='w-full rounded-md h-8 px-2 border border-black' value={model} onChange={(e) => setvehModel(e.target.value)} type='text' required />
                        </div>

                    </div>

                    {/* Second Row */}
                    <div className='flex gap-14 w-full items-center justify-center'>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Vehicle Make:</h1>
                            <input name='make' className='w-full rounded-md h-8 p-2 border border-black' value={make} onChange={(e) => setMake(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Fuel Type:</h1>
                            <select name='fuelType' onChange={(e) => setfuelType(e.target.value)} value={fuelType} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Fuel Type</option>
                                <option>Petrol</option>
                                <option>Diesel</option>
                                <option>CNG</option>
                                <option>LNG</option>
                            </select>
                        </div>

                    </div>

                    {/* Third Row */}
                    <div className='flex gap-14 w-full items-center justify-center'>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Registration City:</h1>
                            <input name='city' className='w-full rounded-md h-8 p-2 border border-black' value={city} onChange={(e) => setCity(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Vehicle Hybrid:</h1>
                            <select name='hybrid' onChange={(e) => sethybrid(e.target.value)} value={hybrid} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Hybrid</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                    </div>

                    {/* Fourth Row */}
                    <div className='flex gap-14 w-full items-center justify-center'>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Vehicle Color:</h1>
                            <input name='color' className='w-full rounded-md h-8 p-2 border border-black' value={color} onChange={(e) => setColor(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Vehicle Engine:</h1>
                            <input name='engine' className='w-full rounded-md h-8 px-2 border border-black' value={engine} onChange={(e) => setengine(e.target.value)} type='text' required />
                        </div>

                    </div>

                    {/* Fifth Row */}
                    <div className='flex gap-14 w-full items-center justify-center'>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Vehicle Milage:</h1>
                            <input name='mileage' className='w-full rounded-md h-8 p-2 border border-black' value={mileage} onChange={(e) => setmileage(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Vehicle Condition:</h1>
                            <select name='condition' onChange={(e) => setcondition(e.target.value)} value={condition} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Vehicle Condition</option>
                                <option>New</option>
                                <option>Old</option>
                            </select>
                        </div>

                    </div>

                    {/* Sixth Row */}
                    <div className='flex gap-14 w-full items-center justify-center'>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>KM's Driven:</h1>
                            <input name='odometer' className='w-full rounded-md h-8 p-2 border border-black' value={odometer} onChange={(e) => setOdometer(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Vehicle Seats:</h1>
                            <select name='seats' onChange={(e) => setvehSeats(e.target.value)} value={seats} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Vehicle Seats</option>
                                <option>2</option>
                                <option>4</option>
                                <option>7</option>
                            </select>
                        </div>

                    </div>
                    
                    {/* Seventh Row */}
                    <div className='flex gap-14 w-full items-center justify-center'>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Fuel Tank Capacity:</h1>
                            <input name='fuelTankCapacity' className='w-full rounded-md h-8 p-2 border border-black' value={fuelTankCapacity} onChange={(e) => setFuelTankCapacity(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Transmission:</h1>
                            <select name='transmission' onChange={(e) => setTransmission(e.target.value)} value={transmission} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Transmission</option>
                                <option>Manual</option>
                                <option>Automatic</option>
                            </select>
                        </div>

                    </div>
                    
                    {/* Eighth Row */}
                    <div className='flex gap-14 w-full items-center justify-center'>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Owner Name:</h1>
                            <input name='ownerName' className='w-full rounded-md h-8 p-2 border border-black' value={ownerName} onChange={(e) => setOwnerName(e.target.value)} type='text' disabled />
                        </div>

                        <div className='flex flex-col w-2/4 gap-1'>
                            <h1 className='font-medium'>Phone Number:</h1>
                            <input name='phoneNumber' className='w-full rounded-md h-8 p-2 border border-black' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type='number' disabled />
                        </div>

                    </div>

                    {/* Ninth Row */}
                    <div className='flex gap-14 w-full justify-start'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Price:</h1>
                            <input name='price' className='w-full rounded-md h-8 p-2 border border-black' value={price} onChange={(e) => setprice(e.target.value)} type='text' required />
                        </div>
                    </div>

                    {/* Tenth Row */}
                    <div className='flex gap-14 w-full justify-start'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Description:</h1>
                            <textarea name='description' rows={5} className='w-full rounded-md p-2 border border-black' value={description} onChange={(e) => setDescription(e.target.value)}> </textarea>
                        </div>

                    </div>


                    <div className='flex gap-8 '>
                    <button type='submit' className='w-24 h-10 bg-[rgb(2,6,111)] text-white rounded-md cursor-pointer'>Update</button>
                    <button type='submit' onClick={deleteVehicle} className='w-24 h-10 bg-red-600 rounded-md cursor-pointer'>Delete</button>
                    <button type='button' onClick={backButton}  className='w-24 h-10 border border-[rgb(2,6,111)] rounded-md cursor-pointer'>Back</button>
                    </div>

                </form>



                {/* For Mobile */}
                <form onSubmit={updateDetails} className='flex sm:hidden flex-col px-2 gap-4 py-2 rounded-lg bg-white items-center justify-center'>
                    <h1 className='text-center text-xl text-[rgb(2,6,111)] pb-2'>Advertise Your Vehicle</h1>

                    {/* First Row */}
                    <div className='flex flex-col gap-2 w-full items-center justify-center'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Name:</h1>
                            <input className='w-full rounded-md h-8 p-2 border border-black' value={name} onChange={(e) => setvehName(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Model:</h1>
                            <input className='w-full rounded-md h-8 px-2 border border-black' value={model} onChange={(e) => setvehModel(e.target.value)} type='text' required />
                        </div>

                    </div>

                    {/* Second Row */}
                    <div className='flex flex-col gap-2 w-full items-center justify-center'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Make:</h1>
                            <input className='w-full rounded-md h-8 p-2 border border-black' value={make} onChange={(e) => setMake(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Fuel Type:</h1>
                            <select onChange={(e) => setfuelType(e.target.value)} value={fuelType} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Fuel Type</option>
                                <option>Petrol</option>
                                <option>Diesel</option>
                                <option>CNG</option>
                                <option>LNG</option>
                            </select>
                        </div>

                    </div>

                    {/* Third Row */}
                    <div className='flex flex-col gap-2 w-full items-center justify-center'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Registration City:</h1>
                            <input className='w-full rounded-md h-8 p-2 border border-black' value={city} onChange={(e) => setCity(e.target.value)} type='text' required />

                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Hybrid:</h1>
                            <select onChange={(e) => sethybrid(e.target.value)} value={hybrid} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Hybrid</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                    </div>

                    {/* Fourth Row */}
                    <div className='flex flex-col gap-2 w-full items-center justify-center'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Color:</h1>
                            <input className='w-full rounded-md h-8 p-2 border border-black' value={color} onChange={(e) => setColor(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Engine:</h1>
                            <input className='w-full rounded-md h-8 px-2 border border-black' value={engine} onChange={(e) => setengine(e.target.value)} type='text' required />
                        </div>

                    </div>

                    {/* Fifth Row */}
                    <div className='flex flex-col gap-2 w-full items-center justify-center'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Milage:</h1>
                            <input className='w-full rounded-md h-8 p-2 border border-black' value={mileage} onChange={(e) => setmileage(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Condition:</h1>
                            <select onChange={(e) => setcondition(e.target.value)} value={condition} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Vehicle Condition</option>
                                <option>New</option>
                                <option>Old</option>
                            </select>
                        </div>

                    </div>

                    {/* Sixth Row */}
                    <div className='flex flex-col gap-2 w-full items-center justify-center'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>KM's Driven:</h1>
                            <input name='odometer' className='w-full rounded-md h-8 p-2 border border-black' value={odometer} onChange={(e) => setOdometer(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Seats:</h1>
                            <select name='seats' onChange={(e) => setvehSeats(e.target.value)} value={seats} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Vehicle Seats</option>
                                <option>2</option>
                                <option>4</option>
                                <option>7</option>
                            </select>
                        </div>

                    </div>
                    
                    {/* Seventh Row */}
                    <div className='flex flex-col gap-2 w-full items-center justify-center'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Fuel Tank Capacity:</h1>
                            <input name='fuelTankCapacity' className='w-full rounded-md h-8 p-2 border border-black' value={fuelTankCapacity} onChange={(e) => setFuelTankCapacity(e.target.value)} type='text' required />
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Transmission:</h1>
                            <select name='transmission' onChange={(e) => setTransmission(e.target.value)} value={transmission} className='w-full rounded-md py-1 border border-black'>
                                <option>Select Transmission</option>
                                <option>Manual</option>
                                <option>Automatic</option>
                            </select>
                        </div>

                    </div>
                    
                    {/* Eighth Row */}
                    <div className='flex flex-col gap-2 w-full items-center justify-center'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Owner Name:</h1>
                            <input name='ownerName' className='w-full rounded-md h-8 p-2 border border-black' value={ownerName} onChange={(e) => setOwnerName(e.target.value)} type='text' disabled />
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Phone Number:</h1>
                            <input name='phoneNumber' className='w-full rounded-md h-8 p-2 border border-black' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type='number' disabled />
                        </div>

                    </div>

                    {/* Sixth Row */}
                    <div className='flex flex-col gap-2 w-full justify-start'>
                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Vehicle Price:</h1>
                            <input className='w-full rounded-md h-8 p-2 border border-black' value={price} onChange={(e) => setprice(e.target.value)} type='text' required />
                        </div>
                    </div>

                    {/* Tenth Row */}
                    <div className='flex gap-14 w-full justify-start'>

                        <div className='flex flex-col w-full gap-1'>
                            <h1 className='font-medium'>Description:</h1>
                            <textarea name='description' rows={5} className='w-full rounded-md p-2 border border-black' value={description} onChange={(e) => setDescription(e.target.value)}> </textarea>
                        </div>

                    </div>

                    <div className='flex gap-4'>
                    <button type='submit' className='w-24 h-10 bg-[rgb(2,6,111)] rounded-md text-white cursor-pointer'>Update</button>
                    <button type='submit' onClick={deleteVehicle} className='w-24 h-10 bg-red-600 rounded-md cursor-pointer'>Delete</button>
                    <button type='button' onClick={backButton} className='w-24 h-10 border border-[rgb(2,6,111)] cursor-pointer rounded-md'>Back</button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default AdminUpdateVehDetails
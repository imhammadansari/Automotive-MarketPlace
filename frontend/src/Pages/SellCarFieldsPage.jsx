import React, { useState } from 'react'
import Header from '../Components/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellCarFieldsPage = () => {

  const navigate = useNavigate();

  const [name, setvehName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [model, setvehModel] = useState('');
  const [fuelType, setfuelType] = useState('');
  const [seats, setvehSeats] = useState('');
  const [make, setMake] = useState('');
  const [color, setColor] = useState('');
  const [hybrid, sethybrid] = useState('');
  const [engine, setengine] = useState('');
  const [mileage, setmileage] = useState('');
  const [condition, setcondition] = useState('');
  const [price, setprice] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fuelTankCapacity, setFuelTankCapacity] = useState('');
  const [odometer, setOdometer] = useState('');
  const [transmission, setTransmission] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setthumbnail] = useState('');
  const [images, setimages] = useState([]);
  const [error, seterror] = useState('');
  
  axios.defaults.withCredentials = true;

  const vehDetails = async(e) => {
    e.preventDefault();
    seterror('');
    const formData = new FormData();
    formData.append("name", name);
    formData.append("ownerName", ownerName);
    formData.append("model", model);
    formData.append("fuelType", fuelType);
    formData.append("color", color);
    formData.append("seats", seats);
    formData.append("hybrid", hybrid);
    formData.append("make", make);
    formData.append("engine", engine);
    formData.append("mileage", mileage);
    formData.append("condition", condition);
    formData.append("price", price);
    formData.append("city", city);
    formData.append("phoneNumber", phoneNumber);
    formData.append("fuelTankCapacity", fuelTankCapacity);
    formData.append("transmission", transmission);
    formData.append("odometer", odometer);
    formData.append("description", description);
    if(thumbnail){
      formData.append("thumbnail", thumbnail);
    };
    Array.from(images).forEach(image => {
    formData.append("images", image)
    });

    try {
      const response = await axios.post('https://automotive-marketplace.up.railway.app/vehicles/vehicleRegister', 
        formData,
        { 
          headers: { "Content-Type": "multipart/form-data" } 
        }
      );

      if(response.status === 200){
        alert("Advertise Registered Successfully");
        setvehName('');
        setOwnerName('');
        setvehModel('');
        setColor('');
        setfuelType('');
        setvehSeats('');
        setMake('');
        sethybrid('');
        setengine('');
        setmileage('');
        setcondition('');
        setprice('');
        setCity('');
        setPhoneNumber('');
        setFuelTankCapacity('');
        setTransmission('');
        setDescription('');
        setOdometer('');
        setthumbnail(null);
        setimages([]);

      }
      else if(response.status === 503) {
        alert("User must be loggedIn!");
      }
      else if(response.status === 500){
        alert("Failed to register vehicle");
      } else{
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error.message);
      seterror("Registeration Failed");
      
    }
  }


  return (
    <>
      <Header />
      <div className='w-full bg-gray-200 px-2 md:px-4 lg:px-16 py-4 md:py-2 items-center justify-center'>

        {/* For Desktop */}
        <form onSubmit={vehDetails} className='hidden sm:flex flex-col px-4 gap-4 py-2 rounded-lg bg-white items-center justify-center'>
          <h1 className='text-center text-2xl text-[rgb(2,6,111)] pb-2'>Advertise Your Vehicle</h1>

          {/* First Row */}
          <div className='flex gap-14 w-full items-center justify-center'>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Name:</h1>
              <input value={name} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setvehName(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Registration City:</h1>
              <input value={city} className='w-full rounded-md h-8 px-2 border border-black' onChange={(e) => setCity(e.target.value)} type='text' required />
            </div>

          </div>

          {/* Second Row */}
          <div className='flex gap-14 w-full justify-start'>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Owner's Name:</h1>
              <input value={ownerName} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setOwnerName(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Owner's Phone Number:</h1>
              <input value={phoneNumber} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setPhoneNumber(e.target.value)} type='number' required />
            </div>

          </div>
          

          {/* Third Row */}
          <div className='flex gap-14 w-full items-center justify-center'>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Make:</h1>
              <input value={make} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setMake(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Model:</h1>
              <input value={model} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setvehModel(e.target.value)} type='text' required />
            </div>

          </div>
          
          {/* Fourth Row */}
          <div className='flex gap-14 w-full items-center justify-center'>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Mileage:</h1>
              <input value={mileage} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setmileage(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Engine:</h1>
              <input value={engine} className='w-full rounded-md h-8 px-2 border border-black' onChange={(e) => setengine(e.target.value)} type='text' required />
            </div>

          </div>

          {/* Fifth Row */}
          <div className='flex gap-14 w-full items-center justify-center'>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Fuel Type:</h1>
              <select value={fuelType} onChange={(e) => setfuelType(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Fuel Type</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>CNG</option>
                <option>LNG</option>
              </select>            </div>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Condition:</h1>
              <select value={condition} onChange={(e) => setcondition(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Vehicle Condition</option>
                <option>New</option>
                <option>Old</option>
              </select>
            </div>

          </div>
          
          {/* Sixth Row */}
          <div className='flex gap-14 w-full justify-start'>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Color:</h1>
              <input value={color} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setColor(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>KM's Driven:</h1>
              <input value={odometer} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setOdometer(e.target.value)} type='text' required />
            </div>

          </div>
          
          {/* Seventh Row */}
          <div className='flex gap-14 w-full items-center justify-center'>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Seats:</h1>
              <select value={seats} onChange={(e) => setvehSeats(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Vehicle Seats</option>
                <option>2</option>
                <option>4</option>
                <option>7</option>
              </select>
            </div>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Hybrid:</h1>
              <select value={hybrid} onChange={(e) => sethybrid(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Hybrid</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

          </div>

          {/* Eighth Row */}
          <div className='flex gap-14 w-full items-center justify-center'>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Fuel Tank Capacity:</h1>
              <input value={fuelTankCapacity} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setFuelTankCapacity(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Transmission:</h1>
              <select value={transmission} onChange={(e) => setTransmission(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Transmission</option>
                <option>Manual</option>
                <option>Automatic</option>
                <option>Both</option>
              </select>
            </div>

          </div>

           {/* Ninth Row */}
           <div className='flex gap-14 w-full justify-start'>

<div className='flex flex-col w-full gap-1'>
  <h1 className='font-medium'>Vehicle Price:</h1>
  <input value={price} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setprice(e.target.value)} type='nummber' required />
</div>

</div>

          {/* Tenth Row */}
          <div className='flex gap-14 w-full items-center justify-center'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Description:</h1>
              <textarea value={description} rows={5} className='rounded-md p-2 border border-black' onChange={(e) => setDescription(e.target.value)} type='text' required></textarea>
            </div>

          </div>
          
          
          {/* Eleventh Row */}
          <div className='flex gap-14 w-full justify-start'>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Thumbnail:</h1>
              <input accept="image/*" type='file' name='thumbnail' onChange={(e) => setthumbnail(e.target.files[0])} />
            </div>

          <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Images:</h1>
              <input accept="image/*" type='file' multiple name='images' onChange={(e) => {setimages(e.target.files)}} />
            </div>

          </div>

          <div className='flex gap-6'>

          <button type='submit' className='w-24 h-10 text-white bg-[rgb(2,6,111)] cursor-pointer rounded-md'>Advertise</button>
          <button onClick={() => navigate('/vehiclesList')} type='submit' className='w-24 h-10 border cursor-pointer text-[rgb(2,6,111)] border-[rgb(2,6,111)] rounded-md'>Back</button>

          </div>          
        </form>
        
        
        
        {/* For Mobile */}
        <form onSubmit={vehDetails} className='flex sm:hidden flex-col px-2 gap-4 py-2 rounded-lg bg-white items-center justify-center'>
          <h1 className='text-center text-xl text-[rgb(2,6,111)] pb-2'>Advertise Your Vehicle</h1>

          {/* First Row */}
          <div className='flex flex-col gap-2 w-full items-center justify-center'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Name:</h1>
              <input value={name} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setvehName(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Registration City:</h1>
              <input value={city} className='w-full rounded-md h-8 px-2 border border-black' onChange={(e) => setCity(e.target.value)} type='text' required />
            </div>

          </div>

          {/* Second Row */}
          <div className='flex flex-col gap-2 w-full items-center justify-center'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Owner's Name:</h1>
              <input value={ownerName} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setOwnerName(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Owner's Phone Number:</h1>
              <input value={phoneNumber} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setPhoneNumber(e.target.value)} type='text' required />
            </div>

          </div>

          {/* Third Row */}
          <div className='flex flex-col gap-2 w-full items-center justify-center'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Make:</h1>
              <input value={make} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setMake(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Model:</h1>
              <input value={model} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setvehModel(e.target.value)} type='text' required />
            </div>

          </div>

          {/* Fourth Row */}
          <div className='flex flex-col gap-2 w-full items-center justify-center'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Mileage:</h1>
              <input value={mileage} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setmileage(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Engine:</h1>
              <input value={engine} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setengine(e.target.value)} type='text' required />
            </div>

          </div>

          {/* Fifth Row */}
          <div className='flex flex-col gap-2 w-full items-center justify-center'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Fuel Type:</h1>
              <select value={fuelType} onChange={(e) => setfuelType(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Fuel Type</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>CNG</option>
                <option>LNG</option>
              </select>            </div>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Condtion:</h1>
              <select value={condition} onChange={(e) => setcondition(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Vehicle Condition</option>
                <option>New</option>
                <option>Old</option>
              </select>            </div>

          </div>

          {/* Sixth Row */}
          <div className='flex flex-col gap-2 w-full items-center justify-center'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Color:</h1>
              <input value={color} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setColor(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>KM's Driven:</h1>
              <input value={odometer} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setOdometer(e.target.value)} type='text' required />
            </div>

          </div>
          
          {/* Seventh Row */}
          <div className='flex flex-col gap-2 w-full justify-start'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Seats:</h1>
              <select value={seats} onChange={(e) => setvehSeats(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Vehicle Seats</option>
                <option>2</option>
                <option>4</option>
                <option>7</option>
              </select>
            </div>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Hybrid:</h1>
              <select value={hybrid} onChange={(e) => sethybrid(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Hybrid</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>


          </div>
          
          {/* Eighth Row */}
          <div className='flex flex-col gap-2 w-full justify-start'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Fuel Tank Capacity:</h1>
              <input value={fuelTankCapacity} className='w-full rounded-md h-8 p-2 border border-black' onChange={(e) => setFuelTankCapacity(e.target.value)} type='text' required />
            </div>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Transmission:</h1>
              <select value={transmission} onChange={(e) => setTransmission(e.target.value)} className='w-full rounded-md py-1 border border-black'>
                <option>Select Transmission</option>
                <option>Manual</option>
                <option>Automatic</option>
                <option>Both</option>
              </select>
            </div>


          </div>

          {/* Ninth Row */}
          <div className='flex gap-14 w-full items-center justify-center'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Price</h1>
              <input value={price} type='number' name='price' onChange={(e) => {setprice(e.target.value)}} />
            </div>

          </div>

          {/* Tenth Row */}
          <div className='flex gap-14 w-full items-center justify-center'>

            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Description:</h1>
              <textarea value={description} rows={5} className='rounded-md p-2 border border-black' onChange={(e) => setDescription(e.target.value)} type='text' required></textarea>
            </div>

          </div>
          
          {/* Eleventh Row */}
          <div className='flex flex-col gap-2 w-full justify-start'>


            <div className='flex flex-col w-full gap-1'>
              <h1 className='font-medium'>Vehicle Thumbnail:</h1>
              <input accept="image/*" type='file' name='thumbnail' onChange={(e) => setthumbnail(e.target.files[0])} />
            </div>

            <div className='flex flex-col w-2/4 gap-1'>
              <h1 className='font-medium'>Vehicle Images:</h1>
              <input accept="image/*" type='file' multiple name='images' onChange={(e) => {setimages(e.target.files)}} />
            </div>

          </div>


          <div className='flex gap-4'>
          <button type='submit' className='w-24 h-10 bg-[rgb(2,6,111)] cursor-pointer text-white rounded-md'>Advertise</button>
          <button onClick={() => navigate('/vehiclesList')} type='submit' className='w-24 h-10 border cursor-pointer text-white border-[rgb(2,6,111)] rounded-md'>Back</button>
          </div>
          
        </form>

      </div>
    </>
  )
}

export default SellCarFieldsPage
import React, { useState } from 'react'
import HeaderForAuth from '../Components/HeaderForAuth'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const AdminLogin = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const lognDetails = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/admin/adminLogin', {
                email: email,
                password: password
            });

            if(response.status === 200){
                alert("Admin LoggedIn Successfully");
                navigate('/home');
            } 
            else if(response.status === 401 || response.status === 500 || response.status === 402){
                alert("Email or Password Incorrect")
            }
            else{
                alert("Something went wrong");
            }
        } catch (error) {
            console.log(error.message);
            
        }


    }
  return (
    <>
    <HeaderForAuth />
    <div className='w-full bg-gray-200 flex items-center h-screen justify-center'>
        <div className='w-2/6 rounded-md bg-white py-6 flex flex-col justify-center items-center'>
        <h1 className='text-2xl pb-2 text-center text-[rgb(2,6,111)]'>Admin SignUp</h1>
        <form className='flex flex-col' onSubmit={lognDetails}>
            <h1>Email:</h1>
            <input className='border-black border rounded-sm px-1 w-[20rem] h-8 text-black py-1' type='email' required value={email} onChange={(e) => setemail(e.target.value)} />
            <h1 className='pt-4'>Password:</h1>
            <input className='border-black border rounded-sm px-1 w-[20rem] h-8 text-black py-1' type='password' value={password} onChange={(e) => setpassword(e.target.value)} />

            <div className='flex flex-col gap-2 items-center justify-center mt-3'>
            <button className='w-24 h-10 bg-[rgb(2,6,111)] rounded-lg'>Login</button>
            </div>
       
       
        </form>


        </div>

    </div>
    </>
  )
}

export default AdminLogin
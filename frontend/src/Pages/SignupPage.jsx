import React, { useState } from 'react'
import HeaderForAuth from '../Components/HeaderForAuth'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        
        if (!name || !email || !password) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/users/registerUser', {
                name,
                email,
                password
            });

            if (response.status === 200) {
                alert("User Registered Successfully");
                navigate('/login');
            }
        } catch (error) {
            console.error('Signup error:', error);
            setError(error.response?.data?.message || 'Registration failed. Please try again.');
        }
    }

    return (
        <>
            <HeaderForAuth />
            <div className='w-full bg-gray-200 flex items-center h-screen justify-center'>
                <div className='w-2/6 rounded-md bg-white py-6 flex flex-col justify-center items-center'>
                    <h1 className='text-2xl pb-2 text-center text-[rgb(2,6,111)]'>SignUp</h1>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form className='flex flex-col' onSubmit={handleSignup}>
                        <h1>Name:</h1>
                        <input 
                            className='border-black border rounded-sm px-1 w-[20rem] h-8 text-black py-1' 
                            type='text' 
                            required 
                            onChange={(e) => setName(e.target.value)} 
                        />
                        <h1 className='pt-4'>Email:</h1>
                        <input 
                            className='border-black border rounded-sm px-1 w-[20rem] h-8 text-black py-1' 
                            type='email' 
                            required 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <h1 className='pt-4'>Password:</h1>
                        <input 
                            className='border-black border rounded-sm px-1 w-[20rem] h-8 text-black py-1' 
                            type='password' 
                            required 
                            onChange={(e) => setPassword(e.target.value)} 
                        />

                        <div className='flex flex-col gap-2 items-center justify-center mt-3'>
                            <p>Already have an account? <Link to='/login' className='text-[rgb(2,6,111)]'>Login</Link></p>
                            <button type='submit' className='w-24 h-10 text-white bg-[rgb(2,6,111)] rounded-lg'>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignupPage
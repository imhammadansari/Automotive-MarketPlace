import React, { useContext, useState } from 'react'
import { SearchVehContext } from '../context/SearchVehContext';
import axios from 'axios';

const SearchBar = ({searchValue, setsearchValue, onSearch}) => {

    const handleSubmit = (e) => {
      e.preventDefault();

      if(searchValue === '') return alert("Search a Car!")
        console.log("From Search Bar", searchValue);
        onSearch();
    }

  return (
    <>
    <div className='w-full px-2 md:px-1 py-1'>
        
        <form onSubmit={handleSubmit} className='flex gap-2'>
            <input className='w-7/8 md:w-2/3 border-black border rounded-md px-1 md:p-2' name='value' onChange={(e) => {setsearchValue(e.target.value)}} type='text' placeholder='Search Car' />
            <button className='w-24 cursor-pointer text-white rounded-md h-9 md:h-11 bg-[rgb(2,6,111)]' type='submit'>Search</button>
        </form>

    </div>
    </>
  )
}

export default SearchBar
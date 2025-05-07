import React, { useState } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import ChooseUs from '../Components/ChooseUs'
import AboutUs from '../Components/AboutUs'
import HowWorks from '../Components/HowWorks'
import DreamCarBanner from '../Components/DreamCarBanner'
import SearchCar from '../Components/SearchCar'
import Footer from '../Components/Footer'
import BestCars from '../Components/BestCars'

const HomePage = () => {

  return (
    <>
    <Header />
    <Banner />
    <SearchCar />
    <AboutUs />
    <ChooseUs />
    <HowWorks />
    <DreamCarBanner />
    <BestCars />
    <Footer />
    </>
  )
}

export default HomePage
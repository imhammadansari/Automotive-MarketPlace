import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import SellCarFieldsPage from './Pages/SellCarFieldsPage'
import EditVehicleInfoPage from './Pages/EditVehicleInfoPage'
import UserVehiclesList from './Pages/UserVehiclesList'
import ViewUserVehicles from './Pages/ViewUserVehicles'
import VehiclesBySearch from './Pages/VehiclesBySearch'
import ViewAllVehicles from './Pages/ViewAllVehicles'
import VehicleDetails from './Pages/VehicleDetails'
import AdminSignupPage from './Pages/AdminSignupPage'
import AdminLogin from './Pages/AdminLogin'
import AdminDashboard from './Pages/AdminDashboard'
import AdminViewVehicleDetails from './Pages/AdminViewVehicleDetails'
import AdminUpdateVehDetails from './Pages/AdminUpdateVehDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Navigate to = "/home" />} />
        <Route path='/home' element = {<HomePage />} />
        <Route path='/signup' element = {<SignupPage />} />
        <Route path='/login' element = {<LoginPage />} />
        <Route path='/sellYourCar' element = {<SellCarFieldsPage />} />
        <Route path='/vehiclesBySearch' element = {<VehiclesBySearch />} />
        <Route path='/updateVehicle/:id' element = {<EditVehicleInfoPage />} />
        <Route path='/vehiclesList' element={<UserVehiclesList />} />
        <Route path='/vehicleDetail/:id' element = {<ViewUserVehicles />} />
        <Route path='/viewVehicles' element = {<ViewAllVehicles />} />
        <Route path='/vehicleDetails/:id' element = {<VehicleDetails />} />
        <Route path='/admin_signup' element = {<AdminSignupPage />} />
        <Route path='/adminLogin' element = {<AdminLogin />} />
        <Route path='/adminDashboard' element = {<AdminDashboard />} />
        <Route path='/adminViewDetails/:id' element = {<AdminViewVehicleDetails />} />
        <Route path='/adminUpdateVehicle/:id' element = {<AdminUpdateVehDetails />} />

      </Routes>
    </div>
  )
}

export default App
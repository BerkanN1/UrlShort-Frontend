import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



import Welcome from './pages/Welcome'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'
import AdminSignin from './pages/AdminSignin'
import AdminSignup from './pages/AdminSignup'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/adminSignin' element={<AdminSignin />} />
      <Route path='/adminSignup' element={<AdminSignup />} />
      <Route path='/adminDashboard' element={<AdminDashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

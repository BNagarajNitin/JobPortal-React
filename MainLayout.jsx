import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <ToastContainer/>
    </div>
  )
}

export default MainLayout
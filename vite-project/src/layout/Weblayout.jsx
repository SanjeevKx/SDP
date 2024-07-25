import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
    return (
        <div className='h-screen w-screen flex flex-row justify-center padding 0 border 0'>
            <Navbar />
             <Outlet />
            <Footer />
        </div>
    )
}

export default Weblayout
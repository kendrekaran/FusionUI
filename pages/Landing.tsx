import { Hero } from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const Landing = () => {
  return (
    <div className='max-h-screen bg-black'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Landing
import Navbar from '@/components/Navbar'
import { MainNav } from '@/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className='max-h-screen'>
        <Navbar/>
        <aside className="hidden w-64 border-r border-gray-800 bg-black lg:block h-screen overflow-y-auto">
                  {/* Pass setSelectedContent to MainNav */}
                  <MainNav onSelect={undefined}/>
                </aside>
    </div>
  )
}

export default page
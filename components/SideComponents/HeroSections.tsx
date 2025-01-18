import React, { useState } from 'react'
import { Hero1 } from '../SingleComponent.tsx/Hero1'

const HeroSections = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };
  return (
    <div className='p-4'>
        <h1 className='text-4xl font-bold'> Hero Sections</h1>
        <p className='text-sm text-gray-400 py-1'>These are some of the Hero Sections</p>
        <button
          onClick={handleRefresh}
          className="bg-white/50 text-white p-1 rounded m-4 "
        >
          <img src="refresh.svg" alt="refresh" className="h-4 w-4" />
        </button>
        <div className='py-8'>
            <Hero1 key={refreshKey}/>
        </div>
    </div>
  )
}

export default HeroSections
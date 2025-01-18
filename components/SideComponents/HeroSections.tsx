import React from 'react'
import Hero1 from '../SingleComponent.tsx/Hero1'

const HeroSections = () => {
  return (
    <div>
        <h1 className='text-4xl'> Hero Sections</h1>
        <div className='max-h-60 '>
            <Hero1/>
        </div>
    </div>
  )
}

export default HeroSections
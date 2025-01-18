import React, { useState } from 'react';
import { PricingSection } from '../SingleComponent.tsx/Pricing01';

const Pricing = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className='p-4'>
      <h1 className='text-4xl font-bold'>Pricing Sections</h1>
      <p className='text-sm text-gray-400 py-1'>These are some of the Pricing Sections</p>
      <div className='py-8'>
        <button
          onClick={handleRefresh}
          className="bg-white/50 text-white p-1 rounded m-4 "
        >
          <img src="refresh.svg" alt="refresh" className="h-4 w-4" />
        </button>
        <PricingSection key={refreshKey} />
      </div>
    </div>
  );
};

export default Pricing;

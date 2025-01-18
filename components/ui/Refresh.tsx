import { useState } from 'react';

const RefreshComponent = () => {
    // Use useState to force re-render by toggling the state
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1); // Increment state value to trigger re-render
    };

    return (
        <div className="p-4">
            {/* Button to trigger the refresh */}
            <button
                onClick={handleRefresh}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
                Refresh Component
            </button>

            {/* Component that will be refreshed */}
            <div key={refreshKey} className="mt-4">
                {/* Place the content you want to refresh here */}
                <p className="text-lg">This component will refresh when the button is clicked.</p>
                {/* Example of something that changes dynamically */}
                <p className="text-sm text-gray-500">Current refresh key: {refreshKey}</p>
            </div>
        </div>
    );
};

export default RefreshComponent;

import React from 'react';
import ImpactCard from './components/ImpactCard'; // Importing the ImpactCard component

import './styles/main.scss'; // Main SASS file for global styling

function App() {
  return (
    <div className="flex items-start justify-center h-screen bg-gray-100 p-4 space-x-8">
      {/* Container with Tailwind flex to center everything on the page */}
      <div className="w-1/2">
        <h2 className="text-center text-xl font-semibold mb-4">Coding Assessment</h2>
        {/* Rendering the Impact Card component */}
        <ImpactCard />
      </div>
    </div>
  );
}

export default App;

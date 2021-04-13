import React from 'react';

import './App.css';

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-strp w-screen min-h-screen">
      <div className="bg-red-300 grid grid-cols-header">
        <div className="logo"></div>
        <div className="navbar"></div>
      </div>
      <div className="bg-purple-600">body</div>
      <div className="border-green-700">footer</div>
    </div>
  );
}
export default App;

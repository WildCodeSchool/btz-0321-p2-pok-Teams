import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-strp w-screen min-h-screen  bg-gradient-to-r from-yellow-300 to-yellow-500">
      <Header />
      <div className="bg-gray-400 ">Main</div>
      <Footer />
    </div>
  );
}

export default App;

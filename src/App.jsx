import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';

function App() {
  return (
    <div className="grid  grid-rows-PhoneRows w-screen min-h-screen  bg-gradient-to-r from-yellow-300 to-yellow-500 pc:grid-rows-PCRows">
      <Header />
      <div className="bg-gray-400 ">Main</div>
      <Footer />
    </div>
  );
}

export default App;

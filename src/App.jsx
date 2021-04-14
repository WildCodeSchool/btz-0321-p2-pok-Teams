import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-strp w-screen min-h-screen it">
      <Header />
      <div className="bg-purple-600">Main</div>
      <Footer />
    </div>
  );
}

export default App;

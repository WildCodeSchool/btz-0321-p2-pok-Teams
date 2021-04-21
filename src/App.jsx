import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Body from './components/Body';
function App() {
  return (
    <div className="grid  grid-rows-PhoneRows w-screen min-h-screen  bg-gradient-to-r from-yellow-300 to-yellow-500 pc:grid-rows-PCRows">
      <Header />
<<<<<<< HEAD
      <div className="bg-gray-400 ">Main
      <Body />
      
      </div>
=======
      <div className="bg-gray-400 mt-6 ">Main</div>
>>>>>>> 3a6da9883861bd90276924e8d265f37ee051c7e1
      <Footer />
    </div>
  );
}

export default App;

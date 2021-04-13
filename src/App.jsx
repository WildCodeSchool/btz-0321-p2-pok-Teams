import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-strp w-screen min-h-screen">
      <div className="bg-red-300 grid grid-cols-header">
        <div className="logo bg-yellow-400">
          <img
            src="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
            className="object-contain h-48  ... object-left-top"
            alt="logo"></img>
        </div>

        <div className="navbar inline-flex justify-end mx-8 flex-wrap text-lg lg:w-auto">
          <div className=" hidden sm:flex mx-8 text-center items-center ">
            <a className="mx-6" href="#">
              <span>how to play</span>
            </a>
            <a className="mx-8" href="#">
              <span>my team</span>
            </a>
            <a href="#">
              <span>pokedex</span>
            </a>
          </div>

          <button className="bg-blue-900 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hidden sm:block">music</button>
          <button className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hidden sm:block">Login</button>
          <button className="bg-yellow-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hidden sm:block">Dark mode</button>

          <div class="block sm:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
              <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-purple-600">body</div>
      <div className="border-green-700">footer</div>
    </div>
  );
}
export default App;

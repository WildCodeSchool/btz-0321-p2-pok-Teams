import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="grid grid-cols-PhoneHeaderCol pc:grid-cols-PCHeaderCol">
      <div className="logo  flex items-center ml-2">
        <img className=" mt-3 h-14 pc:h-16" src="src/logo.png" alt="logo"></img>
      </div>

      <div className="MENU inline-flex justify-end mx-8 flex-nowrap text-base ">
        <div className=" hidden pc:flex mx-8 text-center items-center font-Quantico text-2xl space-x-10">
          <ul>
            <li>how to play</li>
          </ul>
          <ul>
            <li>my team</li>
          </ul>
          <ul>
            <li>pokedex</li>
          </ul>
        </div>
        <button className="bg-gray-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hidden pc:block mr-8 mt-2 ">music</button>
        <button className="bg-yellow-200 hover:bg-blue-dark text-black font-bold py-1 px-6 rounded hidden pc:block mr-8 mt-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md">
          <Link to="register">Login</Link>
        </button>
        <button className="bg-gray-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hidden pc:block mt-2">Dark mode</button>

        <div className="flex items-center pc:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white bg-gray-300 bg-opacity-50">
            <svg className="h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

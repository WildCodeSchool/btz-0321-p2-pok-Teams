import React from 'react';

export default function Header() {
  return (
    <div className="grid grid-cols-PhoneHeaderCol">
      <div className="logo  flex items-center ml-2">
        <img className="h-14 pc:h-16" src="src/logo.png" alt="logo"></img>
      </div>

      <div className=" inline-flex justify-end mx-8 flex-wrap text-lg lg:w-auto it">
        <div className=" hidden sm:flex mx-8 text-center items-center ">
          <span>how to play</span>

          <span>my team</span>

          <span>pokedex</span>
        </div>
        <button className="bg-blue-900 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hidden sm:block">music</button>
        <button className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hidden sm:block">Login</button>
        <button className="bg-yellow-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hidden sm:block">Dark mode</button>

        <div className="flex items-center sm:hidden">
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

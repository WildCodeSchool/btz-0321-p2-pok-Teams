import React from 'react';

export default function BurguerMenu() {
  return (
    <div className="flex">
      <div className="block pc:hidden">
        <button
          id="nav-toggle"
          className="flex items-center focus:outline-none px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white bg-gray-300 bg-opacity-50">
          <svg className="fill-current h-4 w-4 bg-teal-light" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="w-full flex-grow pc:flex pc:items-center pc:w-auto hidden pt-6 pc:pt-0" id="nav-content">
        <ul className="list-reset pc:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a className="inline-block py-2 px-4 text-white no-underline" href="howtoplay">
              How to play
            </a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="myteam">
              My team
            </a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="Pokedex">
              Pokedex
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

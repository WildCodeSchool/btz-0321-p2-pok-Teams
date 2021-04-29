import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OnTheme from './OnTheme';
import Logo from './img/logo.png';
import BurguerMenu from './BurguerMenu';

export default function Header({ theme, setTheme }) {
  return (
    <nav className="flex items-center justify-between flex-wrap absolute bg-gray-800 p-3 w-full z-10 top-0">
      <div className="logo  items-center ">
        <img className=" h-14 pc:h-16" src={Logo} alt="logo" />
      </div>

      <div className="MENU inline-flex justify-end mx-8 flex-nowrap text-base ">
        <div className="flex items-center pc:hidden">
          <BurguerMenu />
        </div>

        <div className=" hidden pc:flex mx-8 text-center items-center font-Quantico text-2xl space-x-10">
          <ul>
            <li>
              <Link to="howtoplay">how to play</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="myteam">my team</Link>
            </li>
          </ul>
          <ul>
            <Link to="Pokedex">
              <li>pokedex</li>
            </Link>
          </ul>
        </div>
        <button className="bg-gray-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hidden pc:block mr-8 mt-2 ">music</button>
        <button className="bg-yellow-200 hover:bg-blue-dark text-black font-bold py-1 px-6 rounded hidden pc:block mr-8 mt-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md">
          <Link to="register">Login</Link>
        </button>
        <OnTheme theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};

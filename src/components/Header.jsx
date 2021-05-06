import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OnTheme from './OnTheme';
import Logo from './img/logo.png';
import BurguerMenu from './BurguerMenu';
import MusicButton from './MusicButton';

export default function Header({ theme, setTheme }) {
  return (
    <nav className=" items-center justify-between flex py-5 w-screen">
      <div className="logo flex  place-items-start ">

        <Link to="/">
        <img className="h-14 pc:h-16 pc:ml-10 ml-3" src={Logo} alt="logo" />
        </Link>

      </div>
      <div className="bg-gray-200 bg-opacity-60 pc:pl-80 pl-8 pb-2 rounded-2xl mr-4 shadow-2xl">
        <div className="MENU PC inline-flex  justify-end">
          <div className="block  mr-5 pc:hidden ">
            <BurguerMenu />
          </div>
          <div className="hidden pc:flex text-center items-center font-Quantico text-2xl space-x-10">
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
          <MusicButton />


      <div className="MENU PC  inline-flex ">
        <div className="block  mr-5 pc:hidden ">
          <BurguerMenu />
        </div>
        <div className="hidden pc:flex text-center items-center font-Quantico text-2xl space-x-10">
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
            <ul>
            <Link to="WorldMap">
              <li>World Map</li>
            </Link>
          </ul>
        </div>
        <MusicButton />
        <button className="bg-yellow-200 hover:bg-blue-dark text-black font-bold py-1 px-6 rounded hidden pc:block mr-8 mt-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md shadow-2xl">
          <Link to="register">Login</Link>
        </button>
         <div className="DarkButton flex mt-4 mr-4 ">
            <OnTheme theme={theme} setTheme={setTheme} />
          </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};

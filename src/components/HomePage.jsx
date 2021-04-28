import React from 'react';
import HomeBg from './img/homeBg.png';
import Logo from './img/logo.png';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div m-0 p-0>
      <img className="absolute z-50" src={Logo} alt="logo" />
      <img className=" absolute bg-cover bg-no-repeat z-40" src={HomeBg} alt="wallpaper" />
      <button className="absolute z-50 top-1/2  bg-red-700 hover:bg-red-500 font-extrabold py-2 px-8 my-2 pc:w-1/4 pc:p-3 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md .shadow-inner ">
        <Link to="register">PLAY</Link>
      </button>
    </div>
  );
}

export default HomePage;

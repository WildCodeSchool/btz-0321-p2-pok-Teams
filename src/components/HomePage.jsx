import React from 'react';
import HomeBg from '../img/homeBg.png';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className=" m-0 p-0">
      <img className=" absolute bg-cover bg-no-repeat z-40 h-full w-full  " src={HomeBg} alt="wallpaper" />
      <div className=" flex justify-center bottom-14 py-52 pc:py-20">
        <img className="absolute z-50 w-10/12 pc:w-1/2 " src={Logo} alt="logo" />
        <button className="absolute z-50 top-1/2  bg-red-700 hover:bg-red-500 font-extrabold py-2 px-12 my-40 pc:w-1/4 pc:p-3 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md  ">
          <Link to="register">PLAY</Link>
        </button>
      </div>
    </div>
  );
}

export default HomePage;

import React from 'react';
import HomeBg from './img/homeBg.png';
import Logo from './img/logo.png';

import Formulaire from './Form';

function HomePage() {
  return (
    <div className=" w-full h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${HomeBg})` }}>
      <div className="flex flex-col items-center  py-52">
        <img className=" w-10/12 pc:w-1/2 " src={Logo} alt="logo" />

        <Formulaire />
      </div>
    </div>
  );
}

export default HomePage;

import React from 'react';
import HomeBg from './img/homeBg.png';
import Logo from './img/logo.png';

import Formulaire from './Form';

function HomePage() {
  return (
    <div className="flex flex-col items-center   bg-no-repeat h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HomeBg})` }}>
      <img className="pc:h-1/4 pc:mt-28 mt-32 " src={Logo} alt="logo" />
      <Formulaire />
    </div>
  );
}

export default HomePage;

import React from 'react';

import Green from './img/green_trainer.png';

function MyTeam() {
  return (
    <div className="container font-Quantico">
      <div className="flex text-4xl font-extrabold py-5">
        <img src={Green} alt="green trainer" className="px-5  " />
        <h1 className="px-3">Player X Team</h1>
      </div>
      <div>
        <h2 className="text-3xl my-5 px-5">My Team</h2>
      </div>
      <div className="pc:flex pc:justify-between my-5 px-5">
        <h2 className="text-3xl">My Collection</h2>
        <h2 className=" text-2xl">current team 5/6</h2>
      </div>
    </div>
  );
}

export default MyTeam;

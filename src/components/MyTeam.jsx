import React from 'react';
import Green from '../img/green_trainer.png';

function MyTeam() {
  return (
    <div className="container font-Quantico">
      <div className="flex text-xl font-extrabold">
        <img src={Green} alt="green trainer" className="" />
        <h2>My Team</h2>
      </div>
      <h2>current team 5/6</h2>
    </div>
  );
}

export default MyTeam;

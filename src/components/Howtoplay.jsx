
import React, { useContext } from 'react';
import  { ThemeContext } from 'styled-components';
import imgLeviator from '../img/Leviator.png';
import imgPikachu1 from '../img/pikachu1.png';
import imgEvoli from '../img/evoli.png';

export default function Howtoplay() {
  const theme = useContext(ThemeContext);


  
  const imgContainer = 'w-full flex flex-col items-center bg-yellow-100 px-16';
  const imgContainerPc = 'pc:flex-row pc:justify-center';
  const imgClass = 'flex justify-center bg-yellow-50 h-auto p-4 w-auto border-4 border-black border-radius rounded-lg';
  const imgClassSm ='';
  const imgClassPc = 'pc:mt-0 pc:ml-10 pc:w-1/5 pc:h-auto';
  const catchMeAll = 'bg-yellow-100 h-64 m-8 px-8 border-4 border-black border-radius rounded-lg';

  return (
    <div className="infos  text-center md:text-center font-Quantico w-screen">
      <div className=" border-black border-radius: 0.5rem">
        <p className={`${theme.textColor} rounded-lg text-black border-4 border-black`}>
          Welcome Trainer, You are about to start a great adventure, but your path is full of pitfalls ! Luckily, your pokémon friends are here to
          help. Select a destination on your map and battle trainers to clear your way through glory ! Victories might also reward you with new
          friends and more... Your pokémons have many abilities, different types and strengths/weaknesses. It is up to you to figure out the best team
          configuration to win each battle.
        </p>
      </div>
      
      <div className={`imgcontainer ${imgContainer} ${imgContainerPc}`}>
        <img className={`pokeimg ${imgClass} ${imgClassSm} ${imgClassPc}`} src={imgLeviator} alt="" />
        <img className={`pokeimg ${imgClass} ${imgClassSm} ${imgClassPc}`} src={imgPikachu1} alt="" />
        <img className={`pokeimg ${imgClass} ${imgClassSm} ${imgClassPc}`} src={imgEvoli} alt="" />
      </div>

      <div className={`${catchMeAll}`}>
        <p>Catch Em All and make them Battle</p>
      </div>
    </div>
  );
}

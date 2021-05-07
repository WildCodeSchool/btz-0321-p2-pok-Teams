import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import imgLeviator from './img/leviator.png';
import imgPika from './img/pika.png';
import imgEvoli from './img/evoli.png';

export default function Howtoplay() {
  const theme = useContext(ThemeContext);

  const imgContainer = 'w-full flex flex-col items-center px-16';
  const imgContainerPc = 'pc:flex-row pc:justify-center';
  const imgClass = 'flex justify-center bg-yellow-50 h-auto px-4 w-auto border-4 border-black border-radius rounded-lg m-1';
  const imgClassSm = 'm-3';
  const imgClassPc = 'pc:mt-0 pc:ml-10 pc:w-1/5 pc:h-auto';
  const catchMeAll = 'm-12 border-4 border-black shadow-2xl bg-gray-500 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md';

  return (
    <div className="infos  text-center md:text-center font-Quantico w-50 px-16 ">
      <div className="border-4 border-black shadow-2xl bg-gray-500 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md m-4 ">
        <p className={`${theme.textColor}`}>
          Welcome Trainer, You are about to start a great adventure, but your path is full of pitfalls ! Luckily, your pokémon friends are here to
          help. Select a destination on your map and battle trainers to clear your way through glory ! Victories might also reward you with new
          friends and more... Your pokémons have many abilities, different types and strengths/weaknesses. It is up to you to figure out the best team
          configuration to win each battle.
        </p>
      </div>

      <div className={`imgcontainer ${imgContainer} ${imgContainerPc}`}>
        <img className={`pokeimg ${imgClass} ${imgClassSm} ${imgClassPc}`} src={imgLeviator} alt="" />
        <img className={`pokeimg ${imgClass} ${imgClassSm} ${imgClassPc}`} src={imgPika} alt="" />
        <img className={`pokeimg ${imgClass} ${imgClassSm} ${imgClassPc}`} src={imgEvoli} alt="" />
      </div>

      <div className={`${catchMeAll}`}>
        <div className=" bg-gray-500 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md m-3 ">
          <p>Catch Em All and make them Battle</p>
        </div>
      </div>
    </div>
  );
}

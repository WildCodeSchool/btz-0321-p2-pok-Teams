import React from 'react';


export default function Howtoplay() {
  const imgContainer="w-10 ";
  const imgContainerPc="pc:flex pc:justify-center bg-yellow-100 h-64 m-4";
  const imgClassSm="Sm:flex Sm:justify-center bg-yellow-100 h-6 m-4";
  const imgClassPc="pc:mt-0 pc:h-8 pc:ml-10 pc:w-1/5 pc:h-auto";  
  const catchMeall="bg-yellow-100 h-64 m-4 border-black border-solid";
  return (

    <div className="infos  text-center font-Quantico w-screen">
          <div className="grid grid-cols-1 rows-3 text-current bg-yellow-100 h-64 m-4 border-black">
            
                  <p>Welcome Trainer, 
                    You are about to start a great adventure, but your path is full of pitfalls !
                    Luckily, your pokémon friends are here to help.

                    Select a destination on your map and battle trainers to clear your way through glory !
                    Victories might also reward you with new friends and more...

                    Your pokémons have many abilities, different types and strengths/weaknesses.
                    It is up to you to figure out the best team configuration to win each battle.
                  </p>
          </div>
      <div className={`${imgContainerPc}`}>
      
          <img className={`${imgClassSm} ${imgClassPc} ${imgContainer}`}   src="src/Léviator-RFVF.png" alt=""/>
          <img className={`${imgClassSm} ${imgClassPc} ${imgContainer}`}   src="src/pikachu1.png" alt=""/>
          <img className={`${imgClassSm} ${imgClassPc} ${imgContainer}`}   src="src/evoli.png" alt=""/>
          </div>

          <div className={`${catchMeall}`}>
          <p>Catch Em All and make them Battle</p>
          </div>
          

    </div> 
  );
}
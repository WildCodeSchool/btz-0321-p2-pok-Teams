import React from 'react';
import AutoType from './AutoType';
import StarterCarousel from './StarterCarousel';
import TrainerCarousel from './TrainerCarousel';
import CarouselImages from './CarouselImages';
import TrainerImages from './TrainerImages';
import ProfOak from '../prof.png';
import './carousel.css';

export default function CharacterCreation() {
  return (
    <div className="font-Quantico">
      <section className="topPart flex m-2 ">
        <div className="w-1/2">
          <img src={ProfOak} alt="prof Oak" />
        </div>
        <div className=" info flex flex-col justify-between w-1/2 bg-gray-400 ">
          <p className="p-1">
            <AutoType />
          </p>
          <input
            className="justify-center w-full pl-1 py-1.5 bg-blue-300 focus:bg-blue-100 text-current border-black border-solid border rounded"
            type="name"
            placeholder="Enter your name"
            required
          />
        </div>
      </section>

      <div>
        <StarterCarousel slides={CarouselImages} />{' '}
      </div>

      <div>
        <TrainerCarousel slides={TrainerImages} />
      </div>

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className=" bg-red-700 hover:bg-red-500 font-extrabold py-2 px-8 my-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md .shadow-2xl ">
          START !
        </button>
      </div>
    </div>
  );
}

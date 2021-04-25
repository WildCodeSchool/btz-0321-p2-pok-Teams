import React from 'react';
import AutoType from './AutoType';
import StarterCarousel from './StarterCarousel';
import TrainerCarousel from './TrainerCarousel';
import StarterImages from './StarterImages';
import TrainerImages from './TrainerImages';
import ProfOak from '../prof.png';
import './carousel.css';
import { Link } from 'react-router-dom';

export default function CharacterCreation() {
  return (
    <div className="font-Quantico pc:flex pc:flex-col ">
      <section className="topPart flex pc:justify-center m-2 pb-3 pc:flex pc:pl-20 pc:pr-20 ">
        <div className="w-1/2 pc:2/5">
          <img src={ProfOak} alt="prof Oak" />
        </div>
        <div className=" info flex flex-col justify-between w-1/2 pc:w-2/5 bg-gray-500 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md  ">
          <p className="pc:p-4 p-1 ">
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
      <div className="pc:flex pc:justify-around">
        <StarterCarousel slides={StarterImages} /> <TrainerCarousel slides={TrainerImages} />
      </div>
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className=" bg-red-700 hover:bg-red-500 font-extrabold py-2 px-8 my-2 pc:w-1/4 pc:p-3 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md .shadow-inner ">
          <Link to="/">START ! </Link>
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import PokemonList from '../components/MyTeam';
import Red from '../components/img/redt.png';
import { XCircleIcon } from '@heroicons/react/solid';

export default function TeamCreation() {
  const [team, setTeam] = useState([]);

  const addPokemonToTeam = (pokemon) => setTeam((prevTeam) => [...prevTeam, pokemon]);

  return (
    <div className="font-Quantico ">
      <div className="flex justify-between xs:flex-wrap  py-6 px-4">
        <div className="flex ">
          <img className="w-6 xs:w-10 xs:h-10" src={Red} alt="playersTrainer" />
          <h2 className="text-4xl xs:text-xl font-extrabold">&#60;Player&#62;&#39;s Team</h2>
        </div>
        <p className="text-4xl xs:text-xl xs:pl-10">current team {team.length}/6</p>
      </div>
      <div className="flex xs:flex-wrap ">
        {team.map((teammate) => (
          <div key={teammate.data}>
            {/* <button>
              <XCircleIcon className="w-4 text-teal-600" />{' '}
            </button> */}

            <div className="bg-gray-50 text-gray-200 w-40 border-2 border-teal-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-2 my-2 ">
              <div className="flex justify-around bg-teal-500 rounded-t-lg ">
                <h2 className="text-lg">{teammate.name}</h2>
                <p className=" text-lg  "> {teammate.id}</p>
              </div>
              <img className="flex justify-center " src={teammate.sprites.front_default} alt={teammate.name} />
              <div className="flex justify-around bg-teal-500 rounded-b-lg">
                <p>{teammate.types[0].type.name}</p>
                <p className="text-yellow-500">{teammate.base_experience} xp </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-4xl px-4  py-6 font-extrabold">My Collection</h2>
      <div className=" flex flex-wrap xs:-mx-3 xs:pl-2">
        <PokemonList addPokemonToTeam={addPokemonToTeam} />
      </div>
    </div>
  );
}

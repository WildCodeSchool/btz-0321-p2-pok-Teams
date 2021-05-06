import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import BoxInfo from './BoxInfo';

function Pokemon({ filter, url }) {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const object = {};
        object.id = res.data.id;
        object.name = res.data.name;
        object.base_experience = res.data.base_experience;
        object.sprites = res.data.sprites.front_default;
        object.spritesBack = res.data.sprites.back_default;
        object.type = res.data.types[0].type.name;
        object.move0 = res.data.moves[0].move.name;
        object.move1 = res.data.moves[1].move.name;
        object.move2 = res.data.moves[2].move.name;
        object.weight = res.data.weight;
        return object;
      })
      .then((object) => setPokemonData(object));
  }, []);

  if (filter !== '' && pokemonData.type !== filter) {
    return null;
  }

  return (
    <div className="flex flex-col align-center justify-center font-Quantico ">
      <div className="">
        <div className="bg-gray-50 w-40 border-2 border-teal-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 my-2 ">
          <div className="flex justify-around bg-teal-500 rounded-t-lg">
            <h2 className="text-xl">{pokemonData.name}</h2>
            <p className=" text-lg  "> {pokemonData.id}</p>
          </div>
          <img className="flex justify-center " src={pokemonData.sprites} alt={pokemonData.name} />
          <div className="flex justify-around bg-teal-500 rounded-b-lg ">
            <p>
              <BoxInfo pokemonData={pokemonData} />
            </p>
            <p className="text-yellow-500 mt-3 text-lg">{pokemonData.base_experience} xp </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  url: PropTypes.string,
  filter: PropTypes.string.isRequired,
};
export default Pokemon;

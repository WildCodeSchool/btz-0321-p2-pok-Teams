import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Pokemon({ url }) {
  /*console.log(url);*/

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
        object.type = res.data.types[0].type.name;
        return object;
      })
      .then((object) => setPokemonData(object));
  }, []);

  return (
    <div className="bg-gray-50 border rounded-lg flex flex-col text-g text-center m-1.5">
      <div className="flex flex-row">
        <h1 className="font-Quantico font-extrabold">{pokemonData.id}</h1>
        <h2 className="font-Quantico font-extrabold">{pokemonData.name}</h2>
      </div>
      <div>
        <img alt={pokemonData.name} src={pokemonData.sprites} />
      </div>
      <div className="flex flex-row justify-between ml-2 mr-2 text-xs">
        <p className="text-xs  inline-block py-1 px-2 rounded text-lightBlue-600 bg-green-700 uppercase last:mr-0 mr-1">{pokemonData.type}</p>
        <p>xp{pokemonData.base_experience}</p>
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  url: PropTypes.string,
};
export default Pokemon;

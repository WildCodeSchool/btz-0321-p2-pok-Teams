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
    <div>
      <div>
        <h1>{pokemonData.id}</h1>
        <h1>{pokemonData.name}</h1>
        <img alt={pokemonData.name} src={pokemonData.sprites} />
        <h1>{pokemonData.type}</h1>
        <p>{pokemonData.base_experience}</p>
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  url: PropTypes.string,
};
export default Pokemon;

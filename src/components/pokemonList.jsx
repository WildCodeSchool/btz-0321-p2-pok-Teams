import React from 'react';
import PropTypes from 'prop-types';

function PokemonList({ pokemon }) {
  /* console.log(pokemon);*/
  return (
    <div className="pokemon">
      {pokemon.map((pokemon, index) => (
        <div key={index}>{pokemon.name}</div>
      ))}
    </div>
  );
}

PokemonList.propTypes = {
  pokemon: PropTypes.any.isRequired,
};
export default PokemonList;

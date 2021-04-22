import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './pokemon';

function PokemonList({ pokemons }) {
  /* console.log(pokemons);*/
  return (
    <div className="pokemons">
      {pokemons.map((pokemon, index) => {
        return <Pokemon key={index} url={pokemon.url} />;
      })}
      ;
    </div>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.array,
};
export default PokemonList;

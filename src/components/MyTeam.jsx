import React from 'react';
import { useQuery } from 'react-query';
import Pokemon from './MyCollection';

function PokemonList({ addPokemonToTeam }) {
  const { isLoading, error, data } = useQuery('repoData', () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=40').then((res) => res.json()));

  if (isLoading) return 'Loading...';

  if (error) return 'ERROR !!!' + error.message;

  return data.results.map((pkm) => {
    return <Pokemon addPokemonToTeam={addPokemonToTeam} key={pkm.url} {...pkm} />;
  });
}

export default PokemonList;

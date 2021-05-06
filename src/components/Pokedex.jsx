import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TypePokedex from './TypePokedex';
import pokedex from './img/pokedex.png';
import PokemonList from './pokemonList';

import Selector from './Selector';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getPokemonsAndTypes = async () => {
      setIsLoading(true);
      const [typesRes, pokemonsRes] = await Promise.all([
        axios.get('https://pokeapi.co/api/v2/type'),
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151'),
      ]);

      const typesData = typesRes.data.results;
      const pokemonsData = pokemonsRes.data.results;

      setPokemons(pokemonsData);
      setTypes(typesData);
      setIsLoading(false);
    };

    getPokemonsAndTypes();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();

    setFilter(e.target.value);
  };

  return (
    <div className="flex flex-col mt-20">
      <div className="font-Quantico flex flex-row justify-center ">
        <img className="pokedex image h-40" alt="pokedex img" src={pokedex} />
        <div className="flex justify-between w-2/3 pc:w-2/5 ml-9 pc:min-w-100 border-4 border-black bg-gray-500 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md  ">
          <TypePokedex />
        </div>
      </div>
      <div className="mt-5 flex flex-row justify-end mr-10">
        <Selector types={types} handleChange={handleChange} />
      </div>
      <div className="pokemon list xs:flex-col xs:flex  xs:justify-center">{!isLoading && <PokemonList filter={filter} pokemons={pokemons} />}</div>
    </div>
  );
}

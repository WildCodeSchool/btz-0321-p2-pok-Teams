import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TypePokedex from './TypePokedex';
import pokedex from './img/pokedex.png';
import PokemonList from './pokemonList';
import Pagination from './pagination';
import Selector from './Selector';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=151');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(currentPageUrl).then((res) => {
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemons(res.data.results);
      setIsLoading(false);
    });
  }, []);

  function goNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <div className="flex flex-col mt-9">
      <div className="font-Quantico flex flex-row justify-center ">
        <img className="pokedex image h-20" alt="pokedex img" src={pokedex} />
        <div className="flex justify-between w-1/2 pc:w-2/5 ml-9 pc:min-w-100 border-4 border-black bg-gray-500 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md  ">
          <p className="pc:p-4 p-1 ">
            <TypePokedex />
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-row justify-end mr-10">
        <Selector />
      </div>
      <div className="pokemon list xs:flex-col xs:flex  xs:justify-center">
        {!isLoading && <PokemonList pokemons={pokemons} />}
        <Pagination goNextPage={goNextPage} goPrevPage={goPrevPage} />
      </div>
    </div>
  );
}

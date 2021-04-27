import React, { useState, useEffect } from 'react';

import PokemonList from './components/pokemonList';
import axios from 'axios';
import Pagination from './components/pagination';

import './components/carousel.css';
import './App.css';

function App() {
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
    <div className="bg-gray-300 bg-opacity-80 flex">
      {!isLoading && <PokemonList pokemons={pokemons} />}
      <Pagination goNextPage={goNextPage} goPrevPage={goPrevPage} />
    </div>
  );
}

export default App;

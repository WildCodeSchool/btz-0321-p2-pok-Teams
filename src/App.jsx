import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import PokemonList from './components/pokemonList';
import axios from 'axios';
import Pagination from './components/pagination';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(currentPageUrl).then((res) => {
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results);
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
    <div className="grid  grid-rows-PhoneRows w-screen min-h-screen  bg-gradient-to-r from-yellow-300 to-yellow-500 pc:grid-rows-PCRows">
      <Header />
      <div className="bg-gray-400 mt-6 ">
        {!isLoading && <PokemonList pokemon={pokemon} />}
        <Pagination goNextPage={goNextPage} goPrevPage={goPrevPage} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

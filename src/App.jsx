import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import PokemonList from './components/pokemonList';
import axios from 'axios';
import Pagination from './components/pagination';
import Splash from './components/SplashScreen';
import { ThemeProvider } from 'styled-components';

const LightTheme = {
  pageBackground: 'bg-gradient-to-r from-yellow-300 to-yellow-500 dark:text-gray-300',
  titleColor: '#dc658b',
  tagLineColor: 'black',
};

const DarkTheme = {
  pageBackground: '#282c36',
  titleColor: 'lightpink',
  tagLineColor: 'lavender',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

/*const maxId = 151;*/

function App() {
  const [theme, setTheme] = useState('light');
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
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <div className="grid w-screen min-h-screen  bg-gradient-to-r from-yellow-300 to-yellow-500 dark:text-gray-300 dark:bg">
        <Splash theme={theme} setTheme={setTheme} />
        <Header />

        <div className=" bg-gray-300 bg-opacity-80 flex mt-5 ">
          {!isLoading && <PokemonList pokemons={pokemons} />}
          <Pagination goNextPage={goNextPage} goPrevPage={goPrevPage} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

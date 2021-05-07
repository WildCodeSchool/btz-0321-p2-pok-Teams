import React from 'react';
import PropTypes from 'prop-types';

export default function BoxInfo({ pokemonData }) {
  const [showModal, setShowModal] = React.useState(false);

  const colors = {
    normal: 'bg-normal-400',
    fighting: 'bg-fighting-400',
    flying: 'bg-flying-600',
    poison: 'bg-poison-400',
    ground: 'bg-ground-400',
    rock: 'bg-rock-400',
    bug: 'bg-bug-400',
    ghost: 'bg-ghost-400',
    steel: 'bg-steel-400',
    fire: 'bg-fire-50',
    water: 'bg-water-400',
    grass: 'bg-grass-400',
    electric: 'bg-electric-200',
    psychic: 'bg-psychic-800',
    ice: 'bg-ice-300',
    dragon: 'bg-dragon-700',
    dark: '',
    fairy: 'bg-fairy-300',
    unknown: '',
    shadow: '',
  };

  return (
    <>
      <button
        className={`${
          colors[pokemonData.type]
        } text-white active:bg-pink-600 font-bold uppercase text-sm px-3 mt-2 shadow-md py-2 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200`}
        type="button"
        onClick={() => setShowModal(true)}>
        {pokemonData.type}
      </button>
      {showModal ? (
        <>
          <div className="justify-center font-Quantico items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="TITRE flex items-start justify-between p-5 border-b border-solid border-blueGray-300 rounded-t">
                  <h2 className="text-2xl font-semibold uppercase">{pokemonData.name}</h2>
                  <h1 className="text-xl font-semibold">#0{pokemonData.id}</h1>
                </div>

                <div className="MAIN INFO p-2 flex  flex-col border-b border-solid border-blueGray-300">
                  <img src={pokemonData.sprites} alt={pokemonData.name} className="w-80 " />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between flex-row px-8">
                    <div>
                      <p className="my-4 text-xl font-bold">Base experience</p>
                    </div>
                    <div className="text-left">
                      <p className="my-4 text-lg">{pokemonData.base_experience}</p>
                    </div>
                  </div>
                  <div className="flex justify-between flex-row px-8">
                    <div>
                      <p className="my-4 text-xl font-bold">Type</p>
                    </div>
                    <div className="text-left">
                      <p className={`${colors[pokemonData.type]} rounded-lg text-lg px-3 my-4`}>{pokemonData.type}</p>
                    </div>
                  </div>
                  <div className="flex justify-between flex-row px-8">
                    <div>
                      <p className="my-4 text-xl font-bold">Weight</p>
                    </div>
                    <div className="text-left">
                      <p className="my-4 text-lg ">{pokemonData.weight}</p>
                    </div>
                  </div>
                  <div className="flex justify-between flex-row px-8">
                    <div>
                      <p className="my-4 text-xl font-bold">Abilites</p>
                    </div>
                    <div className="text-right">
                      <p className="my-4 text-lg">{pokemonData.move1}</p>
                      <p className="my-4 text-lg">{pokemonData.move0}</p>
                      <p className="my-4 text-lg">{pokemonData.move2}</p>
                    </div>
                  </div>
                </div>

                <div className="FOOTER flex items-center justify-end p-2 border-t border-solid border-blueGray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent text-lg font-bold uppercase px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

BoxInfo.propTypes = {
  pokemonData: PropTypes.string,
};

import React from 'react';

import Pikachu from './img/pikachu1.png';

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
        Grass
      </button>
      {showModal ? (
        <>
          <div className="justify-center font-Quantico items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="TITRE flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h2 className="text-xl font-semibold">Pikachu</h2>
                  <h1 className="text-xl font-semibold">025</h1>
                </div>

                <div className="MAIN INFO p-2 flex justify-center">
                  <img src={Pikachu} alt="hello" className="w-2/4 " />
                </div>
                <div className="flex justify-center flex-col">
                  <div className="flex justify-around flex-row">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">Electric</p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">Px 60</p>
                  </div>
                  <div className="flex justify-around flex-row">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">Abilites</p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">Static</p>
                  </div>
                </div>

                <div className="FOOTER flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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

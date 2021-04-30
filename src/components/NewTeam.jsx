import React from 'react';
import MyTeam from './MyTeam';
import Red from './img/redt.png';
import { XCircleIcon } from '@heroicons/react/solid';

export default function NewTeam() {
  return (
    <div className="font-Quantico">
      <div className="flex justify-between py-6 px-4">
        <div className="flex ">
          <img className="w-10" src={Red} alt="playersTrainer" />
          <h2 className="text-4xl font-extrabold">&#60;Player&#62;&#39;s Team</h2>
        </div>
        <p className="text-4xl">current team 0/6</p>
      </div>
      <div>
        <ul className="flex ">
          <div>
            <button className="flex justify-end">
              <XCircleIcon className="w-4 text-blue-600" />
            </button>
            <li className="bg-gray-50 w-40 h-40 border-2 border-blue-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 my-2 ">
              {' '}
              1{' '}
            </li>
          </div>
          <div>
            <button className="flex justify-end">
              <XCircleIcon className="w-4 text-blue-600" />
            </button>
            <li className="bg-gray-50 w-40 h-40 border-2 border-blue-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 my-2 ">
              {' '}
              1{' '}
            </li>
          </div>
          <div>
            <button className="flex justify-end">
              <XCircleIcon className="w-4 text-blue-600" />
            </button>
            <li className="bg-gray-50 w-40 h-40 border-2 border-blue-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 my-2 ">
              {' '}
              1{' '}
            </li>
          </div>
          <div>
            <button className="flex justify-end">
              <XCircleIcon className="w-4 text-blue-600" />
            </button>
            <li className="bg-gray-50 w-40 h-40 border-2 border-blue-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 my-2 ">
              {' '}
              1{' '}
            </li>
          </div>
          <div>
            <button className="flex justify-end">
              <XCircleIcon className="w-4 text-blue-600" />
            </button>
            <li className="bg-gray-50 w-40 h-40 border-2 border-blue-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 my-2 ">
              {' '}
              1{' '}
            </li>
          </div>
          <div>
            <button className="flex justify-end">
              <XCircleIcon className="w-4 text-blue-600" />
            </button>
            <li className="bg-gray-50 w-40 h-40 border-2 border-blue-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 my-2 ">
              {' '}
              1{' '}
            </li>
          </div>
        </ul>
      </div>
      <h2 className="text-4xl px-4 py-6 font-extrabold">My Collection</h2>
      <div className="flex flex-wrap">
        <MyTeam />
      </div>
    </div>
  );
}

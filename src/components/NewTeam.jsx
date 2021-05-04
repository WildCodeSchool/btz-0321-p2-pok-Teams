import React from 'react';
import MyTeam from './MyTeam';
import Red from './img/redt.png';
import { XCircleIcon } from '@heroicons/react/solid';

export default function NewTeam() {
  return (
    <div className="font-Quantico ">
      <div className="flex justify-between xs:flex-wrap  py-6 px-4">
        <div className="flex ">
          <img className="w-6 xs:w-10 xs:h-10" src={Red} alt="playersTrainer" />
          <h2 className="text-4xl xs:text-xl font-extrabold">&#60;Player&#62;&#39;s Team</h2>
        </div>
        <p className="text-4xl xs:text-xl xs:pl-10">current team 0/6</p>
      </div>
      <div>
        <ul className="flex xs:flex-wrap ">
          <div>
            <div className="flex justify-end">
              <button>
                {' '}
                <XCircleIcon className="w-4 text-teal-600" />{' '}
              </button>
            </div>
            <li className="bg-gray-50 w-40 h-40 border-2 border-teal-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 xs:mx-1 my-2 ">
              {' '}
              hello{' '}
            </li>
          </div>
          <div>
            <div className="flex justify-end">
              <button>
                {' '}
                <XCircleIcon className="w-4 text-teal-600" />{' '}
              </button>
            </div>
            <li className="bg-gray-50 w-40 h-40 border-2 border-teal-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 xs:mx-3 my-2 ">
              {' '}
              this{' '}
            </li>
          </div>
          <div>
            <div className="flex justify-end">
              <button>
                {' '}
                <XCircleIcon className="w-4 text-teal-600" />{' '}
              </button>
            </div>
            <li className="bg-gray-50 w-40 h-40 border-2 border-teal-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 xs:mx-1 my-2 ">
              {' '}
              is{' '}
            </li>
          </div>
          <div>
            <div className="flex justify-end">
              <button>
                {' '}
                <XCircleIcon className="w-4 text-teal-600" />{' '}
              </button>
            </div>
            <li className="bg-gray-50 w-40 h-40 border-2 border-teal-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 xs:mx-3 my-2 ">
              {' '}
              work{' '}
            </li>
          </div>
          <div>
            <div className="flex justify-end">
              <button>
                {' '}
                <XCircleIcon className="w-4 text-teal-600" />{' '}
              </button>
            </div>
            <li className="bg-gray-50 w-40 h-40 border-2 border-teal-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 xs:mx-1 my-2 ">
              {' '}
              in{' '}
            </li>
          </div>
          <div>
            <div className="flex justify-end">
              <button>
                {' '}
                <XCircleIcon className="w-4 text-teal-600" />{' '}
              </button>
            </div>
            <li className="bg-gray-50 w-40 h-40 border-2 border-teal-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 xs:mx-3 my-2 ">
              {' '}
              progress !{' '}
            </li>
          </div>
        </ul>
      </div>
      <h2 className="text-4xl px-4  py-6 font-extrabold">My Collection</h2>
      <div className="flex flex-wrap xs:-mx-3 xs:pl-2">
        <MyTeam />
      </div>
    </div>
  );
}

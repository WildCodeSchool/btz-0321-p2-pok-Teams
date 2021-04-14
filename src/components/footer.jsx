import React from 'react';

export default function Footer() {
  return (
    <div className="footer bg-gray-300 bg-opacity-50 grid grid-flow-col auto-cols-auto flex mx-2 mt-1.5 mb-1.5 justify-center rounded-lg  border border-blue-200 ">
      <div className="pokeball mt-4 ml-4 mr-4 ">
        <img className="" src="src/pokeball.png" alt="alt"></img>
        <img className="mt-14" src="src/copyright.png" alt="alt"></img>
      </div>

      <div className="infos grid grid-flow-col m-2">
        <ul className="list-none">
          <li className=" font-extrabold">The pokemon company</li>
          <li className="">Press</li>
          <li className="">Customer service</li>
          <li className="">Legal terms</li>
          <li className="">News</li>
          <li className="">ToS</li>
        </ul>
      </div>
      <div className="infos grid grid-flow-col m-2">
        <ul className="list-none">
          <li className=" font-extrabold">Poke Team</li>
          <li className="">Joseph</li>
          <li className="">Victoria</li>
          <li className="">Banjamin</li>
        </ul>
      </div>

      <div className="reseaux grid grid-flow-col m-4 space-y-6  ">
        <ul>
          <li>
            <img className="" src="src/facebook.png" alt="alt"></img>
          </li>
          <li>
            <img className="" src="src/github.png" alt="alt"></img>
          </li>
          <li>
            <img className=" " src="src/insta.png" alt="alt"></img>
          </li>
          <li>
            <img className=" " src="src/linkedin.png" alt="alt"></img>
          </li>
          <li>
            <img className=" " src="src/twitter.png" alt="alt"></img>
          </li>
          <li>
            <img className=" " src="src/youtube.png" alt="alt"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

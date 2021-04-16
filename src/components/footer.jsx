import React from 'react';

export default function Footer() {
  return (
    <div className="grid grid-cols-PhoneFooterCol  bg-gray-300 bg-opacity-50   mx-2 mt-2 mb-1 justify-center rounded-lg  border border-blue-200 pc:grid-cols-PCFooterCol">
      <div className="pokeball justify-center text-center mt-14 ml-4">
        <ul className="list-none pc:w-10">
          <li>
            <img className="" src="src/pokeball.png" alt="alt"></img>
          </li>
          <li>
            <img className="mt-24" src="src/copyright.png" alt="alt"></img>
          </li>
          <li>
            <p>2021</p>
          </li>
        </ul>
      </div>

      <div className="infos  text-center font-Quantico">
        <ul className="list-none">
          <li className=" font-extrabold mt-10 ">The pokemon company</li>
          <li className="">Press</li>
          <li className="">Customer service</li>
          <li className="">Legal terms</li>
          <li className="">News</li>
          <li className="">ToS</li>
          <li className=" font-extrabold mt-10">Poke Team</li>
          <li className="">Joseph</li>
          <li className="">Victoria</li>
          <li className="">Banjamin</li>
        </ul>
      </div>

      <div className="reseaux justify-center mr-5 mt-6 mb-4 pc:w-10">
        <ul>
          <li>
            <img className="" src="src/facebook.png" alt="alt"></img>
          </li>
          <li>
            <img className="mt-3" src="src/github.png" alt="alt"></img>
          </li>
          <li>
            <img className=" mt-3" src="src/insta.png" alt="alt"></img>
          </li>
          <li>
            <img className="mt-3" src="src/linkedin.png" alt="alt"></img>
          </li>
          <li>
            <img className=" mt-3" src="src/twitter.png" alt="alt"></img>
          </li>
          <li>
            <img className="mt-3 " src="src/youtube.png" alt="alt"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <div className="footer grid-cols-3 bg-green-700 flex  justify-between">
      <div className="pokeball  ml-8 mt-4">
        <img className="object-contain h-8" src="src/pokeball.png" alt="alt"></img>
        <img className="object-contain h-8" src="src/copyright.png" alt="alt"></img>
      </div>

      <div className=" listing  flex flex-col  items-center ">
        <ul>
          <li className="mx-6">The pokemon company</li>
          <li className="mx-6">
            <p>Press</p>
          </li>
          <li className="mx-6">
            <p>Customer service</p>
          </li>
          <li className="mx-6">
            <p>Legal terms</p>
          </li>
          <li className="mx-6">
            <p>News</p>
          </li>
          <li className="mx-6">
            <p>ToS</p>
          </li>
        </ul>
      </div>
      <div>
        <span>Poke Team</span>

        <p className="mx-6">Joseph</p>
        <p className="mx-6">Victoria</p>
        <p className="mx-6">Benjamin</p>
      </div>

      <div className="reseaux flex flex-col place-items-end mr-8 mt-6">
        <ul>
          <li>
            <img className="object-contain h-8" src="src/facebook.png" alt="alt"></img>
          </li>
          <li>
            <img className="object-contain h-8" src="src/github.png" alt="alt"></img>
          </li>
          <li>
            <img className="object-contain h-8" src="src/insta.png" alt="alt"></img>
          </li>
          <li>
            <img className="object-contain h-8" src="src/linkedin.png" alt="alt"></img>
          </li>
          <li>
            <img className="object-contain h-8" src="src/twitter.png" alt="alt"></img>
          </li>
          <li>
            <img className="object-contain h-8" src="src/youtube.png" alt="alt"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

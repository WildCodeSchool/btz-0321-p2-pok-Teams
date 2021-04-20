import React from 'react';

export default function Footer() {
  return (
    /*
    <div className="grid grid-cols-PhoneFooterCol  bg-gray-300 bg-opacity-50   mx-2 mt-2 mb-1  rounded-lg  border border-blue-200 pc:grid-cols-PCFooterCol">
      <div className="POKEBALL justify-center text-center mt-14 ml-4 pc:mt-8">
        <ul className="list-none pc:flex pc:flex-row">
          <li>
            <img className="pc:h-9" src="src/pokeball.png" alt="alt"></img>
          </li>
          <li>
            <img className="mt-24 pc:mt-0 pc:h-8 pc:ml-10" src="src/copyright.png" alt="alt"></img>
          </li>
          <li className="pc:ml-5 pc:mt-1">2021</li>
        </ul>
      </div>

      <div className="INFOS WEB  text-center font-Quantico ">
        <ul className="list-none pc:flex pc:flex-row pc:mt-8">
          <li className=" font-extrabold mt-8 pc:mt-0">The pokemon company</li>
          <li className="">Press</li>
          <li className="">Customer service</li>
          <li className="">Legal terms</li>
          <li className="">News</li>
          <li className="">ToS</li>
          <li className=" font-extrabold mt-8">Poke Team</li>
          <li className="">Joseph</li>
          <li className="">Victoria</li>
          <li className="">Banjamin</li>
        </ul>
      </div>

      <div className="RESEAUX justify-center mr-5 mt-6 mb-4 pc:h-12 pc:flex pc:flex-row">
        <img className="mt-3 pc:mr-2" src="src/facebook.png" alt="alt"></img>

        <img className="mt-3 pc:mr-2" src="src/github.png" alt="alt"></img>

        <img className=" mt-3 pc:mr-2" src="src/insta.png" alt="alt"></img>

        <img className="mt-3 pc:mr-2" src="src/linkedin.png" alt="alt"></img>

        <img className=" mt-3 pc:mr-2" src="src/twitter.png" alt="alt"></img>

        <img className="mt-3 pc:mr-2 " src="src/youtube.png" alt="alt"></img>
      </div>
    </div>
    */

    <div className="FOOTER grid grid-cols-3  justify-center">
      <div className="LEFT xs:ml-10 xs:mt-6 pc:ml-10 pc:flex pc:flex-row">
        <div className=" POKEBALL  ">
          <img className="w-10 " src="src/pokeball.png" alt="alt"></img>
        </div>

        <div className="COPYRIGHT xs:mt-20 pc:mt-4 pc:ml-10 ">
          <ul className="">
            <li>
              <img className="w-10 xs:mt-10" src="src/copyright.png" alt="alt"></img>
            </li>
            <li className="">2021</li>
          </ul>
        </div>
      </div>
      <div className="CENTER xs:mt-4 pc:flex pc:flex-row pc:mt-4">
        <div className=" COMPANY LIST text-center mt-2 pc:mr-5">
          <ul className="">
            <li className=" font-extrabold">The pokemon company</li>
            <li className="">Press</li>
            <li className="">Customer service</li>
            <li className="">Legal terms</li>
            <li className="">News</li>
            <li className="">ToS</li>
          </ul>
        </div>

        <div className="POKE TEAM LIST mt-2 text-center pc:ml-10   ">
          <ul className="">
            <li className=" font-extrabold ">Poke Team</li>
            <li className="">Joseph</li>
            <li className="">Victoria</li>
            <li className="">Banjamin</li>
          </ul>
        </div>
      </div>

      <div className="RIGHT flex">
        <div className="LOGOS RESEAUX xs:mt-4 flex flex-col pc:flex-row pc:mt-10  ">
          <img className="w-10 ml-8 mt-2 pc:h-10 " src="src/facebook.png" alt="alt"></img>

          <img className="w-10 ml-8 mt-2 pc:h-10" src="src/github.png" alt="alt"></img>

          <img className="w-10 ml-8 mt-2 pc:h-10" src="src/insta.png" alt="alt"></img>

          <img className="w-10 ml-8 mt-2 pc:h-10" src="src/linkedin.png" alt="alt"></img>

          <img className=" w-10 ml-8 mt-2 pc:h-10" src="src/twitter.png" alt="alt"></img>

          <img className="w-10 ml-8 mt-2 pc:h-10" src="src/youtube.png" alt="alt"></img>
        </div>
      </div>
    </div>
  );
}

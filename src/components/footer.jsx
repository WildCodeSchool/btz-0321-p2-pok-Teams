import React, { useState } from 'react';
import Pokeball from '../pokeball.png';
import Facebook from '../facebook.png';
import Instagram from '../insta.png';
import Twitter from '../twitter.png';
import Linkedin from '../linkedin.png';
import Github from '../github.png';
import Youtube from '../youtube.png';
import Copyright from '../copyright.png';

export default function Footer() {
  const [companies] = useState([
    { className: 'font-extrabold', value: 'The pokemon company' },
    { className: '', value: 'Press' },
    { className: '', value: 'Customer services' },
    { className: '', value: 'Legal terms' },
    { className: '', value: 'News' },
    { className: '', value: 'ToS' },
  ]);

  const [networks] = useState([
    { value: Facebook },
    { value: Instagram },
    { value: Twitter },
    { value: Linkedin },
    { value: Github },
    { value: Youtube },
  ]);

  const [teamList] = useState([
    { className: 'font-extrabold', value: 'The Poketeam' },
    { className: '', value: 'Joseph' },
    { className: '', value: 'Victoria' },
    { className: '', value: 'Benjamin' },
  ]);

  return (
    <div className="FOOTER grid grid-cols-3  justify-center bg-gray-300 bg-opacity-50   mx-2 mt-2 mb-1  rounded-lg  border border-blue-200 ">
      <div className=" COPYRIGHT xs:ml-10 xs:mt-6 pc:ml-10 ">
        <ul className="pc:flex pc:flex-row">
          <li>
            <img className="w-10 " src={Pokeball} alt="alt" />
          </li>
          <li>
            <img className="w-10 xs:mt-14 pc:mt-0 pc:ml-20" src={Copyright} alt="alt" />
          </li>
          <li className="pc:mt-10 ">2021</li>
        </ul>
      </div>
      <div className="CENTER xs:mt-4 pc:flex pc:flex-row pc:mt-4">
        <div className=" COMPANY LIST text-center  pc:mb-2 pc:mr-5">
          <ul className="">
            {companies.map((company) => {
              return (
                <li key={company.value} className={company.className}>
                  {company.value}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="POKE TEAM LIST xs:mb-2 xs:mt-2 text-center pc:ml-10   ">
          <ul className="">
            {teamList.map((team) => {
              return (
                <li key={team.value} className={team.className}>
                  {team.value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="RIGHT flex">
        <div className="LOGOS RESEAUX xs:mt-4 flex flex-col pc:flex-row pc:mt-10  ">
          {networks.map((net, i) => {
            return <img key={i} className="w-10 ml-8 mt-2 pc:h-10" src={net.value} alt="alt" />;
          })}
        </div>
      </div>
    </div>
  );
}

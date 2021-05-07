import React, { useState } from 'react';
import Pokeball from './img/pokeball.png';
import Facebook from './img/facebook.png';
import Instagram from './img/insta.png';
import Twitter from './img/twitter.png';
import Linkedin from './img/linkedin.png';
import Github from './img/github.png';
import Youtube from './img/youtube.png';
import Copyright from './img/copyright.png';

export default function Footer() {
  const [companies] = useState([
    { className: 'font-extrabold', value: 'The Pokemon Company' },
    {
      className: '',
      value: (
        <a href="https://github.com/WildCodeSchool/btz-0321-p2-pok-Teams" target="blank">
          Github project
        </a>
      ),
    },
    {
      className: '',
      value: (
        <a href="https://support.pokemon.com/hc/en-us/" target="blank">
          Customer Services
        </a>
      ),
    },
    {
      className: '',
      value: (
        <a href="https://www.pokemon.com/us/legal/" target="blank">
          Legal Information
        </a>
      ),
    },
    {
      className: '',
      value: (
        <a href="https://www.pokemon.com/us/terms-of-use/" target="blank">
          Terms of Use
        </a>
      ),
    },
    {
      className: '',
      value: (
        <a href="https://www.pokemon.com/us/pokemon-news/" target="blank">
          News
        </a>
      ),
    },
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
    <div className="FOOTER grid grid-cols-3 text-lg justify-center bg-gray-300 bg-opacity-50   mx-2 mt-2 mb-1  rounded-lg  border border-blue-200 ">
      <div className=" COPYRIGHT xs:mt-10 xs:ml-10  pc:ml-28 ">
        <ul className="pc:flex pc:flex-col">
          <li>
            <a href="https://www.youtube.com/watch?v=H3x3-22Gi3g">
              <img className="w-10 " src={Pokeball} alt="alt" />
            </a>
          </li>
          <li>
            <img className="w-10 pc:mt-8 xs:mt-56" src={Copyright} alt="alt" />
          </li>
          <li className=" ">2021</li>
        </ul>
      </div>
      <div className="CENTER xs:mt-4 pc:flex  pc:flex-row">
        <div className=" COMPANY LIST text-center pc:mb-2 pc:mr-5">
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

        <div className="POKE TEAM LIST  xs:mb-2 xs:mt-5 pc:mt-0  text-center pc:ml-10   ">
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

      <div className="RIGHT flex ">
        <div className="LOGOS RESEAUX xs:mt-10 flex flex-col pc:flex-row pc:mt-32  ">
          {networks.map((net, i) => {
            return <img key={i} className="w-10 ml-8 mt-2 pc:h-10" src={net.value} alt="alt" />;
          })}
        </div>
      </div>
    </div>
  );
}

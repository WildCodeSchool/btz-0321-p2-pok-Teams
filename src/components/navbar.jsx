import React from 'react';

export default function navBar() {
  return (
    <div className="bg-red-900 flex items-right">
      <div className="navbar flex items-center flex-wrap">
        <button>
          <material-icon>MENU</material-icon>
        </button>
        <div>
          <a href="#">
            <span>how to play</span>
          </a>
          <a href="#">
            <span>my team</span>
          </a>
          <a href="#">
            <span>pokedex</span>
          </a>
        </div>
      </div>
      <p>hello</p>
    </div>
  );
}

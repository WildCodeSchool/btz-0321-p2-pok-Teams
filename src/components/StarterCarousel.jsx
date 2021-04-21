import React from 'react';
import './carousel.css';
import Pikachu from '../pikachu.png';
import Bulbasaur from '../bulbi.png';
import Charmander from '../charmander.png';
import Squirtle from '../cara.png';

function StarterCarousel() {
  return (
    <section className="starterCarousel ">
      <div className="carouselPart">
        <div className="starters">
          <div className="starter active bg-none w">
            <img src={Bulbasaur} alt="bulbasaur" />
          </div>
          <div className="starter next">
            <img src={Pikachu} alt="pikachu" />
          </div>
          <div className="starter">
            <img src={Charmander} alt="charmander" />
          </div>
          <div className="starter prev">
            <img src={Squirtle} alt="squirtle" />
          </div>
        </div>
        <div className="button-container">
          <div className="button">L</div>
          <div className="button">R</div>
        </div>
      </div>
      <div className="phrase">
        <p>It is dangerous to go alone ! Pick your friend.</p>
      </div>
    </section>
  );
}

export default StarterCarousel;

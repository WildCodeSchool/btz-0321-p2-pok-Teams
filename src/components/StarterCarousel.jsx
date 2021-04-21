import React from 'react';
import Pikachu from '../pikachu.png';
import Bulbasaur from '../bulbi.png';
import Charmander from '../charmander.png';
import Squirtle from '../cara.png';

const StarterCarousel = () => {
  return (
    <section className="starterCarousel">
      <div className="carouselPart">
        <div className="starters">
          <div className="starter active">
            <img src={Bulbasaur} />
          </div>
          <div className="starter next">
            <img src={Pikachu} />
          </div>
          <div className="starter">
            <img src={Charmander} />
          </div>
          <div className="starter prev">
            <img src={Squirtle} />
          </div>
        </div>
        <div className="button-container">
          <div className="button">L</div>
          <div className="button">R</div>
        </div>
      </div>
      <div className="phrase">
        <p>
          It's dangerous to go alone ! <br />
          Pick your friend.
        </p>
      </div>
    </section>
  );
};

export default StarterCarousel;

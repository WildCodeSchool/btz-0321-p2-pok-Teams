import React from 'react';

export default function StarterCarousel() {
  return (
    <div className="starterCarousel">
      <section className="carouselPart">
        <div className="starter active">
          <img src="src/bulbi.png" alt="bulbasaur" />
        </div>
        <div className="starter next">
          <img src="src/pikachu.png" alt="pikachu" />
        </div>
        <div className="starter">
          <img src="src/charmander.png" alt="charmander" />
        </div>
        <div className="starter prev">
          <img src="src/cara.png" alt="squirtle" />
        </div>
        <div className="button-container">
          <div className="button"></div>
          <div className="button"></div>
        </div>
      </section>
      <div className="phrase">
        <p>
          It is dangerous to go alone ! <br /> Pick your friend.
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import Yellow from '../yellow_girl.png';
import Green from '../green_trainer.png';
import Red from '../red_trainer.png';
import Blue from '../blue_girl.png';

const TrainerCarousel = () => {
  return (
    <section className="starterCarousel">
      <div className="carouselPart">
        <div className="starters">
          <div className="starter active">
            <img src={Green} />
          </div>
          <div className="starter next">
            <img src={Yellow} />
          </div>
          <div className="starter">
            <img src={Red} />
          </div>
          <div className="starter prev">
            <img src={Blue} />
          </div>
        </div>
        <div className="button-container">
          <div className="button">L</div>
          <div className="button">R</div>
        </div>
      </div>
      <div className="phrase">
        <p>Choose how you will dress up for this great adventure !</p>
      </div>
    </section>
  );
};

export default TrainerCarousel;

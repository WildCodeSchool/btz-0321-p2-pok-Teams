import React from 'react';
import './carousel.css';
import Yellow from '../yellow_girl.png';
import Green from '../green_trainer.png';
import Red from '../red_trainer.png';
import Blue from '../blue_girl.png';

function TrainerCarousel() {
  return (
    <section className="trainerCarousel">
      <div className="carouselPart">
        <div className="trainers">
          <div className="trainer active">
            <img src={Green} alt="green trainer" />
          </div>
          <div className="trainer next">
            <img src={Yellow} alt="yellow trainer" />
          </div>
          <div className="trainer">
            <img src={Red} alt="red trainer" />
          </div>
          <div className="trainer prev">
            <img src={Blue} alt="blue trainer" />
          </div>
        </div>
        <div className="button-container">
          <div className="button">L</div>
          <div className="button">R</div>
        </div>
      </div>
      <div className="phrase pb-4">
        <p>Choose how you will dress up for this great adventure !</p>
      </div>
    </section>
  );
}

export default TrainerCarousel;

import React, { useState } from 'react';
import { StarterImages } from './StarterImages';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import './carousel.css';
import PropTypes from 'prop-types';

function StarterCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel carousel flex flex-col justify-center items-center">
      {StarterImages.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={slide.image} alt="some pokemon" className="image w-80 h-80 -m-20 mx-1" />}
          </div>
        );
      })}
      <div className="button-container flex">
        <ChevronLeftIcon className="left-arrow" onClick={prevSlide} />
        <ChevronRightIcon className="right-arrow" onClick={nextSlide} />
      </div>
      <div className="text-center pb-5">
        <p>It is dangerous to go alone ! Pick your friend.</p>
      </div>
    </section>
  );
}

StarterCarousel.propTypes = {
  slides: PropTypes.any.isRequired,
};

export default StarterCarousel;

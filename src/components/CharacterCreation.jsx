import React from 'react';
import './carousel.css';

export default function CharacterCreation() {
  return (
    <div>
      <section className="topPart flex m-2 ">
        <div className="w-1/2">
          <img src="src/prof.png" alt="prof Oak" />
        </div>
        <div className=" info flex-col w-1/2">
          <p className="bg-color: black">
            Hello Trainer Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo possimus magni nesciunt, voluptatibus at beatae
            temporibus eos error porro accusantium, numquam quaerat itaque aut, cumque rerum expedita nam ullam.
          </p>
          <input
            className="justify-center w-full py-1.5 bg-blue-300 focus:bg-blue-100 text-current border-black border-solid border rounded"
            type="name"
            placeholder="Enter your name"
            required
          />
        </div>
      </section>

      <section className="carouselContainer ">
        <div className="starterCarousel flex justify-center flex-col">
          <div className="carouselPart flex flex-row">
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
          </div>
          {/* <div className="phrase flex justify-center text-center">
            <p>
              It's dangerous to go alone ! <br /> Pick your friend.
            </p>
          </div> */}
        </div>

        <div className="trainerCarousel flex justify-center flex-col">
          <div className="carouselPartTrainer flex flex-row">
            <div className="trainer active">
              <img src="src/bulbi.png" alt="bulbasaur" />
            </div>
            <div className="trainer next">
              <img src="src/pikachu.png" alt="pikachu" />
            </div>
            <div className="trainer">
              <img src="src/charmander.png" alt="charmander" />
            </div>
            <div className="trainer prev">
              <img src="src/cara.png" alt="squirtle" />
            </div>
            <div className="button-container ">
              <div className="button"></div>
              <div className="button"></div>
            </div>
          </div>
          <div className="phrase flex justify-center text-center">
            <p>Choose how you will dress up for this great adventure !</p>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <button type="submit" className=" bg-red-600 hover:bg-red-400 font-extrabold py-2 px-8 my-2 rounded-">
          START !
        </button>
      </div>
    </div>
  );
}

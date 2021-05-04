import React from 'react';
import Music from '../milkbar.mp3';
import { VolumeUpIcon } from '@heroicons/react/solid';

function MusicButton() {
  const audio = new Audio(Music);

  const toggleMusic = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="bg-yellow-200 hover:bg-blue-dark text-white font-bold ml-4 py-2 px-2 rounded rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md  hidden pc:block mr-8 mt-2 shadow-2xl ">
      <VolumeUpIcon className="text-black h-10 w-10" />
    </button>
  );
}

export default MusicButton;

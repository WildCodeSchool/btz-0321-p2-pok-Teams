import React from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

export default function RemoveButton({ team, setTeam, index }) {
  const handleClick = (e) => {
    let newTeam = [...team];
    newTeam.splice(e.target.value, 1);
    setTeam(newTeam);
  };
  return (
    <div>
      <button value={index} onClick={handleClick}>
        <XCircleIcon className="w-4 text-teal-600" />
      </button>
    </div>
  );
}

RemoveButton.propTypes = {
  team: PropTypes.array.isRequired,
  setTeam: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

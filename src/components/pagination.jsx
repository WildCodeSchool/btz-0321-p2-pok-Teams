import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ goNextPage, goPrevPage }) {
  return (
    <div>
      <button className="bg-gray-300 rounded-lg" onClick={goPrevPage}>
        previous page
      </button>
      <button className="bg-gray-300 rounded-lg" onClick={goNextPage}>
        next page
      </button>
    </div>
  );
}

Pagination.propTypes = {
  goNextPage: PropTypes.func.isRequired,
  goPrevPage: PropTypes.func.isRequired,
};

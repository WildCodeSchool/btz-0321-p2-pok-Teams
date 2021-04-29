import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

ReactDOM.render(<Router />, document.querySelector('#root'));

document.getElementById('nav-toggle').onclick = function () {
  document.getElementById('nav-content').classList.toggle('hidden');
};

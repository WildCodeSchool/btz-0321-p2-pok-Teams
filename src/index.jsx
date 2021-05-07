import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>,

  document.querySelector('#root'),
);

document.getElementById('nav-toggle').onclick = function () {
  document.getElementById('nav-content').classList.toggle('hidden');
};

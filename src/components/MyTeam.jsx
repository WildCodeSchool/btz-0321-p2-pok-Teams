import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MyCollection from './MyCollection';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyTeam />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

function MyTeam() {
  const { isLoading, error, data } = useQuery('repoData', () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=40').then((res) => res.json()));

  if (isLoading) return 'Loading...';

  if (error) return 'ERROR !!!' + error.message;

  return data.results.map((pkm) => {
    return <MyCollection key={pkm.url} {...pkm} />;
  });
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

import React from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

export default function MyCollection({ url, name }) {
  const { isLoading, error, data } = useQuery(name, () => fetch(url).then((res) => res.json()));

  if (isLoading) return 'Loading...';

  if (error) return 'ERROR !!!' + error.message;

  return (
    <div className="font-Quantico flex ">
      <div className="bg-gray-50 border rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl">
        <div className="flex flex-row justify-center ">
          <h2>{data.name}</h2>
          <p className=" text-xs  "> {data.id}</p>
        </div>
        <img src={data.sprites.front_default} alt="pokemon" />
      </div>
    </div>
  );
}

MyCollection.propTypes = {
  url: PropTypes.any.isRequired,
};
MyCollection.propTypes = {
  name: PropTypes.any.isRequired,
};

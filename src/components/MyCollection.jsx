import React from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

export default function MyCollection({ url, name }) {
  const { isLoading, error, data } = useQuery(name, () => fetch(url).then((res) => res.json()));

  if (isLoading) return 'Loading...';

  if (error) return 'ERROR !!!' + error.message;

  return (
    <div className="flex flex-col align-center justify-center font-Quantico ">
      <div className="">
        <div className="bg-gray-50 w-40 border-2 border-blue-300 rounded-lg flex flex-col text-g text-center m-1.5 shadow-2xl mx-3 my-2 ">
          <div className="flex justify-around bg-blue-200">
            <h2 className="text-lg">{data.name}</h2>
            <p className=" text-lg  "> {data.id}</p>
          </div>
          <img className="flex justify-center " src={data.sprites.front_default} alt={data.name} />
          <div className="flex justify-around bg-blue-200 ">
            <p>{data.types[0].type.name}</p>
            <p className="text-yellow-500">{data.base_experience} xp </p>
          </div>
        </div>
        <button className="bg-blue-600 border-2 border-black rounded w-10/12 shadow-2xl ml-4">add to team</button>
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

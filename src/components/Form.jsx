import React, { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

export default function Formulaire() {
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <button
        id="openForm"
        show={showForm}
        onClick={() => setShowForm(!showForm)}
        className=" bg-red-700 hover:bg-red-500 font-extrabold py-2 px-12 my-40 pc:w-1/2  rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md shadow-2xl "></button>
      <div
        className={`${
          !showForm && 'hidden'
        } Formularie shadow-2xl bg-blue-800 bg-opacity-25 w-80 flex flex-col text-center py-5 rounded-md font-Quantico`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="pb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="mx-5 shadow-md rounded-md tm-3 p-1"
              placeholder="Ash"
              {...register('firstName', {
                minLength: {
                  value: 3,
                  message: 'your name is too short',
                },
              })}
            />
            <ErrorMessage errors={errors} name="firstName" />
          </div>

          <div className="flex flex-col ">
            <label className="py-2" htmlFor="lastName">
              Last Name
            </label>
            <input type="password" className="mx-5 shadow-md rounded-md tm-3 p-1" placeholder="Ketchum" {...register('lastName')} />
          </div>

          <div>
            <label className="flex flex-col py-2" htmlFor="email">
              Email
            </label>
            <input className="px-6 shadow-md rounded-md tm-3 p-1" placeholder="Best_trainer64@Wild.com" type="email" {...register('email')} />
          </div>
          <div className="mt-5">
            <label className="flex flex-col" htmlFor="isDeveloper">
              I Agree therms and Conditions
            </label>
            <input type="checkbox" placeholder="luo" value="yes" {...register('isDeveloper')} />
          </div>

          <input className="bg-red-700 mt-5 mb-5 rounded-md py-3 px-7 shadow-md" type="submit" />
        </form>
      </div>
    </div>
  );
}

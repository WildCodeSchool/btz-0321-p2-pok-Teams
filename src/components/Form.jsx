import React, { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function Formulaire() {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  let history = useHistory();

  function handleClick() {
    history.push('/register');
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    alert('thanks for subscribing');
  };

  return (
    <div>
      <button
        id="openForm"
        show={showForm}
        onClick={() => {
          setShowForm(!showForm);
          setShowButton(!showButton);
        }}
        className={`${
          !showButton && 'hidden'
        } bg-red-700 hover:bg-red-500 font-extrabold mt-28 py-1 px-14 pc:px-20 pc:py-2 text-xl  rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md shadow-2xl pc:mt-20 `}>
        START
      </button>

      <div
        className={`${
          !showForm && 'hidden'
        } Formularie mt-6 shadow-2xl bg-gray-300 bg-opacity-60 w-90 flex flex-col text-center rounded-md font-Quantico pc:text-xl pc:mt-10 p-4`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="CLOSE cursor-pointer flex justify-center flex-row">
            <div className="mt-5 flex-row text-center">
              <p>Meanwhile our game is ready, we have opened to you few features to try and play with.</p>
              <p>Subscribe to follow the incoming news and discover how to be the best trainer!</p>
            </div>
            <div>
              <svg
                onClick={() => {
                  setShowForm(!showForm);
                  setShowButton(!showButton);
                }}
                className="ml-5 w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="pt-5 pb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="mx-5 shadow-md rounded-md tm-3 p-1 pc:mx-48"
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
          <div className="flex flex-col">
            <label className="pt-5 pb-2" htmlFor="firstName">
              Last Name
            </label>
            <input
              className="mx-5 shadow-md rounded-md tm-3 p-1 pc:mx-48"
              placeholder="Ketchum"
              {...register('lastName', {
                minLength: {
                  value: 3,
                  message: 'your last name is too short',
                },
              })}
            />
            <ErrorMessage errors={errors} name="lastName" />
          </div>

          <div>
            <label className="flex flex-col py-2" htmlFor="email">
              Email
            </label>
            <input className="px-6 shadow-md rounded-md tm-3 p-1" placeholder="Best_trainer64@Wild.com" type="email" {...register('email')} />
          </div>
          <div className="flex flex-row justify-center mt-5">
            <label htmlFor="isDeveloper">I Agree therms and Conditions</label>
            <input className="ml-6" type="checkbox" placeholder="luo" value="yes" required {...register('isDeveloper')} />
          </div>
          <input className="bg-red-700 mb-3 rounded-md py-3 px-7 shadow-md" type="submit" />
          <button id="goplay" show={showForm} onClick={handleClick} className=" bg-red-700 mt-5 mb-3 rounded-md py-3 px-7 shadow-md ml-3 ">
            PLAY
          </button>
        </form>
      </div>
    </div>
  );
}

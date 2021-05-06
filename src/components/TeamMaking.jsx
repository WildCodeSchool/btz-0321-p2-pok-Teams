// import React, { useState } from 'react';
// import MyTeam from './MyTeam';

// export default function TeamMaking() {
//   const [cards, setCards] = useState([
//     {
//       id: <MyTeam />,
//     },
//   ]);

//   const addCard = () => {
//     const newCard = {
//       id: <MyTeam />,
//     };
//     const newCards = [...cards, newCard];

//     setCards(newCards);
//   };

//   const removeCard = (index) => () => {
//     const newCards = [...cards];
//     newCards.splice(index, 1);

//     setCards(newCards);
//   };

//   return (
//     <div>
//       <button onClick={addCard} className="bg-teal-700 border-2 border-black rounded w-10/12 shadow-2xl ml-4">
//         add to
//       </button>{' '}
//       {cards.map((card, index) => (
//         <div key={card.id}>
//           <button onClick={removeCard(index)}>X</button>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import DogCheckBox from "./dogCheckBox";

const DogCard = ({ dog }) => {
  let adoption = false;
  let sell = false;

  switch (dog.transaction) {
    case "Adoption":
      adoption = true;
      break;
    case "Sell":
      sell = true;
      break;
    case "Both":
      adoption = true;
      sell = true;
      break;
    default:
      break;
  }

  return (
    <div className="w-full flex flex-col items-center bg-white p-4 rounded-md shadow-md font-sans">
      <div className="img-wrapper w-[150px] h-[150px] overflow-hidden rounded-[50%] relative">
        <div className="absolute top-0 left-0 w-full h-full z-0 flex justify-center items-center bg-slate-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-photo-off"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="3" y1="3" x2="21" y2="21" />
            <line x1="15" y1="8" x2="15.01" y2="8" />
            <path d="M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9" />
            <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" />
            <path d="M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2" />
          </svg>
        </div>
        <img
          src={dog.image}
          className="h-full w-full object-cover z-1 relative"
          alt="..."
        />
      </div>
      <div className="card-body w-full flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2">
          <h5 className="card-title text-xl my-1">{dog.name}</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-dog-bowl"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586" />
            <path d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586" />
            <path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z" />
          </svg>
        </div>
        <div className="age">
          <span className="text-slate-500 text-[14px]">age: </span>
          <span className="font-semibold">{dog.age}</span>
        </div>
        <div>
          <span className="text-slate-500 text-[14px]">breed: </span>
          <span className="font-semibold">{dog.breed}</span>
        </div>
        <div className="transaction flex gap-2">
          <DogCheckBox text="Adoption" transaction={adoption} />
          <DogCheckBox text="Sell" transaction={sell} />
        </div>
        <div className="wrapper w-full flex justify-between gap-3 mt-1">
          <Link
            className="bg-[#B6A750] py-2 px-6 rounded-md text-white visited:text-white"
            to={`/dogs/${dog._id}`}
          >
            Details
          </Link>
          <Link
            className="bg-red-400 py-2 px-6 rounded-md text-white visited:text-white"
            to={`/dogs/${dog._id}`}
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DogCard;

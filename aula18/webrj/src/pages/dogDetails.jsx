import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDogById, deleteDog } from "../services/dogService";
import DogCheckBox from "../components/dogCheckBox";

const DogDetails = () => {
  const navigate = useNavigate();
  const [dog, setDog] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const initialize = async () => {
      try {
        const result = await getDogById(id);
        console.log(result);
        setDog(result);
      } catch (error) {
        alert(error);
      }
    };
    initialize();
  }, [id]);

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

  const deleteDogHandler = async (id) => {
    try {
      await deleteDog(id);
      navigate("/list");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="teste w-full pt-4 pr-4">
      <div className="overflow-hidden rounded-md h-[40vw] max-h-[520px]">
        <img
          className="w-full h-full object-cover"
          src={dog.image}
          alt={dog.name}
        />
      </div>
      <di className="flex flex-wrap items-center gap-2 mt-4">
        <div className="flex items-center gap-2">
          <h3 className="font-sans text-5xl font-semibold my-4">{dog.name}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-dog-bowl"
            width="52"
            height="52"
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
        <div className="h-full flex flex-col justify-center gap-2">
          <div className="age h-[24px]">
            <span className="text-slate-500 text-[14px]">age: </span>
            <span className="font-semibold">{dog.age}</span>
          </div>
          <div className="breed h-[24px]">
            <span className="text-slate-500 text-[14px] ">breed: </span>
            <span className="font-semibold">{dog.breed}</span>
          </div>
        </div>
        <div>
          <div className="transaction flex flex-col gap-2 items-end">
            <DogCheckBox text="Adoption" transaction={adoption} />
            <DogCheckBox text="Sell" transaction={sell} />
          </div>
        </div>
      </di>
      <h3 className="my-1">Description:</h3>
      <p className="font-sans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="btn-wrapper flex justify-center gap-4">
        <button
          className="text-[14px] bg-slate-500 py-2 px-4 rounded-md text-white visited:text-white border-none"
          onClick={() => navigate("/list")}
        >
          Return
        </button>
        <button
          className="text-[14px] bg-red-400 py-2 px-4 rounded-md text-white visited:text-white border-none"
          onClick={() => deleteDogHandler(dog._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DogDetails;

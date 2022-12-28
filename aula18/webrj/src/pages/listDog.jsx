import React, { useEffect, useState } from "react";
import { getAllDogs } from "../services/dogService";
import { Link } from "react-router-dom";

import DogCard from "../components/dogCard";

const ListDog = () => {
  const [dogs, setDogs] = useState([]);

  const initialize = async () => {
    try {
      const result = await getAllDogs();
      setDogs(result);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    initialize();
  }, [dogs]);

  const handleDelete = async (id) => {
    setDogs(prevDogs => prevDogs.filter(dog => dog.id !== id));
  }

  return (
    <div className="h-full max-w-[80rem] mx-auto">
      <h1 className="text-center">Our Dogs</h1>
      <div className="cards mx-auto grid grid-cols-cards gap-6 justify-center px-2">
        {dogs.map((dog, index) => {
          return <DogCard key={index} dog={dog} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
};

export default ListDog;

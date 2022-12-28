import React, { useEffect, useState } from "react";
import { getAllDogs } from "../services/dogService";
import { Link } from "react-router-dom";

import DogCard from "../components/dogCard";

const ListDog = () => {
  const [dogs, setDog] = useState([]);

  const initialize = async () => {
    try {
      const result = await getAllDogs();
      setDog(result);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="h-full max-w-[80rem] mx-auto">
      <h1 className="text-center">Our Dogs</h1>
      <div className="cards mx-auto grid grid-cols-cards gap-6 justify-center px-2">
        {dogs.map((dog, index) => {
          return <DogCard key={index} dog={dog} />;
        })}
      </div>
    </div>
  );
};

export default ListDog;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDogById } from "../services/dogService";

const DogDetails = () => {
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
  return (
    <div className="mt-5">
      <h3>{dog.name}</h3>
    </div>
  );
};

export default DogDetails;

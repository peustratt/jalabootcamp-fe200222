/* eslint-disable import/prefer-default-export */
import { ObjectId } from "mongodb";
import { getDbConnection } from "../db.js";

export const addNewDog = {
  path: "/api/dogs",
  method: "post",
  handler: async (req, res) => {
    const { name, age, breed, transaction, image, description } = req.body;
    const db = getDbConnection(process.env.DB_NAME);
    const result = await db.collection("dogs").insertOne({
      name,
      age,
      breed,
      transaction,
      image,
      description,
    });
    res.status(200).json(result);
  },
};

export const getAllDogs = {
  path: "/api/dogs",
  method: "get",
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    await db
      .collection("dogs")
      .find({})
      .toArray((err, result) => {
        res.status(200).send(result);
      });
  },
};

export const getDogById = {
  path: "/api/dogs/:id",
  method: "get",
  handler: async (req, res, next) => {
    const id = ObjectId(req.params.id);
    const db = getDbConnection(process.env.DB_NAME);
    await db.collection("dogs").findOne({ _id: id }, (err, result) => {
      if (err) return next(err);
      res.status(200).send(result);
    });
  },
};

export const DeleteDog = {
  path: "/api/dogs/:id",
  method: "delete",
  handler: async (req, res, next) => {
    const id = ObjectId(req.params.id);
    const db = getDbConnection(process.env.DB_NAME);
    await db.collection("dogs").deleteOne({ _id: id }, (err, result) => {
      if (err) return next(err);
      res.status(200).send(result);
    });
  },
};

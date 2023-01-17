/* eslint-disable import/prefer-default-export */
import { ObjectId } from "mongodb";
import { getDbConnection } from "../db.js";

export const getAllUsers = {
  path: "/api/users",
  method: "get",
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    await db
      .collection("users")
      .find({})
      .toArray((err, result) => {
        res.status(200).send(result);
      });
  },
};

export const getUser = {
  path: "/api/users/:id",
  method: "get",
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    const { id } = req.params;
    const user = await db.collection("users").findOne({ _id: ObjectId(id) });
    if (!user) return res.status(404).send("User not found");
    res.status(200).json(user);
  },
};

export const createUser = {
  path: "/api/users",
  method: "post",
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    const { name, email, type } = req.body;
    const data = await db.collection("users").insertOne({ name, email, type });
    res.status(201).json({ _id: data.insertedId, name, email, type });
  },
};

export const updateUser = {
  path: "/api/users/:id",
  method: "put",
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    const { id } = req.params;
    const { name, email, type } = req.body;
    await db
      .collection("users")
      .updateOne({ _id: ObjectId(id) }, { $set: { name, email, type } });
    res.status(200).json({ _id: id, name, email, type });
  },
};

export const deleteUser = {
  path: "/api/users/:id",
  method: "delete",
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    const { id } = req.params;
    await db.collection("users").deleteOne({ _id: ObjectId(id) });
    res.status(204).send();
  },
};

/* eslint-disable import/prefer-default-export */
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

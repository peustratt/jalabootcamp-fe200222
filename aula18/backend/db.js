import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
  client = new MongoClient('mongodb+srv://peustratt:yAVKqq4RFko2G6zx@cluster0.hflevvn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};

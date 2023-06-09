import { MongoClient } from "mongodb";
import { config } from "../../../config";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = config.DB_CONNECTION_STRING

const client = new MongoClient(uri);

async function run() {
  try {
    const connection = await client.connect();

    const cursor = await connection.db('word-mining').collection('translation-history').find();


    

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

import { MongoClient } from "mongodb";

const dbConnect = async () => {
  // instantiate a new client
  const client = new MongoClient(
    process.env.DATABASE_URI.replace(
      "<password>",
      process.env.DATABASE_PASSWORD
    )
  );

  // connect to the client
  await client.connect();

  // connect to the database
  const database = client.db(process.env.DATABASE_NAME);

  // get the users collection
  const usersCollection = database.collection("users");

  // return the users collection
  return { client, usersCollection };
};

export default dbConnect;

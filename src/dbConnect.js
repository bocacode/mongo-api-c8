import { MongoClient } from "mongodb";

import { uri } from "../secrets.js";

export function dbConnect() {
  const client = new MongoClient(uri);
  return client.db("mydatabase");
}

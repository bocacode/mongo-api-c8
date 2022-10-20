import { dbConnect } from "./dbConnect.js";

export async function addNewFurniture(req, res) {
  const newFurniture = req.body
  const db = dbConnect()
  await db.collection("furniture").insertOne(newFurniture)
    .catch(err => {
      res.status(500).send(err)
      return
    })
  res.status(201).send({ message: 'New Furniture Added.' })
}

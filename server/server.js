/* eslint-disable no-console */
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');

const server = express();
const port = process.env.PORT || 3000;

server.use(bodyParser.json());
server.use(cors());

server.get("/encounters/:id", [
  check("dateStart", "dateEnd").optional().isISO8601(),
], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const encounters = await getCollection("gw2.encounters");
  const filter = { "players" : req.params.id }

  if (req.query.success && (req.query.DateStart && req.query.dateEnd)) {
    filter["success"] = true;
    filter["date"] = {"$gte" : new Date(req.query.dateStart), "$lte" : new Date(req.query.dateEnd) }
  }

  if (req.query.dateStart && req.query.dateEnd) {
    filter["date"] = {"$gte" : new Date(req.query.dateStart), "$lte" : new Date(req.query.dateEnd) }
  }

  if (req.query.dateStart && !req.query.dateEnd) {
    filter["date"] = {"$gte" : new Date(req.query.dateStart) }
  }

  if (req.query.dateEnd && !req.query.dateStart) {
    filter["date"] = {"$lte" : new Date(req.query.dateEnd) }
  }

  if (req.query.success) {
    filter["success"] = true;
  }

  res.send(await encounters.find(filter).toArray());
});

server.get("/encounters", async (req, res) => {
  const encounters = await getCollection("gw2.encounters");
  res.send(await encounters.find({}).toArray());
});

server.get("/users/:id", async (req, res) => {
  const users = await getCollection("users");
  res.send(await users.findOne({ "_id": parseInt(req.params.id) }));
});

server.get("/users", async (req, res) => {
  const users = await getCollection("users");
  res.send(await users.find({}).toArray());
});

async function getCollection(collection) {
  const client = await mongodb.MongoClient.connect(
    process.env.MONGO_URL || "mongodb://localhost:27017",
    {
      useNewUrlParser: true
    }
  );

  return client.db(process.env.MONGO_DB || "local").collection(collection);
};

server.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);

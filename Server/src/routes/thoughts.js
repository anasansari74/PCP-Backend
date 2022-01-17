const express = require("express");

const thoughtsRouter = express.Router();

const dbo = require("../../database/conn");

const ObjectId = require("mongodb").ObjectId;

thoughtsRouter.route("/thoughts").get(async function (req, res) {
  let db_connect = dbo.getDb("positive-thought-generator");
  await db_connect.collection("thoughts").find({}).toArray();
});

thoughtsRouter.route("/thoughts/:id").get(async function (req, res) {
  let db_connect = dbo.getDb("positive-thought-generator");
  let myquery = { _id: ObjectId(`${req.params.id}`)};
  await db_connect
    .collection("positiveThoughtGenerator.positiveThoughts")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = thoughtsRouter;

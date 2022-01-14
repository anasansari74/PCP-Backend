const express = require("express");

const thoughtsRouter = express.Router();

const dbo = require("../../database/conn");

const ObjectId = require("mongodb").ObjectId;

thoughtsRouter.route("/thoughts").get(async function (req, res) {
  let db_connect = dbo.getDb("positive-thought-generator");
  await db_connect.collection("thoughts").find({}).toArray();
});

module.exports = thoughtsRouter;

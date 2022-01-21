const express = require("express");
const router = express.Router();

// Load Thought model
const Thought = require("../models/thought");

//GET /thoughts/test ✔
//description: tests thoughts route
router.get("/test", (req, res) => res.send("book route testing!"));

//GET /thoughts ✔
//description: Get all thoughts
router.get("/", (req, res) => {
  Thought.find()
    .then(thoughts => res.json(thoughts))
    .catch(err =>
      res.status(404).json({ nothoughtsfound: "No Thoughts found" })
    );
});

//GET /thoughts/:id
// description: Get single thoughts by id
router.get("/:id", (req, res) => {
  Thought.findById(req.params.id)
    .then(thought => res.json(thought))
    .catch(err =>
      res.status(404).json({ noThoughtsFound: "No Thought found" })
    );
});

// POST /thoughts ✔
// description: add/save thought
router.post("/", (req, res) => {
  Thought.create(req.body)
    .then(thought => res.json({ msg: "Thought added successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to add this thought" })
    );
});

//GET /thoughts/random
//description: gets a random thought from the database

module.exports = router;

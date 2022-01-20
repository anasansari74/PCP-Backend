// // With MONGOOSE

const express = require("express");
const router = express.Router();

// Load Thought model
const Thought = require("../models/thought");

// @route GET api/thoughts/test
// @description tests thoughts route
// @access Public
router.get("/thoughts/test", (req, res) => res.send("book route testing!"));

// @route GET api/thoughts/:id
// @description Get single thoughts by id
// @access Public
router.get("/thoughts/:id", (req, res) => {
  Thought.find({ _id: ObjectId(`61e14ed32de84352ec5ca8f4`) })
    .then(thought => res.json(thought))
    .catch(err =>
      res.status(404).json({ noThoughtsFound: "No Thought found" })
    );
});

module.exports = router;

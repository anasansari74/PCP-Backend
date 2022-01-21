const express = require("express");
const router = express.Router();

// Load Thought model
const Thought = require("../models/thought");

const getRandomElement = (array) => {
  const number = Math.floor(Math.random() * array.length);
  return array[number];
};

//GET /thoughts/test ✔
//description: tests thoughts route
router.get("/test", (req, res) => res.send("book route testing!"));

//GET /thoughts ✔
//description: Get all thoughts
router.get("/", (req, res) => {
  Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) =>
      res.status(404).json({ nothoughtsfound: "No Thoughts found" })
    );
});

//GET /thoughts/:id
// description: Get single thoughts by id
// router.get("/:id", (req, res) => {
//   Thought.findById(req.params.id)
//     .then(thought => res.json(thought))
//     .catch(err =>
//       res.status(404).json({ noThoughtsFound: "No Thought found" })
//     );
// });

// POST /thoughts ✔
// description: add/save thought
router.post("/", (req, res) => {
  Thought.create(req.body)
    .then((thought) => res.json({ msg: "Thought added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this thought" })
    );
});

const rand = getRandomElement(Thought.find())

console.log(Thought.find())

Thought.count().exec(function (err, count) {

  // Get a random entry
  var random = Math.floor(Math.random() * count)

  // Again query all users but only fetch one offset by our random #
  Thought.findOne().skip(random).exec(
    function (err, result) {
    })
})
//GET /thoughts/random
//description: gets a random thought from the database
router.get("/random", (req, res) => {
  Thought.findOne()
    .skip(rand)
    .then((thought) => res.json(`This is the ${thought} this is the ${rand}`))
    .catch((err) =>
      res
        .status(400)
        .json({
          error: `Unable to get thought and this is the random value: ${rand}`,
        })
    );
});

module.exports = router;

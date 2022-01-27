const Thought = require("../../models/thought");

//GET /thoughts/test ✔
//description: tests thoughts route
const testingRoute = async (req, res) => {
  await res.send("Thought route testing!");
};

//GET /thoughts ✔
//description: Get all thoughts
const getAllThoughts = async (req, res) => {
  const allThoughts = await Thought.find();
  res.json({ allThoughts });
};

// GET /thoughts/:id ✔
// description: Get single thoughts by ObjectId
const getThoughtById = async (req, res) => {
  const id = req.params.id;
  const thoughtById = await Thought.findById(id);
  res.json({ thoughtById });
};

// POST /thoughts ✔
// description: add/save thought
const addOneThought = async (req, res) => {
  const thought = req.body;
  const addThought = await Thought.create(thought);
  res.json({ addThought });
};
// //GET /thoughts/random ✔
// //description: gets a random thought from the database
const getRandomThought = async (req, res) => {
  const count = await Thought.count();
  const rand = Math.floor(Math.random() * count);
  const randomDoc = await Thought.findOne().skip(rand);
  res.json({ randomDoc });
};

module.exports = {
  testingRoute,
  getAllThoughts,
  getThoughtById,
  addOneThought,
  getRandomThought,
};

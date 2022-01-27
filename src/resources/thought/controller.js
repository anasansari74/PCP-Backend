const Thought = require("../../models/thought");

//GET /thoughts/test ✔
//description: tests thoughts route
const testingRoute = async (req, res) => {
  try {
    await res.send("Thought route testing!");
  } catch (error) {
    res.json({ error: error.message });
  }
};

//GET /thoughts ✔
//description: Get all thoughts
const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Thought.find();
    if (allThoughts) res.json({ allThoughts });
    if (!allThoughts) res.json({ msg: "Thought not found" });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
};

// GET /thoughts/thoughtId/:id ✔
// description: Get single thoughts by ObjectId
const getThoughtById = async (req, res) => {
  const id = req.params.id;

  try {
    const thoughtById = await Thought.findById(id);
    if (thoughtById) res.json({ thoughtById });
    if (!thoughtById) res.json({ msg: "Thought not found" });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
};

// POST /thoughts ✔
// description: add/save thought
const addOneThought = async (req, res) => {
  const thought = req.body;

  try {
    const addThought = await Thought.create(thought);
    if (addThought) res.json({ msg: `Added thought successfully ` });
    if (!addThought) res.json({ msg: "Thought not found" });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
};
// //GET /thoughts/random ✔
// //description: gets a random thought from the database
const getRandomThought = async (req, res) => {
  const count = await Thought.count();
  const rand = Math.floor(Math.random() * count);

  try {
    const randomThought = await Thought.findOne().skip(rand);
    if (randomThought) res.json({ randomThought });
    if (!randomThought) res.json({ msg: "Thought not found" });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
};

const deleteAllThoughts = async (req, res) => {
  try {
    const deleteThoughts = await Thought.remove({});
    if (deleteThoughts) res.json({ msg: "All thoughts deleted" });
    if (!deleteThoughts) res.json({ msg: "Thought not found" });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
};

module.exports = {
  testingRoute,
  getAllThoughts,
  getThoughtById,
  addOneThought,
  getRandomThought,
  deleteAllThoughts,
};

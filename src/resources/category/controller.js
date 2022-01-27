const Thought = require("../../models/thought");

// GET /categories/allThoughts/:category ✔
// description: filter thoughts from a specified category
const allThoughts = async (req, res) => {
  const category = req.params.category;

  try {
    const allThoughts = await Thought.find({
      categoryTitle: category.toLowerCase(),
    });
    if (allThoughts) res.json({ allThoughts });
    if (!allThoughts) res.json({ msg: "Thought not found" });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
};

// GET /categories/random/:category ✔
// description: filter one random from a specified category
const randomThought = async (req, res) => {
  const category = req.params.category;

  const count = await Thought.count({
    categoryTitle: category.toLowerCase(),
  });
  const rand = Math.floor(Math.random() * count);

  try {
    const randomThought = await Thought.findOne({
      categoryTitle: category.toLowerCase(),
    }).skip(rand);
    if (randomThought) res.json({ randomThought });
    if (!randomThought) res.json({ msg: "Thought not found" });
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
};

module.exports = { allThoughts, randomThought };

const mongoose = require("mongoose");

const ThoughtSchema = new mongoose.Schema({
  categoryTitle: {
    type: String,
    enum: [
      "health",
      "uplifting",
      "career",
      "motivation",
      "relationships",
      "wholesome",
      "relaxing",
      "comedic",
      "happiness",
      "insightful",
    ],
  },
  thought: {
    type: String,
  },
});

module.exports = Thought = mongoose.model("thought", ThoughtSchema);

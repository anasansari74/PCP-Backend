const mongoose = require("mongoose");

const ThoughtSchema = new mongoose.Schema({
  thought_id: {
    type: Number,
  },
  thought: {
    type: String,
  },
});

module.exports = Thought = mongoose.model("thought", ThoughtSchema);
;

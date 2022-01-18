const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  id: Number,
  thought: String,
});

module.exports = thought = mongoose.model("thought", thoughtSchema);

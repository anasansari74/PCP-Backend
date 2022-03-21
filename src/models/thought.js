const mongoose = require("mongoose");
// const axios = require("axios");

// let categories = [];

// async function getTags() {
//   try {
//     const response = await axios.get(
//       "https://goquotes-api.herokuapp.com/api/v1/all/tags"
//     );
//     if (response) {
//       let categoryNames = response.data.tags;

//       categories = categoryNames.map(a => a.name);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// getTags();

// console.log("categories", categories);

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

const mongoose = require("mongoose");
const axios = require('axios');

let categories = []


const getTags = () => {
  try {
    return axios.get('https://goquotes-api.herokuapp.com/api/v1/all/tags')
    .then(response => {
      if (response.data.tags) {
        console.log(
          `Got ${Object.entries(response.data.tags)} tags`
        )
      }
    })
  } catch (error) {
    console.error(error)
  }
}

// .then(response => {
//   if (response.data.message) {
//     console.log(
//       `Got ${Object.entries(response.data.message).length} breeds`
//     )
//   }
// })




getTags()

console.log("categories", categories)



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

const express = require("express");
const router = express.Router();

const {
  testingRoute,
  getAllThoughts,
  getThoughtById,
  addOneThought,
  getRandomThought,
  deleteAllThoughts,
} = require("./controller");

router.get("/test", testingRoute);
router.get("/", getAllThoughts);
router.get("/thoughtId/:id", getThoughtById);
router.post("/", addOneThought);
router.get("/random", getRandomThought);
router.delete("/", deleteAllThoughts);

module.exports = router;

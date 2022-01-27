const express = require("express");
const router = express.Router();
const {
  testingRoute,
  getAllThoughts,
  getThoughtById,
  addOneThought,
  getRandomThought,
} = require("./controller");

router.get("/test", testingRoute);
router.get("/", getAllThoughts);
router.get("/thoughtId/:id", getThoughtById);
router.post("/", addOneThought);
router.get("/random", getRandomThought);

module.exports = router;

const express = require("express");
const router = express.Router();

const { allThoughts, randomThought, allCategories } = require("./controller");

router.get("/categories", allCategories);

router.get("/allThoughts/:category", allThoughts);

router.get("/random/:category", randomThought);

module.exports = router;

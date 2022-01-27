const express = require("express");
const router = express.Router();

const { allThoughts, randomThought } = require("./controller");

router.get("/allThoughts/:category", allThoughts);

router.get("/random/:category", randomThought);

module.exports = router;

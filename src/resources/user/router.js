const express = require("express");
const router = express.Router();

const validateUser = require("./controller");

router.post("/login", validateUser);

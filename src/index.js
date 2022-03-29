require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const thoughtsRouter = require("./resources/thought/router");
const catergoriesRouter = require("./resources/category/router");

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Enables the OPTIONS request check in our API
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.options("*", cors());

// Connect Database
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => console.log(`Connection Succesful`))
  .catch(err => console.log(`Error in DB connection ${err}`));

/* SETUP ROUTES */

app.use("/thoughts", thoughtsRouter);
app.use("/categories", catergoriesRouter);

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});

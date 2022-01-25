require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// const thoughtsRouter = require("./routes/thoughts");
const thoughtsRouter = require("./resources/thought/router")

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Connect Database
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(`Connection Succesful ${res}`))
  .catch((err) => console.log(`Error in DB connection ${err}`));


/* SETUP ROUTES */

app.use("/thoughts", thoughtsRouter);

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});

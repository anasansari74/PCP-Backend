require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// get driver connection
const dbo = require("../database/conn");

const thoughtsRouter = require("./routes/thoughts");

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Connect Database

dbo();

/* SETUP ROUTES */

app.use("/thoughts", thoughtsRouter);

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  // Connect to the MongoDB cluster
  // mongoose.connect(
  //   process.env.ATLAS_URI,
  //   {
  //     useNewUrlParser: true,

  //     useUnifiedTopology: true,
  //   },
  //   err => {
  //     if (err) throw err;
  //     console.log("Connected to MongoDB!!!");
  //   }
  // );

  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});

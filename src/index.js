require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

let cookieParser = require("cookie-parser");

const salt = 10;

const app = express();

const usersRouter = require("./resources/user/router");
const thoughtsRouter = require("./resources/thought/router");
const catergoriesRouter = require("./resources/category/router");

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");

app.get('/',(req,res)=>{
  const {token}=req.cookies;
  if(verifyToken(token)){
      return res.render('/');
  }else{
      res.redirect('/login')
  }
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Enables the OPTIONS request check in our API
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Connect Database
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(`Connection Succesful`))
  .catch((err) => console.log(`Error in DB connection ${err}`));



/* SETUP ROUTES */
app.use("/user", usersRouter);
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

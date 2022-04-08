const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.jwt;
const User = require("../../models/user");

const verifyUserLogin = async (username, password) => {
  try {
    const user = await User.findOne({ username }).lean();
    if (!user) {
      return { status: "error", error: "user not found" };
    }
    if (await bcrypt.compare(password, user.password)) {
      // creating a JWT token
      token = jwt.sign(
        { id: user._id, username: user.username, type: "user" },
        JWT_SECRET,
        { expiresIn: "2h" }
      );
      return { status: "ok", data: token };
    }
    return { status: "error", error: "invalid password" };
  } catch (error) {
    console.log(error);
    return { status: "error", error: "timed out" };
  }
};

// login
const login = async (req, res) => {
  const { username, password } = req.body;
  // we made a function to verify our user login
  const response = await verifyUserLogin(username, password);
  if (response.status === "ok") {
    console.log("You are loggedin");
    // storing our JWT web token as a cookie in our browser
    res.cookie("token", token, { httpOnly: true }); // maxAge: 2 hours
  } else {
    res.json(response);
  }
};

const signup = async (req, res) => {
  // geting our data from frontend
  const { username, password: plainTextPassword } = req.body;
  // encrypting our password to store in database
  const password = await bcrypt.hash(plainTextPassword, 8);
  try {
    // storing our user data into database
    const response = await User.create({
      username,
      password,
    });
    if (response) res.json({ msg: "You have succesfully signed up!" });

    return res.redirect("/");
  } catch (error) {
    console.log(JSON.stringify(error));
    if (error.code === 11000) {
      return res.send({ status: "error", error: "username already exists" });
    }
    throw error;
  }
};

module.exports = { login, signup };

const Users = require("../../models/user");
const bcrypt = require("bcrypt")
// import compare from bcrypt

async function validateUser (req, res) {

try {
    // Get user input
    const { username, password } = req.body;

    const user = await Users.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    

    // Validate user input
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
}

module.exports = validateUser;
 


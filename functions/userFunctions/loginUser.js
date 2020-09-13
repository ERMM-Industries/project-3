let User = require("../../schemas/User"); //Intereacts with the user schema
const { validationResult } = require("express-validator"); //check the values that we post or put
const bcryptjs = require("bcryptjs"); //encrypts data
const config = require("config");
const jwt = require("jsonwebtoken"); //creates login tokens to track user actions once logged in

module.exports = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!user)
      return res
        .status(404)
        .send("User with this email hasn't been created yet");

    let doPasswordsMatch = await bcryptjs.compare(password, user.password);

    if (!doPasswordsMatch)
      return res.status(401).json("Passwords do not match");

    const payload = {
      //this needs to be called payload b/c of the documentation. It takes the _id of each newUser
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      //this is the method that creates the token
      payload,
      config.get("jsonWebTokenSecret"),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error.");
  }
};

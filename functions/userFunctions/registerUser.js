const { validationResult } = require("express-validator"); //check the values that we post or put
let User = require("../../schemas/User"); //Intereacts with the user schema
const bcryptjs = require("bcryptjs"); //encrypts data
const gravatar = require("gravatar"); //avatar creation
const config = require("config");
const jwt = require("jsonwebtoken"); //creates login tokens to track user actions once logged in
module.exports = async (req, res) => {
  try {
    let { name, lastName, userName, email, password } = req.body;
    let user = await User.findOne({ email }).select("-password");
    let fetchedUsernameFromDatabase = await await User.findOne({
      userName,
    }).select("-password");
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (user) return res.status(402).send("Email already in use");

    if (fetchedUsernameFromDatabase === userName)
      return res.status(402).send("Username is already taken");

    const avatar = gravatar.url(email, {
      // if no avatar was added then it will add this
      r: "pg",
      d: "mm",
      s: "200",
    });

    let newUser = new User({
      name,
      lastName,
      userName,
      email,
      password,
      avatar,
    });
    const salt = await bcryptjs.genSalt(10); //the higher the number the more secure the app. It also slows down the app

    let hashedPassword = await bcryptjs.hash(password, salt);

    newUser.password = hashedPassword;

    await newUser.save(); // this saves the new user that we have created to the database

    const payload = {
      //this needs to be called payload b/c of the documentation. It takes the _id of each newUser
      user: {
        id: newUser._id,
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

const { validationResult } = require("express-validator"); //check the values that we post or put
let User = require("../../schemas/User"); //Intereacts with the user schema
const bcryptjs = require("bcryptjs"); //encrypts data

module.exports = async (req, res) => {
  try {
    // here we check to see if the passwords match
    const { passwordToCheck } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    let user = await User.findById(req.user.id);

    let doPasswordsMatch = await bcryptjs.compare(
      passwordToCheck,
      user.password
    );

    if (!doPasswordsMatch)
      return res.status(401).json("Passwords do not match");

    res.json("Passwords do match");
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error.");
  }
};

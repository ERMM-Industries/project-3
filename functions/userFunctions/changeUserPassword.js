const { validationResult } = require("express-validator"); //check the values that we post or put
let User = require("../../schemas/User"); //Intereacts with the user schema
const bcryptjs = require("bcryptjs"); //encrypts data

module.exports = async (req, res) => {
  try {
    // if they do match then here we can change our password
    const { newPassword } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    let user = await User.findById(req.user.id);

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(newPassword, salt);

    user.password = hashedPassword;

    await user.save();

    res.json("Successfuly changed password");
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error.");
  }
};

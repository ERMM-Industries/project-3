const { validationResult } = require("express-validator"); //check the values that we post or put
let User = require("../../schemas/User"); //Intereacts with the user schema

module.exports = async (req, res) => {
  try {
    const { changeUserData } = req.body;
    const errors = validationResult(req);
    let user = await User.findById(req.user.id).select("-password");

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    if (!user) return res.status(404).json("User no found");

    //userDataToChange -> name,lastname,userName

    let userDataToChange = req.params.user_data_to_change.toString();

    if (user[userDataToChange] === changeUserData.toString())
      return res.status(401).json("This is the same data that is the database");

    user[userDataToChange] = changeUserData.toString();

    await user.save();

    res.json("Data is changed");
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error.");
  }
};

let User = require("../../schemas/User"); //Intereacts with the user schema

module.exports = async (req, res) => {
  try {
    let users = await User.find().select("-passowrd");
    res.json(users);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error.");
  }
};

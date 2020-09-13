let User = require("../../schemas/User"); //Intereacts with the user schema

module.exports = async (req, res) => {
  try {
    let { userNameFromSearch } = req.body;
    let users = await User.find().select("-password");
    let findUserByUsername = users.filter(
      (user) =>
        user.userName.toString().split(" ").join("") ===
        userNameFromSearch.toString().split(" ").join("")
    );
    res.json(findUserByUsername);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error.");
  }
};

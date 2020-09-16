const Post = require("../../schemas/Post"); //acces the Post schema

module.exports = async (req, res) => {
  // change of the name of the route to "/"
  try {
    let posts = await Post.find();

    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error.");
  }
};

//might need validator

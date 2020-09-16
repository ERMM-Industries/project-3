const Post = require("../../schemas/Post"); //access the Post schema

module.exports = async (req, res) => {
  try {
    //-1 sorts the posts by likes from highest to lowest amount of likes, as default sort is assigned as 1, when you use use -1 you basically reverse the order of the array
    let posts = await Post.find().sort({ date: 1 });

    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error.");
  }
};

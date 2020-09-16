const Post = require("../../schemas/Post"); //access the Post schema

module.exports = async (req, res) => {
  try {
    let posts = await Post.find({ user: req.params.user_id });
    let userPosts = posts.filter(
      (post) => post.user.toString() === req.user.id.toString()
    );

    res.json(userPosts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error.");
  }
};

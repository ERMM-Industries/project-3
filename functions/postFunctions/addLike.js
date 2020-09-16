const Post = require("../../schemas/Post"); //access the Post schema

module.exports = async (req, res) => {
  try {
    let post = await Post.findById(req.params.post_id);

    if (!post) return res.status(404).json("post not found");

    // takes in id of logged in user and takes in the id of the post and checks if both of them are equal
    if (post.likes.find((like) => like.user.toString() === req.user.id))
      return res.status(401).json("Post is already liked by you");

    let newLike = {
      user: req.user.id,
    };

    post.likes.unshift(newLike); //newLike object is added to posts array

    await post.save();

    res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error.");
  }
};

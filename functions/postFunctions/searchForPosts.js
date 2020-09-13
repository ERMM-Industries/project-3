const Post = require("../../schemas/Post"); //access the Post schema

module.exports = async (req, res) => {
  const { searchInput } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  try {
    let posts = await Post.find();
    if (searchInput === "" || searchInput === null) {
      res.status(401).json(posts);
    } else {
      let findPostBySearchInput = posts.find(
        (post) =>
          post.textOfThePost.toString().split(" ").join("") ===
          searchInput.toString().split(" ").join("")
      );
      res.json(findPostBySearchInput);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error.");
  }
};

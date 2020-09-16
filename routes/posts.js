const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");
const { check } = require("express-validator");

//connection to all the functions that allow connectivity to datatbase
const getPosts = require("../functions/postFunctions/getPosts");
const getMostLikedPosts = require("../functions/postFunctions/getGestMostLikedPosts");
const getMostRecentPosts = require("../functions/postFunctions/getMostRecentPosts");
const getMostCommentedPosts = require("../functions/postFunctions/getMostCommentedPosts");
const getSinglePost = require("../functions/postFunctions/getSinglePost");
const getUserPostsById = require("../functions/postFunctions/getUserPostsById");
const getUserPostsByMiddleware = require("../functions/postFunctions/getUserPostsByMiddleware");
const createPosts = require("../functions/postFunctions/createPosts");
const searchForPosts = require("../functions/postFunctions/searchForPosts");
const addLike = require("../functions/postFunctions/addLike");
const addComment = require("../functions/postFunctions/addComment");
const likeComment = require("../functions/postFunctions/likeComment");
const deletePost = require("../functions/postFunctions/deletePost");
const removeLikeFromPost = require("../functions/postFunctions/removeLikeFromPost");
const removeComment = require("../functions/postFunctions/removeComment");
const removeLikeFromComment = require("../functions/postFunctions/removeLikeFromComment");

//routers to database
router.get("/posts", getPosts);

// this may not work double check to see
router.get("/posts/the_most_liked", getMostLikedPosts);

router.get("/posts/the_most_recent", getMostRecentPosts);

router.get("/posts/most_commented", getMostCommentedPosts);

router.get("/single_post/:post_id", getSinglePost);

router.get("/user_posts/:user_id", getUserPostsById); //getUserPostsById

//this one uses authentication beacuse it will require the person to be logged in to look at their own posts
router.get("/user_posts/:user_id", authentication, getUserPostsByMiddleware); // getUserPostsByMiddleware

router.post(
  "/",
  authentication,
  [check("textOfThePost", "Text is required").not().isEmpty()],
  createPosts
); // creatPosts.js

router.put(
  "/search_for_post",
  [check("searchInput", "Search is empty").not().isEmpty()],
  searchForPosts
);

router.put("/likes/:post_id", authentication, addLike);

router.put("/add_comment/:post_id", authentication, [
  check("textOfTheComment", "Text is empty").not().isEmpty(),
  addComment,
]);

router.put("/like_comment/:post_id/:comment_id", authentication, likeComment);

router.delete("/delete_post/:post_id", authentication, deletePost);

router.delete(
  "/remove_like_from_post/:post_id/:like_id",
  authentication,
  removeLikeFromPost
);

router.delete(
  "/remove_comment/:post_id/:comment_id/",
  authentication,
  removeComment
);

router.delete(
  // check to see if this works
  "/remove_like_from_comment/:post_id/:comment_id",
  authentication,
  removeLikeFromComment
);
module.exports = router;

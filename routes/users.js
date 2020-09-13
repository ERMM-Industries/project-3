const express = require("express");
const router = express.Router(); //allows us to make different files together and make routes instead of making them in the server.js file
const { check } = require("express-validator"); //check the values that we post or put
let User = require("../schemas/User");
const bcryptjs = require("bcryptjs"); // encrypts data
const gravatar = require("gravatar"); // creates avatar
const config = require("config");
const jwt = require("jsonwebtoken"); //creates login tokens to track user actions once logged in
const authentication = require("../middleware/authentication");

//connection to all the functions that allow connectivity to datatbase
const getUserByMiddleware = require("../functions/userFunctions/getUserByMiddleware");
const getUserByEmail = require("../functions/userFunctions/getUserByEmail");
const getUsers = require("../functions/userFunctions/getUsers");
const getUserById = require("../functions/userFunctions/getUserById");
const registerUser = require("../functions/userFunctions/registerUser");
const loginUser = require("../functions/userFunctions/loginUser");
const searchUserByUsername = require("../functions/userFunctions/searchUserByUsername");
const changeUserData = require("../functions/userFunctions/changeUserData");
const checkActualPassword = require("../functions/userFunctions/checkActualPassword");
const changeUserPassword = require("../functions/userFunctions/changeUserPassword");

router.get("/", authentication, getUserByMiddleware);

router.get("/get_user_by_email/:user_email", getUserByEmail);

router.get("/users", getUsers);

router.get("/get_user_by_id/:user_id", getUserById);

router.post(
  "/register",
  [
    check("name", "Name is empty").not().isEmpty(),
    check("lastName", "Last name is empty").not().isEmpty(),
    check("userName", "User ame is empty").not().isEmpty(),
    check("email", "Email is empty").isEmail(),
    check(
      "password",
      "Passwords need to contain 6 letters and less than 12"
    ).isLength({ min: 6, max: 12 }),
  ],
  registerUser
);

router.post(
  "/login",
  [
    check("email", "Email is empty").isEmail(),
    check(
      "password",
      "Passwords need to contain 6 letters and less than 12"
    ).isLength({ min: 6, max: 12 }),
  ],
  loginUser
);

router.put(
  "/search_by_username",
  [check("userNameFromSearch", "Search is empty").not().isEmpty()],
  searchUserByUsername
);

router.put(
  "/change_user_data/:user_data_to_change",
  authentication,
  [check("changeUserData", "Input is empty").not().isEmpty()],
  changeUserData
);

router.put(
  "/check_actual_password",
  authentication,
  [
    check(
      "passwordToCheck",
      "Password has to be 6 letters long and below 12"
    ).isLength({ min: 6, max: 12 }),
  ],
  checkActualPassword
);

router.put(
  "/change_user_password",
  authentication,
  [
    check(
      "newPassword",
      "New password has to be 6 letters long and below 12"
    ).isLength({ min: 6, max: 12 }),
  ],
  changeUserPassword
);

module.exports = router;

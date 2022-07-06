const express = require("express")
const router = express.Router();

const {
  loginUser,
  registerUser
} = require("../controllers/userControllers")

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
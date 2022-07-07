const User = require("../model/userModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const bcrypt = require("bcryptjs");
const CustomError = require("../errors/customError");
const jwt = require("jsonwebtoken");

const loginUser = asyncWrapper(async (req, res, next) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName }).lean();
  if (!user) {
    return next(new CustomError("Invalid Username/Password", 403));
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        userName: user.userName,
      },
      process.env.JWT_SECRET
    );
    global.JWT_TOKEN = token;
    res.status(200).json({
      success: true,
      message: "User is successfully logged in",
    });
  } else {
    return next(new CustomError("Invalid Username/Password", 403));
  }
});

const registerUser = asyncWrapper(async (req, res, next) => {
  if (req.body.password.length < 8 || req.body.password.length > 30) {
    return next(
      new CustomError(
        "Length of the password must be less than or equal to 30 characters and greater than or equal to 8 characters",
        500
      )
    );
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);
  await User.create(req.body);
  res.status(200).json({
    success: true,
    message: "User was successfully registered",
  });
});

const logoutUser = (req, res, next) => {
  delete global.JWT_TOKEN;
  res.status(200).json({
    success: true,
    message: "User was successfully logged out",
  });
};

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
};

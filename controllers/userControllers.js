const loginUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Login user"
  })
}

const registerUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Register user"
  })
}

module.exports = {
  loginUser,
  registerUser
}
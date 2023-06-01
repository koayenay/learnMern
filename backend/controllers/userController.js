const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    // Checking if any of the required fields are missing
    res.status(400)
    throw new Error("Please add all fields")
  }

  // Check if the user already exists in the database
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create a new user in the database
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  // Return the newly created user's ID, name, and email
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" })
})

// @desc Get user id
// @route POST /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User Data display" })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}

https://youtu.be/enopDSs3DRw?list=PLTMNWTDdd5z_CtvbzG6r1f4hjnCaphPTV&t=1326
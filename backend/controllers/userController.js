const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new user
// @route POST /api/user
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: 'New User Registered'})
})

// @desc Authenticate user
// @route POST /api/login
// @access Public
const loginUser =asyncHandler(async (req, res) => {
    res.json({message: 'Login user'})
})

// @desc Get user data
// @route GET /api/user/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User Data'})
})


module.exports = {
    registerUser,
    loginUser,
    getMe,
}
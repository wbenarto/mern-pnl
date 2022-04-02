// @desc Register new user
// @route POST /api/user
// @access Public
const registerUser = (req, res) => {
    res.json({message: 'New User Registered'})
}

// @desc Authenticate user
// @route POST /api/login
// @access Public
const loginUser = (req, res) => {
    res.json({message: 'Login user'})
}

// @desc Get user data
// @route GET /api/user/me
// @access Public
const getMe = (req, res) => {
    res.json({message: 'User Data'})
}


module.exports = {
    registerUser,
    loginUser,
    getMe,
}
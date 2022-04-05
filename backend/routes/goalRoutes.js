const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

// Read
router.get('/', protect, getGoals)

// Create
router.post('/', setGoal)

// Update
router.put('/:id', updateGoal)


// Delete
router.delete('/:id', deleteGoal)

module.exports = router
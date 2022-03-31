const express = require('express')
const router = express.Router()

// Read
router.get('/', (req,res) => {
    res.status(200).json({message: 'GetGoals'})
})

// Create
router.post('/', (req,res) => {
    res.status(200).json({message: 'Set Goal'})
})

// Update
router.put('/:id', (req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})


// Delete
router.delete('/', (req,res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
})

module.exports = router
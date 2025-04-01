const express = require('express');
const router = express.Router();
const User = require('../models/User');

// CREATE Users -- Sign Up
router.post('/', async (req, res) => {

    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json({ message: 'Sucessfully Registered.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// DISPLAY all Users
router.get('/', async (req, res) => {

    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;
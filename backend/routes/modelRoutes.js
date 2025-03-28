const express = require('express');
const router = express.Router();
const Model = require('../models/Model');


// CREATE a Model
router.post('/', async(req, res) => {

    try {
        const modelData = req.body;
        const model = new Model(modelData);
        await model.save();
        res.status(200).json({ message: 'Successfully Added Model.'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// DISPLAY all Models
router.get('/', async(req, res) => {

    try {
        const models = await Model.find();
        res.status(200).json(models);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;
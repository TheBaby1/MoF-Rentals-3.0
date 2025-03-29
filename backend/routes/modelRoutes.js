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

// UPDATE a Model by ID
router.put('/:id', async(req, res) => {

    try {
        const { id } = req.params;
        const updatedModel = await Model.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedModel) {
            res.status(400).json({ message: 'Model Does Not Exist.' });
        }

        res.status(200).json({ message: 'Successfully Updated Model.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// DELETE a Model by ID
router.delete('/:id', async(req, res) => {

    try {
        const { id } = req.params;
        const deletedModel = await Model.findByIdAndDelete(id);

        if (!deletedModel) {
            res.status(400).json({ message: 'Model Does Not Exist.' });
        }

        res.status(200).json({message: 'Successfully Deleted Model.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;
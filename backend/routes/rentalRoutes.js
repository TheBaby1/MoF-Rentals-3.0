const express = require('express');
const Rental = require('../models/Rental');
const router = express.Router();

// CREATE a Rental
router.post('/', async (req, res) => {

    try {
        const newRental = new Rental(req.body);
        const savedRental = await newRental.save();
        res.status(201).json(savedRental);
    } catch (error) {   
        res.status(500).json({ error: error.message });
    }
})

// DISPLAY all Rentals
router.get('/', async (req, res) => {

    try {
        const rentals = await Rental.find();
        res.status(200).json(rentals);
    } catch (error) {
        res.status(500).json({ error: error.messsage });
    }
})

// DELETE Rental by ID
router.delete('/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const deletedRental = await Rental.findByIdAndDelete(id);

        if (!deletedRental) {
            res.status(400).json({ message: 'Rental Does Not Exist.' });
        }

        res.status(200).json({ message: 'Successfully Deleted Rental.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;
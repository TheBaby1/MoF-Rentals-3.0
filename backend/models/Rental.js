const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({

    modelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Model', required: true },
    startDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    status:{
        type: String,
        enum: ['pending', 'active', 'completed', 'canceled'],
        default: 'pending'
    },
}, { timestamps: true });

module.exports = mongoose.model('Rental', RentalSchema);
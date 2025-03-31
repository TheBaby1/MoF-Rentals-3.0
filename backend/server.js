const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose
    .connect(process.env.MONGO_URI, { 
        dbName: 'mof-rentals'})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));

// API Routes
app.use('/models', require('./routes/modelRoutes'));
app.use('/rentals', require('./routes/rentalRoutes'));

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})
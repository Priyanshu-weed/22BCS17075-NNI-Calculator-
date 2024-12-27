
// Import Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize App
const app = express();
const PORT = 5000; // Change this if you want a different port

// MongoDB Connection URI
const MONGO_URI = "mongodb://localhost:27017/nni"; // Replace with your MongoDB URI if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });

// Define Neighborhood Schema and Model
const NeighborhoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    greenSpaces: { type: Number, required: true },
    safety: { type: Number, required: true },
    educationFacilities: { type: Number, required: true },
    healthcareServices: { type: Number, required: true },
    playAreas: { type: Number, required: true },
    communitySupport: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Neighborhood = mongoose.model('Neighborhood', NeighborhoodSchema);

// API Endpoints

// Get All Neighborhoods
app.get('/api/neighborhoods', async (req, res) => {
    try {
        const neighborhoods = await Neighborhood.find();
        res.json(neighborhoods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a New Neighborhood
app.post('/api/neighborhoods', async (req, res) => {
    try {
        const data = req.body;
        const newNeighborhood = new Neighborhood(data);
        await newNeighborhood.save();
        res.status(201).json(newNeighborhood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

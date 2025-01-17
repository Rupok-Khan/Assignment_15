const express = require('express'); // Import Express
const app = express(); // Initialize Express app
require('dotenv').config();
const authRoutes = require('./Router/authRouter'); // Import your routes

app.use(express.json()); // Middleware to parse JSON requests
app.use('/api', authRoutes); // Use the routes

const PORT = process.env.PORT || 3000; // Define a port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

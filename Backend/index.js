const express = require('express');
const connectToMongo = require('./db'); // Import the MongoDB connection function if using MongoDB

// Initialize MongoDB connection if needed
connectToMongo();

const app = express();
const PORT = process.env.PORT || 8000;

// // Middleware
app.use(express.json());


app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

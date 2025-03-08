const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/iNotebookDB';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

    // Mongoose connection events
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to the database');
    });

    mongoose.connection.on('error', (err) => {
        console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected from the database');
    });
}

module.exports = connectToMongo;

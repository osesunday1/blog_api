const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const blogsRoute = require('./routes/blogsRoute.js');
const cors = require('cors'); 




const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
});


//CORS middleware
app.use(cors());  // Add this line

// Middlewares
app.use(express.json());

app.use("/api/v1/blogs", blogsRoute);

// Route for root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Blog API');
});

// Starting server
const port = process.env.PORT || 3003;

app.listen(port, () => {
    connect();
    console.log(`App's running on port ${port}...`);
});
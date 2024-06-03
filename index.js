const express = require ('express');
const dotenv = require ('dotenv');
const mongoose = require('mongoose');



const blogsRoute = require('./routes/blogsRoute.js');



const app =express();
dotenv.config()



const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
      } catch (error) {
        throw error
      }
    };  
    
    mongoose.connection.on("disconnected", ()=> {
        console.log("mongoDB disconnected")
    });


//middlewares
app.use(express.json())

app.use("/api/v1/blogs", blogsRoute);




//starting server
const port = 3003

app.listen(port, ()=> {
    connect()
    console.log(`App's running on port ${port}...`)
});

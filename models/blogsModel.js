const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({

    title: {
        type: String,
        required: true
      },
    name: {
        type: String,
        required: true
      },
    body:{
        type: String,
        required: true
      }
      
});

module.exports = mongoose.model("blogModel", blogSchema);
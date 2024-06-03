const express = require('express');
const BlogModel = require('./../models/blogsModel.js'); 
const { createError } = require('../utils/error.js');



// Create
exports.createBlog = async (req, res, next) => {
    const blog = new BlogModel(req.body); 
    try {
        const savedBlog = await blog.save();
        res.status(200).json(savedBlog);
    } catch (err) {
        next(createError(401, "You are not authenticated"));
    }
};


//get all
exports.getAllBlogs= async(req, res, next)=>{
    try{
        const getBlogs = await BlogModel.find();
        res.status(200).json(getBlogs);
    }catch(err){
        next(createError(401, "You are not authenticated"));
    }
}


//get particular blog

exports.getSingleBlog= async(req, res, next)=>{
    try{
        const getBlog = await BlogModel.findById(req.params.id);
        res.status(200).json(getBlog);
    }catch(err){
        next(createError(401, "You are not authenticated"));
    }
}

//delete blog
exports.deleteBlog= async(req, res, next)=>{
    try{
        await BlogModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Blog has been deleted");
    }catch(err){
        next(createError(401, "You are not authenticated"));
    }
}


// Controller to get blogs by author
exports.getBlogsByAuthor = async (req, res, next) => {
    try {
        const authorName = req.params.name;
        const blogs = await BlogModel.find({ name: authorName });
        if (blogs.length > 0) {
            res.status(200).json(blogs);
        } else {
            next(createError(404, "No blogs found for this author."));
        }
    } catch (err) {
        next(createError(500, "Server Error"));
    }
};

// get all authors
exports.getAllAuthors = async (req, res, next) => {
    try {
      const authors = await BlogModel.distinct('name');
      res.status(200).json(authors);
    } catch (err) {
      next(createError(500, "Internal Server Error"));
    }
  };
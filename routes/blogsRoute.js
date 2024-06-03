const express = require ('express');
const blogController= require('./../controller/blogsController.js');

const {createBlog, getAllBlogs, getSingleBlog, deleteBlog, getBlogsByAuthor} = blogController

const router = express.Router();

router.post("/", createBlog)
router.get("/", getAllBlogs)
router.get("/find/:id", getSingleBlog)
router.delete("/:id", deleteBlog)
router.get("/find/author/:name", getBlogsByAuthor)



module.exports = router;
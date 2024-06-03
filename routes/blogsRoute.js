const express = require ('express');
const blogController= require('./../controller/blogsController.js');

const {createBlog, getAllBlogs, getSingleBlog, deleteBlog, getBlogsByAuthor, getAllAuthors} = blogController

const router = express.Router();

router.post("/", createBlog)
router.get("/", getAllBlogs)
router.get("/find/:id", getSingleBlog)
router.get("/authors", getAllAuthors)
router.delete("/:id", deleteBlog)
router.get("/find/author/:name", getBlogsByAuthor)



module.exports = router;
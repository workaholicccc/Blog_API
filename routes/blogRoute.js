//this file will define all API endpoints

const express=require('express')
const router=express.Router()
const blogController=require("../blogController/controller")


//endpoint for creating a post
router.post('/posts',blogController.createPost)


//endpoint for getting all the posts
router.get('/posts',blogController.findAllPosts)


//endpoint for getting a single post
router.get('/posts/:id',blogController.findPostByID)


//endpoint for updating a post
router.put('/posts/:id',blogController.updatedPost)


//endpoint for deleting a post
router.delete('/posts/:id',blogController.deletePost)
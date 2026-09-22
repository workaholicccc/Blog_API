//this file handles the request and response logic

//importing from the data file 
const blogData= require('..blogData/data')


//create a post
const createPost=(req,res)=>{
    const {title,content,author}=req.body    //extracting  title,content,author from the req.body


    if (!title||!content){
        return res.status(400).json({
            message:"Title and content are required"
        })
    }

    const newPost=blogData.create({title,content,author})
    res.status(201).json({
        message:"New post created",
        post:newPost
    })

}


//finding all posts
const findAllPosts=(req,res)=>{
    res.json(posts)   //will get all the posts in a json format
}


//finding a post 
const findPostByID=(req,res)=>{
    const  {id} = req.params     //extracting the ID from req.params
    const post= findPostByID(id)

    if (!post){
        res.status(404).json({
            message:"This is post is not available"
        })
    }

    res.status(200).json({post})   //showing the post in a json format
}


//updating a post
const updatedPost=(req,res)=>{

    const {id}=req.params
    const {title,content,author}=req.body    //extracting  title,description,author from the req.body

    const updatedData={}

    if (title) updatedData.title=title
    if(content) updatedData.content=content
    if(author) updatedData.author=content

    const updatedPost=blogData.update(id,updatedData)

    res.status(200).json({
        message:"Post updated",
        post:updatedPost  //it'll show the updated post
    })
}


//deleting a post
const deletePost=(req,res)=>{

    const {id}=req.params   //extracting the ID from req.params

    blogData.delete(id)  //deleting the post

    res.status(200).json({
        message:"Post has been deleted"
    })
}


module.exports={
    createPost,
    findAllPosts,
    findPostByID,
    updatedPost,
    deletePost

}



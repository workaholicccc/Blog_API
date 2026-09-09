//this file will be used to store the data for this project

const {v4:uuidv4}=require('uuid')   //needed for generating unique IDs for each post

let posts=[]  //will store the data


//creating a function to generate new posts
function createPost(postData){   
    const newPost={      //tells us what a post will contain 
        id:uuidv4(),
        title:postData.title,
        content:postData.content,
        author:postData.author || 'Anonymous',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }

    posts.push(newPost)  //storing 'newPost' in posts

    return newPost
}


//getting all the posts
function findAllPosts(){
    return posts
}


//getting a post by ID
function findPostByID(id){
    return posts.find(post=>post.id===id)
}


//updating a post
function updatePost(id){
    
}
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
function updatePost(id,updateData){
    
    const index = posts.findIndex(post=>post.id===id)     //finding the post that'll be updated

    if (index===-1) return null     //if the index doesn't exist, null will be shown

    const updatedPost={  //the updated post

        ...posts[index],
        ...updateData,
        updatedAt:new Date().toISOString()    
    }

    posts[index]===updatedPost

    return updatedPost
}


//deleting a post
function deletePost(id){

    const index=findIndex(post=post.id===id)  //finding the post that needs to be deleted

    posts.splice(index,1)   //it'll start deleting from 'index', and will only delete 1 post
    return true

}


module.exports={ //so that other files can access them
    createPost,
    findAllPosts,
    findPostByID,
    updatePost,
    deletePost
}
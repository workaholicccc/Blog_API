//this file contains the express app config

const express=require('express')  //setting up the express server
const{handlingError,notFound}=require('./middleware/errorHandler')  
const cors=require('cors')  //allows other domains to call our API

const app=express()    //creating the express application


//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))  //reads data from HTML file ('true' means can read complex data)


//this middleware stores every API request that comes in
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})


//health check endpoint
app.get('/health',(req,res))=>{
    res.status(200).json({
        status:"OK",
        message:"Blog API is running",
        timestamp:new Date().toISOString()
    })

}


//error handling
app.use(notFound)
app.use(handlingError)


module.exports=app



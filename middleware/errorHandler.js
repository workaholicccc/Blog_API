//for handling error

const handlingError=(err,req,res,next)=>{
    console.error(err.stack)   //will give a detailed history of the error


    //handling default error
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal Server Error"

    res.status(statusCode).json({
        error: message,
        timestamp:new Date().toISOString
    })
}


//middleware to handle 404 (not found) error
const notFound=(req,res,next)=>{
        res.status(404).json({
            error:`The route ${req.originalUrl} not found`
        })
    }



module.exports={
    handlingError,
    notFound

}
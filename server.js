//for starting the server

const app=require("./app.js")


//setting up the port  
const PORT=process.evn.PORT||3000    //either use the port given by the environment or use 3000 (if not given)


//starting the server
app.listen(PORT,()=>{
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📝 API endpoints available at http://localhost:${PORT}/api/posts`);
    console.log(`💚 Health check at http://localhost:${PORT}/health`);
})


const express=require('express');
const {logger}=require('./configuration')
const createError=require('http-errors')
const app=express();
const middleware=require('./middlewares');
const routes = require('./routes');
process.on('unhandledRejection',(reason)=>{
   logger.error(reason);
    process.exit(1);
})

middleware(app)

app.get('/', (req, res) => {
    return res.json({message: "ok"});
})

routes(app);

app.use((req,res,next) => {
    const error=createError(404)
    next(error);
   
});

app.use((error,req,res,next) => {
    logger.error(error.message);
    res.statusCode=error.statusCode;
    res.json( {
        message:error.message
    });
});

module.exports=app;

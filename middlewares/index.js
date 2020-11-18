const morgan=require('morgan');
const express=require('express')
module.exports=(app)=> {
    app.use(morgan('[:date[clf]] - :remote-addr - :method - :url - :status - :response-time ms'));
    app.use(express.json({}))
}
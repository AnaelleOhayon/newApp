const logger=require('../../configuration/logger');
module.exports.getLogin=(req,res,next)=>{
    logger.info('hello')
    res.send("welcome to login page")

};
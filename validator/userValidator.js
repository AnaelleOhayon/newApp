const Joi=require('@hapi/joi');

const schema=Joi.object({
    username:Joi.string().alphanum().required().min(3).max(10),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
    .message('Your password must be : At least one upper case English letter,At least one lower case English letter,  At least one digit, (?=.*?[0-9]) At least one special character,Minimum eight in length ').required(),
    first_name:Joi.string().required(),
    last_name:Joi.string().required()

});

module.exports=schema;
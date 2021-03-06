const {Router} = require('express');
const {getLogin, postSignup} = require('../controllers')
const router = Router();
router
    .get('/login', getLogin)
    .post('/signup', postSignup)

module.exports = router;
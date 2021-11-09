const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//Route user
router.post('/signupUser', userCtrl.signupUser);
router.post('/signinUser', userCtrl.loginUser);



module.exports = router;
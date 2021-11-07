const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//Route participants
router.post('/signupUser', userCtrl.signupUser);
router.post('/signinUser', userCtrl.loginUser);


//Route chercheurs
//router.post('/signupResearcher', userCtrl.signupResearcher);
//router.post('/signinResearcher', userCtrl.loginResearcher);



module.exports = router;
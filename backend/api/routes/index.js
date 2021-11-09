const express = require('express');
const router = express.Router();

const indexCtrl = require('../controllers/index');

//Route participants
router.get('/test', indexCtrl.test);


module.exports = router;
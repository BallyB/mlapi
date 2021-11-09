//On "require" les éléments nécessaires
const express = require('express');
const router = new express.Router();
const authuser = require('../middleware/authuser');
const predictionCtrl = require('../controllers/prediction');

router.post('/predict', authuser, predictionCtrl.getPrediction);

module.exports = router;
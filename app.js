const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const predictionRoutes = require('./routes/prediction');
const indexRoutes = require('./routes/index');

mongoose.connect('mongodb+srv://adrien:hWFXxP4GNaiY3Jsn@cluster0.ray79.mongodb.net/zama?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

const app = express();


//CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Parse JSON
app.use(bodyParser.json());

//Define user routes
app.use('/api/auth', userRoutes);
app.use('/api/prediction', predictionRoutes);
app.use('/api/index', indexRoutes);

module.exports = app;
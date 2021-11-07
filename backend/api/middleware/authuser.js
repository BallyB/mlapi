const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'FannyMarineFlorenceLisaEstefaniaMarusyaRebeccaAliceMarieHélèneJulietteMBSolangeBérengèreElsa');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      User.findOne({ _id: req.body.userId }).then(
        (user) => {
          if (!user) {
            return res.status(401).json({
              error: new Error('Non existing user!')
            });
          }else{
            next();
          }
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: new Error('Unable to find in database')
          });
        }
      );
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
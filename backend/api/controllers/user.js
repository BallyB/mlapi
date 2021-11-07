const bcrypt = require('bcrypt');
const User = require('../models/user');
//const Researcher = require('../models/researcher');
const jwt = require('jsonwebtoken');


exports.signupUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
      (hash) => {
          const user = new User({
            nickname: req.body.nickname,
            email: req.body.email,
            password: hash,

          });
          user.save().then(
              () => {
                  res.status(201).json({
                      message: 'User added successfully!'
                  });
              }
          ).catch(
              (error) => {
                  res.status(500).json({
                      error: error
                  });
              }
          );
      }
  );
};


exports.loginUser = (req, res, next) => {
  User.findOne({ email: req.body.email }).then(
      (user) => {
          if (!user) {
              return res.status(401).json({
                  error: new Error('User not found!')
              });
          }
          bcrypt.compare(req.body.password, user.password).then(
              (valid) => {
                  if (!valid) {
                      return res.status(401).json({
                          error: new Error('Incorrect password!')
                      });
                  }
                  payload = { user_id: user._id, kind: 'user' }
                  const token = jwt.sign({ userId: user._id },
                      'FannyMarineFlorenceLisaEstefaniaMarusyaRebeccaAliceMarieHélèneJulietteMBSolangeBérengèreElsa',
                      { expiresIn: '24h'},
                      { data: payload});
                  res.status(200).json({
                      userId: user._id,
                      user: user,
                      token: token
                  });
              }
          ).catch(
              (error) => {
                  res.status(500).json({
                      error: error
                  });
              }
          );
      }
  ).catch(
      (error) => {
          res.status(500).json({
              error: error
          });
      }
  );
};




exports.check_if_user = (req, res, next) => {
    if (token) {
        if (token.payload) {
            if (token.payload.user_id && token.payload.kind == "user") {
                result = Researcher.findOne({ _id: token.payload.user_id })
                if (result)
                    next();
                else
                    return res.status(401).json({ message: 'not authorized' });
            }
        }
    }
}
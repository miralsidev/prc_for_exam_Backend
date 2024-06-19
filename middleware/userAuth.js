// const jwt = require('jsonwebtoken');
// require('dotenv').config()
// const { Registration } = require('../models/Reg')

// const userAuth = async (req, res, next) => {
//     let token;
//     const { authorization } = req.headers;
//     console.log('Authorization', authorization);
//     if (authorization && authorization.startsWith('Bearer')) {
//         token = authorization.split(' ')[1]
//         const { userId } = jwt.verify(token, process.env.secret_key)
//         console.log('user =', userId);
//         req.user = await Registration.findById(userId)
//         console.log('req.userreq.user', req.user);
//         next()
//     }
// }
// module.exports = { userAuth }

const { Registration } = require("../models/Reg");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userAuth = async (req, res, next) => {
  console.log("drcfbhjkmlg");
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
    const { userId } = jwt.verify(token, process.env.secret_key);
    req.user = await Registration.findById(userId);
    console.log("req.user=", req.user);
  } else {
    return res.json({
      status: 400,
      message: "an authorization",
    });
  }
  next()
};
module.exports = { userAuth };

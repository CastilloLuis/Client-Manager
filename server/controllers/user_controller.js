const express = require('express');
const multer = require('multer');
const route = express.Router();
const session = require('express-session');
const ia = require('../middlewares/isAuth');
// USER SEED
const app_user = require('../models/seed/user');

let sess;

// LOGIN (-NOT LOGGED USERS-) ACTIONS
route.post('/home/register', (req, res) => {
    app_user.userRegister(req.body, res);
});

route.get('/home/appDataRegister/:i', (req, res) => { // GET DATA TO REGISTER USERNAME & PASSWORD
    app_user.userData(req.params, res);
});

route.post('/home/appRegister', (req, res) => {
    app_user.userAppRegister(req.body, res);
});

route.post('/home/login', (req, res) => {
    app_user.userLogin(req, res);
});
// LOGIN (-NOT LOGGED USERS-) ACTIONS

route.post('/paymentRegister', (req, res) => {
    app_user.userPaymentRegister(req.body, res);
});

route.get('/value', (req, res) => res.send({status: 500, msg: req.session}))

route.get('/logout', (req, res) => req.session.destroy());

module.exports = route; 
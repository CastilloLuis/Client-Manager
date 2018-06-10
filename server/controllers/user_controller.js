const express = require('express');
const multer = require('multer');
const route = express.Router();

// USER SEED
const app_user = require('../models/seed/user');

// USER ACTIONS
route.post('/register', (req, res) => {
    app_user.userRegister(req.body, res);
});

route.get('/appDataRegister/:i', (req, res) => {
    app_user.userData(req.params, res);
});

route.post('/appRegister', (req, res) => {
    app_user.userAppRegister(req.body, res);
});

route.post('/login', (req, res) => {
    app_user.userLogin(req.body, res);
});

route.post('/paymentRegister', (req, res) => {
    app_user.userPaymentRegister(req.body, res);
});



module.exports = route; 
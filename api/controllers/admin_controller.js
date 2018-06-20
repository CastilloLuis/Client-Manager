const express = require('express');
const route = express.Router();

// USER SEED
const app_user = require('../models/seed/user');
// PAYMENTS SEED
const app_admin = require('../models/admin/admin');

route.get('/getAllClients', (req, res) => {
    app_admin.getAllClients(req, res);
}); 

route.get('/getUsersPayments', (req, res) => {
    app_admin.getAllPayments(req, res);
});

route.post('/assistanceRegister', (req, res) => {
    app_admin.assistanceRegister(req.body, res);
});

route.get('/getAllAssistances', (req, res) => {
    app_admin.getAllAssistances(req, res);
});

route.post('/editUser', (req, res) => {
    app_admin.editUser(req.body, res);
})

module.exports = route;
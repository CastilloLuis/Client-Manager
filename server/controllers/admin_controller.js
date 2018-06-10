const express = require('express');
const route = express.Router();

// USER SEED
const app_user = require('../models/seed/user');
// PAYMENTS SEED
const app_admin = require('../models/admin/admin');

route.get('/getAllClients', (req, res) => {
    app_admin.getAllClients(req, res);
});

module.exports = route;
const express = require('express');
const mongoose = require('mongoose');
const User = require('../../config/schemas/user');

mongoose.createConnection('mongodb://localhost/clients-control');

const getAllClients = (req, res) => {
    console.log(req);
    User.find((err, docs) => {
        if(err) {
            return res.send({status: 500, msg: 'Error while getting all the clients :('}).json();
        } else {
            return res.send({status: 200, msg: 'The data was recolected successfully!', data: docs});
        }
    })
}


module.exports.getAllClients = (req, res) => getAllClients(req, res);
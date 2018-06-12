const express = require('express');
const mongoose = require('mongoose');
const User = require('../../config/schemas/user');
const Payments = require('../../config/schemas/payments');
const Assistance = require('../../config/schemas/asssistance');

mongoose.createConnection('mongodb://localhost/clients-control');

/* GET DATE */
const today = new Date();
const d = today.getDate();
const m = today.getMonth()+1;
const y = today.getFullYear();
const currentdate = `${m}-${d}-${y}`;
/* GET DATE */

const getAllClients = (req, res) => {
    //console.log(req);
    User.find((err, docs) => {
        if(err) {
            return res.send({status: 500, msg: 'Error while getting all the clients :('}).json();
        } else {
            return res.send({status: 200, msg: 'The data was recolected successfully!', data: docs});
        }
    });
}

const getAllPayments = (req, res) => {
    User.find()
        .populate('payments._id')
        .exec((err, docs) => {
            if (err) {
                return res.send({status: 500, msg: 'Error while getting the payments...'}).json();
            } else {
                for(let d of docs) {
                    d['password'] = undefined;
                }
                return res.send({status: 200, data: docs}).json();
            }
        });
}

/* ASSISTANCE */

const assistanceRegister = (req, res) => {
    let user_assistance = new Assistance({
        user_id: req.id,
        user_identification: req.iden,
        date: currentdate
    });
    user_assistance.save()
        .then((data) => res.send({status: 200, msg: 'Assistance registered successfully!'}))
        .catch((err) => res.send({status: 500, msg: 'Error while saving assistance... try again.'}))
}

const getAllAssistances = (req, res) => {
    Assistance.find((err, docs) => {
        if (err) {
            return res.send({status: 500, msg: 'Oops, we couldnt get all the assistances'});
        } else {
            if(!docs) {
                return res.send({status: 500, msg: 'Oops, assistances is empty'});
            } else {
                return res.send({status: 200, data: docs});
            }
        }
    });
}

const editUser = (req, res) => {
    let conditions = {identification: req.iden};
    let updateop = {name: req.name, email: req.email, phone: req.phone, user_picture: req.pictureUrl}
    User.findOneAndUpdate(conditions, updateop, (err, docs) => {
        if (err) {
            return res.send({status: 200, msg: 'Error while updating'});
        } else {
            if(!docs) {
                return res.send({status: 500, msg: 'The identification given does not exists on our database... Check!'});
            } else {
                return res.send({status: 200, msg: 'User data updated successfully!', data: docs});
            }
        }
    });
}

module.exports.getAllClients = (req, res) => getAllClients(req, res);
module.exports.getAllPayments = (req, res) => getAllPayments(req, res);
module.exports.assistanceRegister = (req, res) => assistanceRegister(req, res);
module.exports.getAllAssistances = (req, res) => getAllAssistances(req, res);
module.exports.editUser = (req, res) => editUser(req, res);
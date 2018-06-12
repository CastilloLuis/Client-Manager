const express = require('express');
const mongoose = require('mongoose');
const User = require('../../config/schemas/user');
const Payment = require('../../config/schemas/payments');
const isAuth = require('../../middlewares/isAuth.js');
const md5 = require('apache-md5');
const session = require('express-session');;

mongoose.connect('mongodb://localhost/clients-control');

/* GET DATE */
const today = new Date();
const d = today.getDate();
const m = today.getMonth()+1;
const y = today.getFullYear();
const currentdate = `${m}-${d}-${y}`;
/* GET DATE */

const userRegister = (req, res) => {
    let app_user = new User({
        name: req.name,
        email: req.email,
        phone: req.phone,
        identification: req.ci,
        registration_date: req.date,
        user_picture: '../assets/' + req.pictureUrl,
        username: req.ci, // USERNAME: PROVISIONAL
        password: req.ci,  // PASSWORD: PROVISIONAL
        status: {
            active: true,
            description: 'No deudas pendientes'
        }
    });
    app_user.save()
        .then((data) => console.log(data))
        .catch((err) => console.log('error saving the user'));
}

const userAppRegister = (req, res) => {
    let conditions = {identification: req.ci};
    let updateOptions = {username: req.username, password: md5(req.password)}
    console.log(req.password)
    console.log(conditions);
    console.log(updateOptions);
    User.findOneAndUpdate(conditions, {$set: updateOptions}, (err, ok) => {
        if(err) {
            return res.send({status: 500, msg: "Could not register the user"}).json();
        } else {
            console.log('shit')
            return res.send({status: 200, msg: "Registration successfull!!"}).json();
        }
    })
}

const userLogin = (req, res) => {
    let sess;
    let conditions = {
        username: req.body.username
    }
    User.findOne(conditions, (err, docs) => {
        console.log(docs)
        if (err) {
            //console.log(err);
            return res.send({status: 500, msg: 'An error ocured while connecting to data base...'}).json();
        } else {
            if(docs === null ) {
                return res.send({status: 500, msg: 'Username does not exists...'}).json();
            } else {
                console.log(docs)
                if (isAuth.comparePassword(req.body.password, docs.password)) {
                   sess = req.session;
                   if(conditions.username === 'master'){sess.admin = true;}                   
                   sess.id = docs._id;
                   sess.username = docs.username;
                   sess.identification = docs.identification;
                    return res.send({status: 200, 'msg': 'Welcome back ' + docs.username}).json();
                } else {
                    return res.send({status: 500, msg: 'Password incorrect, please try again'}).json();
                }
            }
        }
    });
}

const userData = (req, res) => {
    let conditions = {identification: req.i};
    User.findOne(conditions, (err, docs) => {
        if(err) {
            return res.send({status: 500, msg: "Error while finding user..."}).json();
        } else {
            if(!docs) {
                return res.send({status: 500, msg: "Identification does not exists in our data base... Please check!"}).json();
            } else {
                docs['password'] = undefined;
                return res.send({status: 200, data: docs}).json();
            }
        }
    });
}

const userPaymentRegister = (req, res) => {
    let conditions = {_id: mongoose.Types.ObjectId(req.id)};
    let user_payment = new Payment({
        user_id: req.id,
        amount: req.amount,
        type: req.ptype,
        payment_ref: req.pref,
        date: currentdate
    });
    //res.send(user_payment)
    //console.log(user_payment)
    user_payment.save()
        .then((data) => {
            console.log(data)
            if (data) {
                User.findByIdAndUpdate(conditions, {
                        $push: {
                            payments: {
                                _id: mongoose.Types.ObjectId(data['_id']),
                                current_date: currentdate
                            }
                        }
                    }, {
                        safe: true,
                        upsert: true
                    },
                    (err, docs) => {
                        if (err) {
                            return res.send({
                                status: 500,
                                msg: 'An error occured while this action... please try later :('
                            })
                        } else {
                            return res.send({
                                status: 200,
                                msg: 'Payment registered successfully!!',
                                data: docs
                            })
                        }
                    })
            }
        })
        .catch((err) => res.send({status: 500, msg: 'The payment was not registered. Please, try again.'}))
}

module.exports.userRegister = (req, res) => userRegister(req, res);
module.exports.userAppRegister = (req, res) => userAppRegister(req, res);
module.exports.userLogin = (req, res) => userLogin(req, res);
module.exports.userData = (req, res) => userData(req, res);
module.exports.userPaymentRegister = (req, res) => userPaymentRegister(req, res);

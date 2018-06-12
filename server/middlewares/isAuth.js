const express = require('express');
const md5 = require('apache-md5');

let sess;

const comparePassword = (loginpw, dbpw) => ( (md5(loginpw, dbpw)==dbpw) ? true : false );

const isAuth = (req, res) => {
    sess = req.session;
    return new Promise((res, rej) => ((sess.username) ? res(true) : rej(false)));
}

module.exports.comparePassword = (loginpw, dbpw) => comparePassword(loginpw, dbpw);
module.exports.isAuth = (req, res) => isAuth(req, res);
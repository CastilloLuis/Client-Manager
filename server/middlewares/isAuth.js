const express = require('express');
const md5 = require('apache-md5');

const comparePassword = (loginpw, dbpw) => ( (md5(loginpw, dbpw)==dbpw) ? true : false );

module.exports.comparePassword = (loginpw, dbpw) => comparePassword(loginpw, dbpw);
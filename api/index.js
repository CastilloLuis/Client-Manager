const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// Routes
const userRoute  = require('./controllers/user_controller.js');
const adminRoute = require('./controllers/admin_controller.js');
// Mongoose connection :)
mongoose.connect('mongodb://localhost/clients-control')
    .then(() => console.log('Connection succesfull!'))
    .catch(() => console.log('Error with the principal connection :('))

// cors, json, images, urencoded
app.use(cors());
app.use(express.json());
app.use(express.static('assets'));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret:'admin',
    resave: false,
    saveUninitialized: false
    }
));
/* initilize static files
app.use('/views', express.static(__dirname + '/public/views'));*/

// Defining our routes :)
app.use('/user', userRoute);
app.use('/admin', adminRoute);
  
let server = app.listen(3000, () => {
    let port = server.address().port;
    console.log(`THE SERVER IS RUNNING ON PORT # ${port}`);
});
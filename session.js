/**
 * Created by ori on 4/30/2017.
 */
var express = require('express');
var app = express();
var session = require('express-session');
var sess_conf = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000, secure: false }
}
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess_conf.cookie.secure = true // serve secure cookies
}

session.getConf = function() {
    return sess_conf;
}
session.addItem = function(req, name, data) {
    req.session[name] = data;
    // res.redirect('/');
}
session.getItem = function(req, name, data) {
    return req.session[name];
    // res.redirect('/');
}
session.hasItem = function(req, name) {
    if(req.session[name]) {
        return true;
    } else {
        return false;
    }
}
session.removeItem = function(req, name) {
    req.session[name] = null;
    // res.redirect('/');
}
session.destroy = function(req, res) {
    req.session.destroy(function(err) {
        // cannot access session here
    })
}
session.reload = function(req, res) {
    req.session.reload(function(err) {
        // session updated
    })
}
session.save = function(req, res) {
    req.session.save(function(err) {
        // session saved
    })
}
session.getId = function(req, res) {
    return req.session.id;
}
session.getSession = function(req, res) {
    return req.session.cookie;
}
module.exports = session;

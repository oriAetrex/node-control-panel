/**
 * Created by ori on 4/13/2017.
 */

var session = require('./../../../session.js');
var storesModel = require('../mssql/models/storesModel.js');
exports.getAllStores = function(req, res) {
    storesModel.getAllStores(function(data) {
        res.json({ data: data });
    })
}

exports.login = function(req, res) {
    var email = req.body.username;
    var password = req.body.password;
    storesModel.login(email, password, function(data) {
        if(!data.err) {
            session.addItem(req, 'currentStore', JSON.stringify(data.store));
        }
        res.json({ data: data });
    })
}

exports.logout = function(req, res) {
    session.destroy(req, res);
    // session.removeItem(req, 'currentStore');
    res.json({ err : 0 });
}

exports.ajax_login_from_session = function(req, res) {
    var data = {
        err : 1,
        login : false
    }
    if(session.hasItem(req, 'currentStore')) {
        data.err = 0;
        data.login = true;
        data.store = JSON.parse(session.getItem(req, 'currentStore'));
    }
    res.json({data : data});
}

exports.checkSession = function(req, res) {
    // var path = req.url;
    var path = '/';
    console.log(path);
    if(!session.hasItem(req, 'currentStore')) {
        res.json({ data: {err : 1, errMessage : 'please login <a href="#/login?returnUrl=' + path + '">Login</a>'} });
        return;
    }
}

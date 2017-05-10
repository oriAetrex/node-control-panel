/**
 * Created by ori on 4/13/2017.
 */
var connectionProvider = require('./../connection/msSqlConnectionProvider.js');
var tableName = 'Stores';
var ModelClass = require('./Model');
ModelClass.Model.setTable(tableName);
var storesModel = {
    getAllStores : function(callback) {
        ModelClass.Model.getAll(callback);
    },
    login : function(email,password,callback) {
        console.log('login');
        connectionProvider.msSqlConnectionProvider.msSqlConnection(function (request) {
            var obj = {
                err : 0 ,
                errMessage : ''
            };
            // query to the database and get the records
            request.query("SELECT * from " + tableName + " WHERE Email = '" + email + "' AND Password = '" + password + "'", function (err, rows) {
            // request.query("SELECT * FROM Stores WHERE Email = 'gilr@aetrex.co.il' AND Password = '1'", function (err, rows) {

                if (err) console.log(err)

                // send records as a response
                if(rows.recordset.length) {
                    obj.store = rows.recordset[0];
                } else {
                    obj.err = 1;
                    obj.errMessage = 'Store Not Exist';
                }
                callback(obj);
                connectionProvider.msSqlConnectionProvider.closeMsSqlConnection();
            });
        });
    },
};

exports.getAllStores = storesModel.getAllStores;
exports.login = storesModel.login;
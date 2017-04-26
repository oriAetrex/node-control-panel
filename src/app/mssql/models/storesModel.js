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
};

exports.getAllStores = storesModel.getAllStores;
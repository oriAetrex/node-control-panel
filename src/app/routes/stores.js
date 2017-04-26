/**
 * Created by ori on 4/13/2017.
 */

var storesModel = require('../mssql/models/storesModel.js');
exports.getAllStores = function(req, res) {
    storesModel.getAllStores(function(data) {
        res.json({ data: data });
    })
}

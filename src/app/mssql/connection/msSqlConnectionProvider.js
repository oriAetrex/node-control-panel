/**
 * Created by ori on 4/13/2017.
 */

var mssql = require('mssql');
var msSqlConnectionString = require('./msSqlConnectionString.js')
var msSqlConnectionProvider = {
    msSqlConnection : function (callback) {
        mssql.connect(msSqlConnectionString.msSqlConnection.connectionString.development,function(err) {
            if (err) console.log(err);

            // create Request object
            var request = new mssql.Request();
            callback(request);
        })
    },
    closeMsSqlConnection : function() {
        mssql.close();
        // return currentConnection;
    }
};

module.exports.msSqlConnectionProvider = msSqlConnectionProvider;
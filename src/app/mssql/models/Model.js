/**
 * Created by ori on 4/13/2017.
 */
var connectionProvider = require('./../connection/msSqlConnectionProvider.js');
var tableName = '';
var Model = {
    getAll : function(callback) {
        console.log('getAll');
        connectionProvider.msSqlConnectionProvider.msSqlConnection(function (request) {
            var obj = {
                err : 0 ,
                errMessage : ''
            };
            // query to the database and get the records
            request.query('select * from ' + tableName + ' ', function (err, rows) {

                if (err) console.log(err)

                // send records as a response
                // console.log(rows);
                if(rows) {
                    obj.stores = rows.recordset;
                }
                callback(obj);
                connectionProvider.msSqlConnectionProvider.closeMsSqlConnection();
            });
        });
        // var sql = require("mssql");
        //
        // // config for your database
        // var config = {
        //     server : 'localhost', // GIL-DESK\\LOCAL
        //     user : 'sa',
        //     password : 'honxr650',
        //     database : 'AetrexCloud',
        // };
        //
        // // connect to your database
        // sql.connect(config, function (err) {
        //
        //     if (err) console.log(err);
        //
        //     // create Request object
        //     var request = new sql.Request();
        //     var obj = {
        //         err : 0 ,
        //         errMessage : ''
        //     };
        //     // query to the database and get the records
        //     request.query('select * from Stores', function (err, rows) {
        //
        //         if (err) console.log(err)
        //
        //         // send records as a response
        //         console.log(rows);
        //         if(rows) {
        //             obj.stores = rows.recordset;
        //         }
        //         callback(obj);
        //         sql.close();
        //
        //     });
        // });
    },
    insert : function(sqlStatement, callback) {
        connectionProvider.msSqlConnectionProvider.msSqlConnection(function (request) {
            var obj = {
                err : 0 ,
                errMessage : ''
            };
            // query to the database and get the records
            request.query(sqlStatement, function (err, rows) {

                if (err) console.log(err)

                // send records as a response
                // console.log(rows);
                if(rows) {
                    obj.stores = rows.recordset;
                }
                callback(obj);
                connectionProvider.msSqlConnectionProvider.closeMsSqlConnection();
            });
        });
    },
    update : function(sqlStatement, callback) {
        connectionProvider.msSqlConnectionProvider.msSqlConnection(function (request) {
            var obj = {
                err : 0 ,
                errMessage : ''
            };
            // query to the database and get the records
            request.query(sqlStatement, function (err, rows) {

                if (err) console.log(err)

                // send records as a response
                // console.log(rows);
                if(rows) {
                    obj.stores = rows.recordset;
                }
                callback(obj);
                connectionProvider.msSqlConnectionProvider.closeMsSqlConnection();
            });
        });
    },
    delete : function(sqlStatement,callback) {
        connectionProvider.msSqlConnectionProvider.msSqlConnection(function (request) {
            var obj = {
                err : 0 ,
                errMessage : ''
            };
            // query to the database and get the records
            request.query(sqlStatement, function (err, rows) {

                if (err) console.log(err)

                // send records as a response
                // console.log(rows);
                if(rows) {
                    obj.stores = rows.recordset;
                }
                callback(obj);
                connectionProvider.msSqlConnectionProvider.closeMsSqlConnection();
            });
        });
    },
    setTable: function(table) {
        tableName = table;
    },
    // create : function() {
    //     var connection = connectionProvider.mysqlConnectionProvider.getSqlConnection();
    //     var obj = {
    //         err : 0 ,
    //         errMessage : ''
    //     };
    //     var sqlStatement = "CREATE TABLE IF NOT EXISTS " + tableName + " (" +
    //         "`id` int(10) unsigned NOT NULL AUTO_INCREMENT," +
    //         "`email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL," +
    //         "PRIMARY KEY (`id`)," +
    //         "UNIQUE KEY `unique` (`email`)" +
    //         ") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
    //     if(connection) {
    //         connection.query(sqlStatement, function(err, result) {
    //             if (err) {
    //                 console.log(err);
    //                 obj.err = 1;
    //                 obj.errMessage = err;
    //             } else {
    //                 if(!result.warningCount) {
    //                     console.log(result);
    //                     console.log(tableName + ' Table created')
    //                 }
    //             };
    //         })
    //     }
    //     connectionProvider.mysqlConnectionProvider.closeSqlConnection(connection);
    // }
};

exports.Model = Model;

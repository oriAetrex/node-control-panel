/**
 * Created by ori on 4/13/2017.
 */

var msSqlConnectionString = {
    connectionString : {
        development : {
            server : 'localhost', // GIL-DESK\\LOCAL
            user : 'sa',
            password : 'honxr650',
            database : 'AetrexCloud',
            // port: 1433,
            // debug: false,
            // options: {
            //     encrypt: false // Use this if you're on Windows Azure
            // }
        },
        test : {
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'angular2'
        },
        production : {
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'angular2'
        }
    }
};

exports.msSqlConnection = msSqlConnectionString;

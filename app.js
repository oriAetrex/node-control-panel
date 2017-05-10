var express = require('express');
var session = require('./session.js');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var stores = require('./src/app/routes/stores.js');

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
// if(app.get('env') == 'development') {
//     app.use(errorHandler());
// }
app.use(session(session.getConf()));
app.use('/public',express.static(__dirname + '/src/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app/conf', express.static(__dirname + '/src/app/conf'));
// app.use('/systemjs-angular-loader.js', express.static(__dirname + '/systemjs-angular-loader.js'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
})
router.get('/test', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        server : 'GIL-DESK\\LOCAL',
        user : 'sa',
        password : 'honxr650',
        database : 'AetrexCloud',
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Stores', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.json(recordset);
            sql.close();
        });
    });
});
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
router.post('/ajax_login', stores.login);
router.post('/ajax_logout', stores.logout);
router.post('/ajax_login_from_session', stores.ajax_login_from_session);

router.get('/getAllStores', stores.getAllStores);


addToHeader = function (req, res, next) {
    console.log("add to header called ... " + req.url);
    // res.header('charset', 'utf-8')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Content-Type', 'application/json');
    next();
}

app.use('/api', addToHeader, router);
var server = app.listen(port, errCallback);

function errCallback(err) {
    var host = server.address().address;
    var prot = server.address().port;
    console.log('app listening at http://%s:%s', host, port)
    console.log('running server on port - ' + port);
}

function errorHandler (err, req, res, next) {
    // if (res.headersSent) {
    //     return next(err)
    // }
    // res.status(500)
    // res.render('error', { error: err })
}


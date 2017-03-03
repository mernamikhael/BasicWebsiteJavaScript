//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var mongoosePaginate = require('mongoose-paginate');
var multer = require('multer');
var DB_URI = "mongodb://localhost:27017/merna";

var app = express();

app.set('view engine', 'ejs');

// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));
app.use('/public',express.static('public'))
app.use(session({secret: 'ssshhhhh'}));
mongoose.connect(DB_URI);
var thedb = mongoose.connection;
thedb.on('error', console.error.bind(console, 'check mongo deamon :s'));
thedb.once('open', function(){console.log('connected to merna db')});
app.use(router);
// start the server
app.listen(8080, function(){console.log("server is listening on port 8080");})
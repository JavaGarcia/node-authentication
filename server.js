// server.js
// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var configDB = require('./config/database.js');
// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database
require('./config/passport')(passport); // pass passport for configuration
app.configure(function() {
// set up our express application
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.cookieParser()); // read cookies (needed for auth)
    app.use(express.bodyParser()); // get information from html forms
    app.set('view engine', 'ejs'); // set up ejs for templating
    // required for passport
    app.use(express.session({ secret: 'digiware-0p3r4d0r3s' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session
});
// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
// launch ======================================================================
app.listen(port,process.env.OPENSHIFT_NODEJS_IP,function(){
    console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), process.env.OPENSHIFT_NODEJS_IP, port);
});
console.log('The magic happens on port ' + port);
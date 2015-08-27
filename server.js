// server.js
// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
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
<<<<<<< HEAD
    app.use(express.session({ secret: 'muys3cr3t01asd' })); // session secret
=======
    app.use(express.session({ secret: 'whattheh3llisth1secret' })); // session secret
>>>>>>> 7298a595811ed2de7096fbe2cc5c1a9d49510c68
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session
});
// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
// launch ======================================================================
app.listen(port,ip,function(){
    console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), ip, port);
});
console.log('The magic happens on port ' + port);

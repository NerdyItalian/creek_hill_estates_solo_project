var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local').Strategy;

var routes = require('./routes/index');
var register = require('./routes/register');
var home = require('./routes/home');
var users = require('./routes/users');
var neighbors = require('./routes/neighbors');
var sales = require('./routes/sale');
var User = require('./models/userSchema');
var Neighbor = require('./models/neighborSchema');
var Sale = require('./models/saleSchema');



var app = express();

//Mongo Setup
var mongoURI = "mongodb://localhost:27017/creek_hill_estates_2";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
    console.log('mongodb connection error', err);
});

MongoDB.once('open', function(){
    console.log('mongodb connection open');
});

app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    key: 'user',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: 60000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err) done(err);
        done(null, user);
    });
});

passport.use('local', new localStrategy({
    passReqToCallback: true,
    usernameField: 'username'
    },
        function(req, username, password, done){
        User.findOne({ username: username}, function(err, user){
            if (err) throw err;
            if (!user)
                return done(null, false, {message: 'Incorrect username and/or password.'});

            user.comparePassword(password, function(err, isMatch){
                if (err) throw err;
                if(isMatch)
                    return done(null, user);
                else
                    done(null, false, {message: 'Incorrect username and/or password.'});
        });
    });
}));


app.use('/', routes);
app.use('/register', register);
app.use('/home', home);
app.use('/users', users);
app.use('/neighbors', neighbors);
app.use('/sale', sales);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log(err, req.url);
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        next(err);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    next(err);
});


module.exports = app;
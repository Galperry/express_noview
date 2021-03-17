var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var puppiesRouter = require('./routes/puppies');
var contactRouter = require('./routes/contact');
var dataRouter = require('./routes/data');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/puppies', puppiesRouter);
app.use('/contact', contactRouter);
app.use('/data', dataRouter);


module.exports = app;

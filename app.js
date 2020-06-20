// replace all var with const or let

// TypeScript import syntax
// import { Express } from 'express';

// JS import syntax
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const omdbRouter = require('./routes/omdb');
const demoRouter = require('./routes/demo');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// express middlewares
// REST call goes through a waterfall of functions. Pipeline

app.use(cors());  // enable cross-origin resource sharing (CORS) so that angular server can call express
app.use(logger('dev'));   // logging the request endpoint
app.use(express.json());  // parse the body of the request
app.use(express.urlencoded({ extended: false })); // parse the url of the request
app.use(cookieParser());  // parse the cookie
app.use(express.static(path.join(__dirname, 'public')));  // static folder path to server files

// we can access the static files by going to address in public dir
// http://localhost:3000/stylesheets/style.css

// URL patterns
// using router we can break the funtions in multiple files
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/omdb', omdbRouter);
app.use('/demo', demoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

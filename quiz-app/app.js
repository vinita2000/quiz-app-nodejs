const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
require('./db/connection');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const questionRoutes = require('./routes/question');
const quizRoutes = require('./routes/quiz');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoutes);
app.use(categoryRoutes);
app.use(questionRoutes);
app.use(quizRoutes);

module.exports = app;

const express = require('express');
const app = express();
const path = require('path')

const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());
app.use(cookieParser());


//Import all routes
const products = require('./routes/products');
const auth = require('./routes/auth');

//Middleware to handle errors
app.use(errorMiddleware);

app.use('/api/v1', products)
app.use('/api/v1', auth)

module.exports = app;
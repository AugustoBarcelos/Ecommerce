const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());
//Import all routes
const products = require('./routes/products');

//Middleware to handle errors
app.use(errorMiddleware);

app.use('/api/v1', products)
module.exports = app;
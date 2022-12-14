const express = require('express');
const app = express();
const path = require('path')
const dotenv = require('dotenv');


const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const cloudinary = require('cloudinary');

const errorMiddleware = require('./middlewares/errors');

//Setting up config file
dotenv.config({ path: '../backend/config/config.env' })

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());


//Setting up cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

console.log(`The cloudinary api key is: ${process.env.CLOUDINARY_API_KEY}`);

//Import all routes
const products = require('./routes/products');
const auth = require('./routes/auth');
const order = require('./routes/order');

//Middleware to handle errors
app.use(errorMiddleware);

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', order)

module.exports = app;
const app = require('./app');
const dotenv = require('dotenv');

const connectDatabase = require('./config/database');

//Handle Uncaught exceptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.stack}`);
  console.log('Shutting down server due to uncayght exception');
  process.exit(1);
})



//Setting up config file
dotenv.config({ path: '../backend/config/config.env' })


//Connecting to DB
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server Start on PORT: ${process.env.PORT} in process ${process.env.NODE_ENV}`);
})
// Handle unhnadled promise rejections
process.on('unhandledRejection', err => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandle Promisse rejection`);
  server.close(() => {
    process.exit(1);
  })
})

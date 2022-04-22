const express = require("express");
const app = express();
const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('ekttDB', 'root', '123456789', {
  host: 'localhost',
  dialect: "mysql"
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// const seller = require('./models/Seller');

// app.listen(3000, () => {
//     console.log("hola");
// });

// sequlize.sync().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });
const express = require('express');
const routes = require('./routes');
// import sequelize connection
const { Sequelize, Sequelize } = require('sequelize');
const {Product, Category, Tag, ProductTag } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

const Sequelize = require('./config/connection');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

app.get('/', (req, res) => {
  res.send('welcome to the API');
});
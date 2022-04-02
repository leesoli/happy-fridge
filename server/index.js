const express = require('express');
const server = express();
var bodyParser = require('body-parser');
const port = 3000;
const path = require('path');
const config = require('../config-copy')
const axios = require('axios');

server.use(express.static(path.join(__dirname, '../client/dist')))

server.get('/api/recipes', (req, res) => {
  console.log('req received')
  // console.log('request', req)
  // axios.get(config.recipeListUrl, {
  //   params: {
  //     apiKey: config.apiKey,
  //     includeIngredients: req.query.ingredients,
  //     sort: "min-missing-ingredients",
  //     ignorePantry: true,
  //     number: 8
  //   }
  // })
})


server.listen(port, () => {
  console.log('listening to port ', port)
})
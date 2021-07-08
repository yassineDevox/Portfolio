const express = require("express");
const expressGraphQL = require("express-graphql");
const bodyParser = require("body-parser");
// const models = require("./models");
// const schema = require("./schemas/schema");

const app = express();
const db =require('./Utils/db');

const MONGO_URI = "mongodb://localhosl:27017/ciriculumDB";
// Connect to Mongo on start
db.connect(MONGO_URI, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
  }
})

// app.use(bodyParser.json());
// app.use('/graphql', expressGraphQL({
//   schema,
//   graphiql: true
// }));

// //create the bundle js 
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config.js');
// app.use(webpackMiddleware(webpack(webpackConfig)));

// module.exports = app;

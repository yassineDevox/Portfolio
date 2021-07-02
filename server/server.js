const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const models = require("./models");
const schema = require("./schemas/schema"); 

const app = express();

//Replace with your mongoLab URI 
//Create instance and get the uri from the website (mlab.com)
//Do make sure you're using a valid email address 
//Pick amazon service and vergin for a free try
//Connect it via driver & create a database user(to use his credentials with RO )
const MONGO_URI = "mongodb://<dbUser>:<dbPassword>@ds0214145.mlab.com:21189/dbName";
if(!MONGO_URI) 
throw new Error('You must provide a MongoLab URI');

//setup mongoose
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
        .once('open',()=> console.log('Connected to MongoLab'))    
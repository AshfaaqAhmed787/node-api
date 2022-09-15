const mongoose = require('mongoose');
const environment = require('../environment');

mongoose.Promise = global.Promise;

//mongoose.connect(environment.mongoDbConnectionString, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
mongoose.connect(environment.mongoDbConnectionString, {  useNewUrlParser: true })
    .then(() => {
        console.log('DB connected');
    }).catch(err => {
        console.log(err);
    });

module.exports = {
   
    members: require("../models/member.model"),
   
};

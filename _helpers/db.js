const mongoose = require("mongoose");
const environment = require("../environment");

mongoose.Promise = global.Promise;

mongoose.connect(environment.mongoDbConnectionString, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }).then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  members: require("../models/member.model"),
  customers:require("../models/customer.model"),
  state:require("../models/state.model"),
  city:require("../models/city.model")
};

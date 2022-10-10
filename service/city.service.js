const db = require("../_helpers/db");
const dbCity = db.city;

async function add(req, res) {
  var existsMatch = await dbCity.find({ mobile: req.body.name });
  if (existsMatch !== null && existsMatch.length > 0) {
    return { responseCode: -1 };
  }

  var result = await dbCity(req.body).save();

  //smsObj.SendOtp(req.body.mobile);
  return { data: result, responseCode: 1, responseMessage: "success" };
}
async function update(req, res, next) {
  var result = await dbCity.updateOne(
    { id: req.params.id },
    req.body,
    function (err) {
      if (err) return next(err);
    }
  );
  return { data: result, responseCode: 1, responseMessage: "Updated" };
}

async function remove(req, res, next) {
  let _id = parseInt(req.params.id);

  var result = await dbCity
    .deleteOne({ id: _id })
    .then(function () {
      // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
  return { data: result, responseCode: 1, responseMessage: "Deleted" };
}
async function read(req) {
  var result = await dbCity.findOne({ id: req.params.id });
  return { data: result };
}
async function readByState(req) {
  
  var result = await dbCity.find({ stateId: req.params.stateId });
  return { data: result };
}
async function readAll(req) {
  var result = await dbCity.find();
  return { data: result };
}

module.exports = {
  add,
  update,
  read,
  readAll,
  remove,
  readByState
};

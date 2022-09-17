const db = require("../_helpers/db");
const dbMembers = db.members;
const smsObj = require("../_helpers/sms");

async function add(req, res) {
  var existsMatch = await dbMembers.find({ mobile: req.body.mobile });
  if (existsMatch !== null && existsMatch.length > 0) {
    return { responseCode: -1 };
  }

  var result = await dbMembers(req.body).save();

  //smsObj.SendOtp(req.body.mobile);
  return { data: result, responseCode: 1, responseMessage: "success" };
}
async function update(req, res, next) {
  var result = await dbMembers.updateOne(
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

  var result = await dbMembers
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
  var result = await dbMembers.findOne({ id: req.params.id });
  return { data: result };
}

async function readAll(req) {
  var result = await dbMembers.find();
  return { data: result };
}

module.exports = {
  add,
  update,
  read,
  readAll,
  remove,
};

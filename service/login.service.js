const db = require("../_helpers/db");
const dbMembers = db.members;

async function validate(req, res) {
  var result = await dbMembers.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  console.log(result);
  if (result) {
    return {
      responseCode: 1,
      responseMessage: "success",
      auth: result,
    };
  } else {
    return {
      responseCode: -1,
      responseMessage: "Member Not Found",
      auth: null,
    };
  }
}
module.exports = {
  validate,
};

const db = require("../_helpers/db");
const dbMembers = db.members;

async function validate(req, res) {

  var result = await dbMembers.findOne({ mobile: req.body.data.email });
  console.log(result);
  if (result) {
    return { responseCode: 1, responseMessage: "success" };
    
  } else {
    return {responseCode: -1, responseMessage: "Member Not Found" };
  }

  
}
module.exports = {
  validate,
};

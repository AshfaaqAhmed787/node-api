const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const Member = new Schema({
  id: { type: String, unique: true, min: 1 },
  name: {
    type: String,
    required: true,
    max: [127, "Max Length is 127 characters"],
  },
  mobile: { type: String, max: [10] },

  email: { type: String },
address:{type: String},
  password: { type: String },
});

Member.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID("members", this, next);
});

module.exports = mongoose.model("members", Member);

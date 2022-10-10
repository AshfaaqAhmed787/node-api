const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const State = new Schema({
  id: { type: String, unique: true, min: 1 },
  name: {
    type: String,
    required: true,
    max: [127, "Max Length is 127 characters"],
  }
});

State.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelID("state", this, next);
});

module.exports = mongoose.model("state", State);

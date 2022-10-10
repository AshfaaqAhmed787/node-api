const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const Customer = new Schema({
  id: { type: String, unique: true, min: 1 },
  memberId: { type: Number },
  name: {
    type: String,
    required: true,
    max: [127, "Max Length is 127 characters"],
  },
  referenceBy: { type: String },
  mapLocation: { type: String },
  lattitude: { type: String },
  longitude: { type: String },
  registerDate: { type: String },
  mobile: { type: String },
  addressLine1: { type: String },
  addressLine2: { type: String },
  landmark: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  email: { type: String }

});

Customer.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelID("customers", this, next);
});

module.exports = mongoose.model("customers", Customer);

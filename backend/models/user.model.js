var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String }
  },
  { timestamps: { createdAt: "createdAt" } }
);

module.exports = mongoose.model("User", userSchema);

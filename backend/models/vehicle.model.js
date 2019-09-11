var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
  name: { type: String, default: "" },
  reg: { type: String, default: "" }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);

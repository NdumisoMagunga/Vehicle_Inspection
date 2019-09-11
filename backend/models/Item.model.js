var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: { type: String, default: "" },
  status: { type: String, default: "" },
  comment: { type: String, default: "" }
});

module.exports = mongoose.model("Item", itemSchema);

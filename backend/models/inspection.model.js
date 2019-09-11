var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var inspectiondSchema = new Schema(
  {
    vehicle: { type: Schema.Types.ObjectId, ref: "Vehicle" },
    item: { type: Schema.Types.ObjectId, ref: "Item" },
    created_by: { type: Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: { createdAt: true } }
);

module.exports = mongoose.model("Inspection", inspectiondSchema);

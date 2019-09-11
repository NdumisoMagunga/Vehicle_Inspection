var Inspection = require("../models/inspection.model");

const _ = require("lodash");

module.exports = function(router, async) {
  router.get('/api/inspection', function(req, res, next){
    Inspection
    .find()
    .populate('created_by')
    .populate('vehicle')
    .populate('item')
    .sort('-createdAt')
    .exec(function(err, inspections){
        if(err){return next(err);}
        res.json(inspections);
    });
});


  router.get("/api/inspection/:id", function(req, res, next) {
    Inspection.find({ idNumber: req.params.id }, function(err, inspection) {
      if (err) {
        return next(err);
      }
      res.json(inspection);
    });
  });

  router.post("/api/inspection", function(req, res, next) {
    var new_inspection = new Inspection({
      created_by: req.body.userId,
      vehicle: req.body.vehicleId,
      item: req.body.itemId
    });

    new_inspection.save(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ info: "success" });
    });
  });

  router.put("/api/inspection/:id", (req, res, next) => {
    Inspection.findById(req.params).exec((err, inspection) => {
      if (err) {
        return next(err);
      }
      _.merge(inspection, req.body);
      inspection.save(err => {
        if (err) {
          return next(err);
        }
        res.json({ response: "inspection updated" });
      });
    });
  });

  router.delete("/api/inspection/:id", (req, res, next) => {
    Inspection.findByIdAndRemove(req.params.id, err => {
      if (err) {
        return next(err);
      }
      res.json({ response: "inspection removed" });
    });
  });
};

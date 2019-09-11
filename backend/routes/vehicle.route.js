var Vehicle = require("../models/vehicle.model");
const _ = require("lodash");

module.exports = function(router, async) {
  router.get("/api/vehicle", function(req, res, next) {
    Vehicle.find(function(err, vehicle) {
      if (err) {
        return next(err);
      }
      res.json(vehicle);
    });
  });

  router.get("/api/vehicle/:id", function(req, res, next) {
    Vehicle.findById({ _id: req.params.id }, function(err, vehicle) {
      if (err) {
        return next(err);
      }
      res.json(vehicle);
    });
  });

  router.post("/api/vehicle", function(req, res, next) {
    var new_vehicle = new Vehicle({
      name: req.body.name,
      reg: req.body.reg
    });
    new_vehicle.save(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ info: "success" });
    });
  });

  router.put("/api/vehicle/:id", (req, res, next) => {
    Vehicle.findById(req.params).exec((err, vehicle) => {
      if (err) {
        return next(err);
      }
      _.merge(vehicle, req.body);
      vehicle.save(err => {
        if (err) {
          return next(err);
        }
        res.json({ response: "vehicle updated" });
      });
    });
  });

  router.delete("/api/vehicle/:id", (req, res, next) => {
    Vehicle.findByIdAndRemove(req.params.id, err => {
      if (err) {
        return next(err);
      }
      res.json({ response: "vehicle removed" });
    });
  });
};

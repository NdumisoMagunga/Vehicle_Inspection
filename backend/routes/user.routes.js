var User = require("../models/user.model");
var _ = require("lodash");

module.exports = function(router, async, flash) {
  router.get("/profile/:id", function(req, res, next) {
    User.findById({ _id: req.params.id }, function(err, user) {
      if (err) {
        return next(err);
      }
      res.json({ info: "success" });
    });
  });

  router.get("/user/profile", function(req, res, next) {
    User.findOne({ _id: req.user._id }, function(err, user) {
      if (err) {
        return next(err);
      }
      res.json({ info: "success", data: user });
    });
  });

  router.get("/user/user", function(req, res, next) {
    User.find(function(err, user) {
      if (err) {
        return next(err);
      }
      res.json({ info: "success", data: user });
    });
  });

  router.post("/user/user", function(req, res, next) {
    var new_user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });
    new_user.save(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ info: "success" });
    });
  });
};

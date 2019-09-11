var Item = require("../models/item.model");
const _ = require("lodash");

module.exports = function(router, async) {
  router.get("/api/item", function(req, res, next) {
    Item.find(function(err, item) {
      if (err) {
        return next(err);
      }
      res.json(item);
    });
  });

  router.get("/api/item/:id", function(req, res, next) {
    Item.findById({ _id: req.params.id }, function(err, item) {
      if (err) {
        return next(err);
      }
      res.json(item);
    });
  });

  router.post("/api/item", function(req, res, next) {
    var new_item = new Item({
      name: req.body.name,
      status: req.body.status,
      comment: req.body.comment
    });
    new_item.save(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ info: "success" });
    });
  });

  router.put("/api/item/:id", (req, res, next) => {
    Item.findById(req.params.id).exec((err, item) => {
      if (err) {
        return next(err);
      }
      if(req.body.name){
        item.name = req.body.name;
      }
      if(req.body.status){
        item.status = req.body.status;
      }
      if(req.body.comment){
        item.comment = req.body.comment;
      }
      item.save(err => {
        if (err) {
          return next(err);
        }
        res.json({response: "item updated"});
      });
    });
  });

  router.delete("/api/item/:id", (req, res, next) => {
    Item.findByIdAndRemove(req.params.id, err => {
      if (err) {
        return next(err);
      }
      res.json({ response: "item removed" });
    });
  });
};

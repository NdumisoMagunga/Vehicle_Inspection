var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");
var fs = require("fs");
var path = require("path");
var cookieSession = require("cookie-session");
var bodyParser = require("body-parser");

var compression = require("compression");
var cors = require("cors");
var async = require("async");
var secret = require("./config/secret");

mongoose.Promise = global.Promise;

mongoose.connect(secret.database, { useMongoClient: true }, function(err) {
  if (err) {
    console.log("cannot connect to the database");
  } else {
    console.log("connected to the database");
  }
});

var app = express();
app.use(express.static(path.join(__dirname, "client/build")));
app.use(compression());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "200mb",
    parameterLimit: 100000
  })
);
app.use(morgan("dev"));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [secret.secretKey]
  })
);

app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true
  })
);

require("./routes/item.route")(app, async);
require("./routes/user.routes")(app, async);
require("./routes/vehicle.route")(app, async);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(secret.port);

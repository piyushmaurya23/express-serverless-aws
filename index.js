const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send({ message: "Hello World!" });
});

app.get("/api", function(req, res) {
  res.send({ message: "Hello World!" });
});

app.get("*", function(req, res) {
  res.send({ error: "Undefined Route" });
});

module.exports.handler = serverless(app);

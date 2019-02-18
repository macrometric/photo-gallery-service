const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const db = require("../database/index.js");

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Retrieves ALL data
app.get("/products", (req, res) => {
  // console.log("Inside of products");
  db.read((err, data) => {
    if (err) {
      console.log("Error in app.get /products", err);
      res.sendStatus(400);
    }
    // console.log("Data from app.get /products", data);
    res.json(data);
  });
});

app.get("/products/:id", (req, res) => {
  let id = req.params.id;

  db.findById(id, (err, data) => {
    if (err) {
      console.log("Error in app.get /products/:id", err);
      res.sendStatus(400);
    }
    // console.log("Data from app.get /products", data);
    res.json(data);
  });
});

app.listen(port, function() {
  console.log(`I am listening on port ${port}`);
});

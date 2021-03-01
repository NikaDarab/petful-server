const express = require("express");
const json = require("body-parser").json();
const Cats = require("../cats/cats.service");

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    // Return all pets currently up for adoption.
    res.status(200).json(Cats.get());
  })

  .delete(json, (req, res) => {
    // Remove a pet from adoption.
    Cats.dequeue();
    res.status(200).end();
  });

module.exports = router;

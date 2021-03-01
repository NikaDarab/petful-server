const express = require("express");
const json = require("body-parser").json();
const Dogs = require("../dogs/dogs.service");

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    // Return all pets currently up for adoption.
    res.status(200).json(Dogs.get());
  })

  .delete(json, (req, res) => {
    // Remove a pet from adoption.
    Dogs.dequeue();
    res.status(200).end();
  });

module.exports = router;

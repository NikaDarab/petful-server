const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    // Return all the people currently in the queue.
    res.status(200).json(People.get());
  })
  .post(json, (req, res) => {
    // Add a new person to the queue.
    console.log(req);
    const { name } = req.body;
    const person = name;

    People.enqueue(person);
    res.status(204).end();
  })
  .delete((req, res, next) => {
    People.dequeue();
    res.status(200).end();
  });

module.exports = router;

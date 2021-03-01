const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("../../errorHandler");

const app = express();
const peopleRouter = require("../people/people.router");
const catsRouter = require("../cats/cats.router");
const dogsRouter = require("../dogs/dogs.router");
//test
const morganSetting = process.env.NODE_ENV === "production" ? "tiny" : "common";
app.use(morgan(morganSetting));
app.use(cors());
app.use(helmet());

app.use("/api/people", peopleRouter);
app.use("/api/cats", catsRouter);
app.use("/api/dogs", dogsRouter);
app.get("/", (req, res) => {
  res.send("Hello, pets!!!");
});

app.use(errorHandler);
module.exports = app;

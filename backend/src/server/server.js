//---IMPORTS
const express = require("express");
const cors = require("cors");
const path = require("path");

//---INITIALIZATIONS
const app = express();

//---MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//---STATICS
app.use(express.static(path.join(__dirname, "../public")));

//---ROUTES
app.use("/images", require("../routes/images.routes"));

//---EXPORT
module.exports = app;

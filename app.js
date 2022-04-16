//Imports
const config = require("./utils/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());

//Route Imports
const authRoute = require("./routes/auth");
const modelRoute = require("./routes/model");
const influencerRoute = require("./routes/influencer");

//Database Connection
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful!!!!");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

//Route Handlers
app.use("/api/auth", authRoute);
app.use("/api/model", modelRoute);
app.use("/api/influencer", influencerRoute);

//Module Export
module.exports = app;

require("dotenv").config();
const mongoose = require("mongoose");

// const Local = process.env.LOCAL_URL;
const Online = process.env.MONGODB_URL;

const db = mongoose
  .connect(Online, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => {
    console.log("Database connected");
  })
  .catch(err => {
    console.log("Unable to connect", err.message);
  });

module.exports = db;

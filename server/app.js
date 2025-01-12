const express = require("express");
require("dotenv").config();
require("./config");
const cors = require("cors");
const historyRoute = require("./routes/history.routes.js");

const app = express();
//Middleware for Handling CORS policy
app.use(cors());
app.use(
  cors({
    origin: process.env.CLIENT,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.get("/", async (req, res) =>
  res.status(200).send({
    status: true,
    message: "😊",
    data: {
      service: "Calculator-Demo API",
      version: "1.0",
    },
  })
);

app.use("/history", historyRoute);

module.exports = app;

const express = require("express");
const router = express.Router();
const History = require("../controllers/History");

router.post("/", History.createHistory);

router.get("/", History.getAllHistory);

router.get("/:id", History.getOneHistory);

router.put("/:id", History.updateHistory);

router.delete("/:id", History.deleteHistory);

module.exports = router;

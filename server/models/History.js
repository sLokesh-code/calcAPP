const mongoose = require("mongoose");

const HistorySchema = mongoose.Schema(
  {
    expression: {
      type: String,
      required: true,
    },
    result: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const History = mongoose.model("History", HistorySchema);

module.exports = History;
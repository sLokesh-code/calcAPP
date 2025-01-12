
const History = require("../models/History");

exports.createHistory = async (req, res) => {
  try {
    const { expression, result } = req.body;
    if (!expression || !result) {
      return res.status(400).send({
        msg: "send all required fields: expression, result",
      });
    }

    const data = { expression, result };
    const newHistory = await History.create(data);
    return res.status(201).send(newHistory);
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

exports.getAllHistory = async (req, res) => {
  try {
    const Historys = await History.find({})
      .sort({ createdAt: -1 }) // Sort by createdAt field in ascending order
      .limit(20); // return the lastest 20 calculations made

    return res.status(200).json({
      count: Historys.length,
      data: Historys,
    });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

exports.getOneHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const history = await History.findById(id);

    if (!history)
      return res.status(404).json({ msg: "this history does not exist" });

    return res.status(200).json(history);
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

exports.updateHistory = async (req, res) => {
  try {
    const { expression, result } = req.body;
    if (!expression || !result) {
      return res.status(400).send({
        msg: "send all required fields: expression, result",
      });
    }

    const { id } = req.params;
    const historyUpdated = await History.findByIdAndUpdate(id, req.body);

    if (!historyUpdated)
      return res.status(404).json({ msg: "this history does not exist" });

    return res.status(200).json({ msg: "history updated successfully" });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

exports.deleteHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteHistory = await History.findByIdAndDelete(id);

    if (!deleteHistory)
      return res.status(404).json({ msg: "this history does not exist" });

    return res.status(200).json({ msg: "history deleted successfully" });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

const router = require("express").Router();
const { verifyToken } = require("../utils/verifyToken");
const Model = require("../models/Model");

//Create a Model
router.post("/", verifyToken, async (req, res) => {
  const newModel = new Model(req.body);
  try {
    const savedModel = await newModel.save();
    res.status(200).json(savedModel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Edit a Model
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedModel = await Model.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedModel);
    console.log(updatedModel);
  } catch (error) {
    res.status(500).json(err);
  }
});

//Delete Model
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.status(200).json("Model Info has been Deleted!!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Model
router.get("/find/:id", async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    res.status(200).json(model);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all Models
router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const models = query
      ? await Model.find().sort({ _id: -1 }).limit(5) //Query to show latest users. limit() method controls how many would be shown.
      : await Model.find();
    res.status(200).json(models);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

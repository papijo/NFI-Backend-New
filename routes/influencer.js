const router = require("express").Router();
const Influencer = require("../models/Influencer");
const { verifyToken } = require("../utils/verifyToken");

//Create an Influencer
router.post("/", verifyToken, async (req, res) => {
  console.log(req.body);
  const newInfluencer = new Influencer(req.body);
  try {
    const savedInfluencer = await newInfluencer.save();
    res.status(200).json(savedInfluencer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Edit a Influencer
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedInfluencer = await Influencer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedInfluencer);
  } catch (error) {
    res.status(500).json(err);
  }
});

//Delete Influencer
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Influencer.findByIdAndDelete(req.params.id);
    res.status(200).json("Influencer Info has been Deleted!!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Influencer
router.get("/find/:id", async (req, res) => {
  try {
    const influencer = await Influencer.findById(req.params.id);
    res.status(200).json(influencer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all Influencers
router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const influencers = query
      ? await Influencer.find().sort({ _id: -1 }).limit(5) //Query to show latest users. limit() method controls how many would be shown.
      : await Influencer.find();
    res.status(200).json(influencers);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    dob: { type: String, required: true, min: "2004-01-01" }, //Date of Birth
    bust: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: String, required: true },
    waist: { type: String, required: true },
    hips: { type: String, required: true },
    hairColor: { type: String, required: true },
    eyeColor: { type: String, required: true },
    shoeSize: { type: String, required: true },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String },
    img6: { type: String },
    img7: { type: String },
    img8: { type: String },
    placement: [
      {
        name: { type: String },
        location: { type: String },
        id: { type: Number },
      },
    ],

    instagram: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Model", ModelSchema);

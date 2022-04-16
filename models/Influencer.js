const mongoose = require("mongoose");

const InfluencerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    singleInstagramPost: { type: String, required: true },
    videoContentSinglePost: { type: String, required: true },
    beautifyBrands: { type: String, required: true },
    instagramStoryPost: { type: String, required: true },
    instagramReels: { type: String, required: true },
    ambassadorialDealOneMonth: { type: String, required: true },
    ambassadorialDealThreeMonth: { type: String, required: true },
    ambassadorialDealSixMonth: { type: String, required: true },
    clientFlyer: { type: String, required: true },
    catalogShoots: { type: String, required: true },
    musicVideosNT: { type: String, required: true },
    musicVideosDT: { type: String, required: true },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String },
    img6: { type: String },
    img7: { type: String },
    img8: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Influencer", InfluencerSchema);

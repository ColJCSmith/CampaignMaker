const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const caseStudySchema = new Schema(
  {
    CampaignName: {
      type: String,
      trim: true,
      required: "Give your campaign a name"
    },
    CampaignDesc: {
      type: String,
      trim: false,
      required: "Describe the campaign you are launching"
    },
    RecDonation: {
      type: Number,
      required: "Enter an amount"
    },
    StartDate: {
      type: Date,
      default: Date.now
    },
    EndDate: {
      type: Date,
      default: Date.now
    }
  }
);

const caseStudy = mongoose.model("caseStudy", caseStudySchema);

module.exports = caseStudy;
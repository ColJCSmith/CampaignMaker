const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const campaignSchema = new Schema(
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
    },
    CaseStudy: {
      type: Schema.ObjectId,
      ref: 'Persona'
    }
  }
);

const Campaign = mongoose.model("campaign", campaignSchema);

module.exports = Campaign;

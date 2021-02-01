const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const campaignSchema = new Schema(
  {
    CampaignName: {
      type: String,
      trim: true,
      required: "Enter a Give your campaign a name"
    },
    CampaignDesc: {
      type: String,
      trim: false,
      required: "Describe the campaign you are building"
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

const Transaction = mongoose.model("Campaign", campaignSchema);

module.exports = Transaction;

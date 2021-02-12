// Build the model (ORM) for the campaigns users will input 

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const campaignSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    donation: {
      type: Number,
      required: true
    },
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: {
      type: Date,
      default: Date.now,
      required: true
    },
    caseStudy: {
      type: Schema.ObjectId,
      ref: 'Persona',
      required: true
    }
  }
);

const Campaign = mongoose.model("campaign", campaignSchema);

module.exports = Campaign;
